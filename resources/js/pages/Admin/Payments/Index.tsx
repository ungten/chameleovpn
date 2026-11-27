import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, router } from '@inertiajs/react';
import {
    ArrowUpRight,
    CalendarDays,
    Check,
    CheckCircle2,
    ChevronLeft,
    ChevronRight,
    Clock3,
    CreditCard,
    RefreshCw,
    Search,
    ShieldCheck,
    Trash2,
    UserRound,
    Wallet,
    XCircle,
} from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Платежи', href: '/admin/payments' }];

interface User {
    id: number;
    name: string;
    telegram_id: string | null;
}

interface Tariff {
    id: number;
    name: string;
    duration: number;
}

interface Subscription {
    id: number;
    status: string;
    starts_at: string;
    expires_at: string;
}

interface Payment {
    id: number;
    user_id: number;
    tariff_id: number;
    subscription_id: number | null;
    amount: number | string;
    external_id: string | null;
    payment_url: string | null;
    status: string;
    paid_at: string | null;
    created_at: string;
    user?: User | null;
    tariff?: Tariff | null;
    subscription?: Subscription | null;
}

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface PaginatedPayments {
    data: Payment[];
    current_page: number;
    last_page: number;
    total: number;
    from: number | null;
    to: number | null;
    links: PaginationLink[];
}

interface Props {
    payments: PaginatedPayments;
    filters: {
        search?: string;
        status?: string;
    };
    stats: {
        total: number;
        paid: number;
        pending: number;
        cancelled: number;
        revenue: number;
    };
}

const statusConfig: Record<
    string,
    {
        label: string;
        className: string;
        icon: typeof Check;
    }
> = {
    succeeded: {
        label: 'Оплачен',
        className: 'bg-green-500/10 text-green-600',
        icon: CheckCircle2,
    },
    pending: {
        label: 'Ожидает',
        className: 'bg-yellow-500/10 text-yellow-600',
        icon: Clock3,
    },
    cancelled: {
        label: 'Отменён',
        className: 'bg-muted text-muted-foreground',
        icon: XCircle,
    },
};

const formatPrice = (amount: number | string) => `${Number(amount).toLocaleString('ru-RU')} ₽`;

const formatDate = (date: string | null) => {
    if (!date) return '—';

    return new Date(date).toLocaleString('ru-RU', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
    });
};

export default function Payments({ payments, filters, stats }: Props) {
    const [search, setSearch] = useState(filters.search ?? '');
    const [statusFilter, setStatusFilter] = useState(filters.status ?? 'all');

    const [processingId, setProcessingId] = useState<number | null>(null);

    const applyFilters = () => {
        router.get(
            '/admin/payments',
            {
                search: search || undefined,
                status: statusFilter === 'all' ? undefined : statusFilter,
            },
            {
                preserveState: true,
                replace: true,
            },
        );
    };

    const changeStatus = (payment: Payment, status: string) => {
        if (payment.status === status) return;

        if (status === 'succeeded' && !confirm(`Подтвердить оплату платежа #${payment.id}?`)) return;

        router.patch(`/admin/payments/${payment.id}/status`, { status }, { preserveScroll: true });
    };

    const deletePayment = (payment: Payment) => {
        if (!confirm(`Удалить платёж #${payment.id}? Это действие нельзя отменить.`)) return;

        router.delete(`/admin/payments/${payment.id}`, {
            preserveScroll: true,
        });
    };

    const issueSubscription = (payment: Payment) => {
        if (!confirm(`Выдать подписку пользователю по платежу #${payment.id}?`)) return;

        setProcessingId(payment.id);

        router.post(
            `/admin/payments/${payment.id}/issue-subscription`,
            {},
            {
                preserveScroll: true,
                onFinish: () => setProcessingId(null),
            },
        );
    };

    const statCards = [
        {
            title: 'Всего платежей',
            value: stats.total.toLocaleString('ru-RU'),
            icon: CreditCard,
            color: 'text-blue-500',
            bg: 'bg-blue-500/10',
        },
        {
            title: 'Успешные платежи',
            value: stats.paid.toLocaleString('ru-RU'),
            icon: CheckCircle2,
            color: 'text-green-500',
            bg: 'bg-green-500/10',
        },
        {
            title: 'Ожидают оплаты',
            value: stats.pending.toLocaleString('ru-RU'),
            icon: Clock3,
            color: 'text-yellow-500',
            bg: 'bg-yellow-500/10',
        },
        {
            title: 'Общая выручка',
            value: formatPrice(stats.revenue),
            icon: Wallet,
            color: 'text-purple-500',
            bg: 'bg-purple-500/10',
        },
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Управление платежами" />

            <div className="flex flex-1 flex-col gap-6 p-4 md:p-6 lg:p-8">
                {/* HEADER */}
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-2xl font-bold tracking-tight">Управление платежами</h1>
                        <p className="text-muted-foreground mt-1 text-sm">История транзакций, управление оплатами и выдача подписок.</p>
                    </div>

                    <button
                        onClick={() => router.reload()}
                        className="hover:bg-muted inline-flex items-center justify-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-medium transition"
                    >
                        <RefreshCw size={16} />
                        Обновить
                    </button>
                </div>

                {/* STATISTICS */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {statCards.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div key={item.title} className="bg-card rounded-2xl border p-5">
                                <div className="flex items-center justify-between">
                                    <span className="text-muted-foreground text-sm">{item.title}</span>

                                    <div className={`rounded-xl p-2.5 ${item.bg} ${item.color}`}>
                                        <Icon size={19} />
                                    </div>
                                </div>

                                <div className="mt-4 text-2xl font-bold tracking-tight">{item.value}</div>
                            </div>
                        );
                    })}
                </div>

                {/* FILTERS */}
                <div className="bg-card rounded-2xl border p-4">
                    <div className="flex flex-col gap-3 lg:flex-row">
                        <div className="relative flex-1">
                            <Search size={18} className="text-muted-foreground absolute top-1/2 left-3 -translate-y-1/2" />

                            <input
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') applyFilters();
                                }}
                                placeholder="Поиск по ID, пользователю или внешнему ID..."
                                className="bg-background h-11 w-full rounded-xl border pr-4 pl-10 text-sm transition outline-none focus:border-green-500"
                            />
                        </div>

                        <select
                            value={statusFilter}
                            onChange={(e) => {
                                const value = e.target.value;
                                setStatusFilter(value);

                                router.get(
                                    '/admin/payments',
                                    {
                                        search: search || undefined,
                                        status: value === 'all' ? undefined : value,
                                    },
                                    {
                                        preserveState: true,
                                        replace: true,
                                    },
                                );
                            }}
                            className="bg-background h-11 rounded-xl border px-4 text-sm outline-none lg:w-52"
                        >
                            <option value="all">Все статусы</option>
                            <option value="succeeded">Оплаченные</option>
                            <option value="pending">Ожидают оплаты</option>
                            <option value="cancelled">Отменённые</option>
                        </select>

                        <button
                            onClick={applyFilters}
                            className="h-11 rounded-xl bg-green-600 px-6 text-sm font-semibold text-white transition hover:bg-green-700"
                        >
                            Найти
                        </button>
                    </div>
                </div>

                {/* TABLE */}
                <div className="bg-card overflow-hidden rounded-2xl border">
                    <div className="flex flex-col gap-2 border-b p-5 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                            <h2 className="font-semibold">Все платежи</h2>
                            <p className="text-muted-foreground mt-1 text-xs">Всего записей: {payments.total}</p>
                        </div>

                        <span className="text-muted-foreground text-xs">
                            Страница {payments.current_page} из {payments.last_page}
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full min-w-[1050px] text-left text-sm">
                            <thead className="bg-muted/40 text-muted-foreground border-b text-xs">
                                <tr>
                                    <th className="px-5 py-4 font-medium">Платёж</th>
                                    <th className="px-5 py-4 font-medium">Пользователь</th>
                                    <th className="px-5 py-4 font-medium">Тариф</th>
                                    <th className="px-5 py-4 font-medium">Дата</th>
                                    <th className="px-5 py-4 font-medium">Сумма</th>
                                    <th className="px-5 py-4 font-medium">Статус</th>
                                    <th className="px-5 py-4 font-medium">Подписка</th>
                                    <th className="px-5 py-4 text-right font-medium">Действия</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y">
                                {payments.data.map((payment) => {
                                    const status = statusConfig[payment.status] ?? {
                                        label: payment.status,
                                        className: 'bg-muted text-muted-foreground',
                                        icon: Clock3,
                                    };

                                    const StatusIcon = status.icon;

                                    return (
                                        <tr key={payment.id} className="hover:bg-muted/30 transition">
                                            {/* PAYMENT */}
                                            <td className="px-5 py-4">
                                                <div className="font-semibold">#{payment.id}</div>

                                                <div className="text-muted-foreground mt-1 max-w-[150px] truncate text-xs">
                                                    {payment.external_id ?? 'Без внешнего ID'}
                                                </div>
                                            </td>

                                            {/* USER */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                                                        <UserRound size={15} />
                                                    </div>

                                                    <div>
                                                        <div className="font-medium">{payment.user?.name ?? `Пользователь #${payment.user_id}`}</div>

                                                        <div className="text-muted-foreground text-xs">
                                                            {payment.user?.telegram_id ? `TG: ${payment.user.telegram_id}` : `ID: ${payment.user_id}`}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>

                                            {/* TARIFF */}
                                            <td className="px-5 py-4">
                                                <div className="font-medium">{payment.tariff?.name ?? `Тариф #${payment.tariff_id}`}</div>

                                                {payment.tariff && (
                                                    <div className="text-muted-foreground mt-1 text-xs">{payment.tariff.duration_day} дней</div>
                                                )}
                                            </td>

                                            {/* DATE */}
                                            <td className="text-muted-foreground px-5 py-4 whitespace-nowrap">
                                                <div className="flex items-center gap-2">
                                                    <CalendarDays size={14} />
                                                    {formatDate(payment.created_at)}
                                                </div>
                                            </td>

                                            {/* AMOUNT */}
                                            <td className="px-5 py-4 font-semibold whitespace-nowrap">{formatPrice(payment.amount)}</td>

                                            {/* STATUS */}
                                            <td className="px-5 py-4">
                                                <div className="flex flex-col items-start gap-2">
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
                                                    >
                                                        <StatusIcon size={13} />
                                                        {status.label}
                                                    </span>

                                                    {payment.status !== 'succeeded' && (
                                                        <select
                                                            value={payment.status}
                                                            onChange={(e) => changeStatus(payment, e.target.value)}
                                                            className="bg-background max-w-[125px] rounded-lg border px-2 py-1 text-xs outline-none"
                                                        >
                                                            <option value="pending">Ожидает</option>
                                                            <option value="cancelled">Отменён</option>
                                                        </select>
                                                    )}
                                                </div>
                                            </td>

                                            {/* SUBSCRIPTION */}
                                            <td className="px-5 py-4">
                                                {payment.subscription ? (
                                                    <div>
                                                        <span className="inline-flex items-center gap-1 rounded-full bg-green-500/10 px-2.5 py-1 text-xs font-medium text-green-600">
                                                            <ShieldCheck size={13} />
                                                            Выдана
                                                        </span>

                                                        <div className="text-muted-foreground mt-1 text-xs">
                                                            До {formatDate(payment.subscription.expires_at)}
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <span className="text-muted-foreground text-xs">Не выдана</span>
                                                )}
                                            </td>

                                            {/* ACTIONS */}
                                            <td className="px-5 py-4">
                                                <div className="flex items-center justify-end gap-2">
                                                    {payment.status === 'pending' && payment.payment_url && (
                                                        <a
                                                            href={payment.payment_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            title="Открыть оплату"
                                                            className="hover:bg-muted rounded-lg border p-2 transition"
                                                        >
                                                            <ArrowUpRight size={16} />
                                                        </a>
                                                    )}

                                                    {payment.status === 'succeeded' && !payment.subscription_id && !payment.subscription && (
                                                        <button
                                                            onClick={() => issueSubscription(payment)}
                                                            disabled={processingId === payment.id}
                                                            title="Выдать подписку"
                                                            className="rounded-lg bg-green-500/10 p-2 text-green-600 transition hover:bg-green-500/20 disabled:opacity-50"
                                                        >
                                                            {processingId === payment.id ? (
                                                                <RefreshCw size={16} className="animate-spin" />
                                                            ) : (
                                                                <ShieldCheck size={16} />
                                                            )}
                                                        </button>
                                                    )}

                                                    <button
                                                        onClick={() => deletePayment(payment)}
                                                        title="Удалить платёж"
                                                        className="rounded-lg p-2 text-red-500 transition hover:bg-red-500/10"
                                                    >
                                                        <Trash2 size={16} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>

                    {/* EMPTY */}
                    {payments.data.length === 0 && (
                        <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
                            <div className="bg-muted mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                                <CreditCard size={26} className="text-muted-foreground" />
                            </div>

                            <h3 className="font-semibold">Платежи не найдены</h3>

                            <p className="text-muted-foreground mt-2 max-w-sm text-sm">По заданным параметрам платежей нет.</p>
                        </div>
                    )}

                    {/* PAGINATION */}
                    {payments.last_page > 1 && (
                        <div className="flex flex-col gap-4 border-t p-4 sm:flex-row sm:items-center sm:justify-between">
                            <p className="text-muted-foreground text-xs">
                                Показано {payments.from ?? 0}–{payments.to ?? 0} из {payments.total}
                            </p>

                            <div className="flex flex-wrap items-center gap-1">
                                {payments.links.map((link, index) => {
                                    if (index === 0 || index === payments.links.length - 1) {
                                        return (
                                            <button
                                                key={index}
                                                disabled={!link.url}
                                                onClick={() =>
                                                    link.url &&
                                                    router.get(
                                                        link.url,
                                                        {},
                                                        {
                                                            preserveState: true,
                                                            preserveScroll: true,
                                                        },
                                                    )
                                                }
                                                className="hover:bg-muted flex h-9 w-9 items-center justify-center rounded-lg border text-sm transition disabled:opacity-40"
                                            >
                                                {index === 0 ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
                                            </button>
                                        );
                                    }

                                    return (
                                        <button
                                            key={index}
                                            disabled={!link.url}
                                            onClick={() =>
                                                link.url &&
                                                router.get(
                                                    link.url,
                                                    {},
                                                    {
                                                        preserveState: true,
                                                        preserveScroll: true,
                                                    },
                                                )
                                            }
                                            className={`h-9 min-w-9 rounded-lg px-3 text-sm transition ${
                                                link.active ? 'bg-green-600 text-white' : 'hover:bg-muted border'
                                            }`}
                                            dangerouslySetInnerHTML={{ __html: link.label }}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

                {/* FOOTER */}
                <div className="bg-muted/20 flex items-start gap-3 rounded-2xl border p-5">
                    <div className="rounded-xl bg-green-500/10 p-2 text-green-600">
                        <ShieldCheck size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Управление VPN-подписками</h3>

                        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                            После подтверждения платежа администратор может вручную инициировать выдачу подписки. Создание подписки и синхронизация с
                            Remnawave должны выполняться однократно.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
