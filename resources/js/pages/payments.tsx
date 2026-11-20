import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { ArrowUpRight, Check, Clock3, CreditCard, XCircle } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'История платежей',
        href: '/payments',
    },
];

interface Tariff {
    id: number;
    name: string;
}

interface Payment {
    id: number;
    tariff_id: number;
    subscription_id: number | null;
    amount: number | string;
    external_id: string | null;
    status: string;
    paid_at: string | null;
    created_at: string;
    tariff?: Tariff | null;
}

interface Props {
    payments: Payment[];
}

const statusConfig: Record<string, { label: string; className: string; icon: typeof Check }> = {
    paid: {
        label: 'Оплачен',
        className: 'bg-green-500/10 text-green-600',
        icon: Check,
    },
    pending: {
        label: 'Ожидает оплаты',
        className: 'bg-yellow-500/10 text-yellow-600',
        icon: Clock3,
    },
    failed: {
        label: 'Ошибка оплаты',
        className: 'bg-red-500/10 text-red-600',
        icon: XCircle,
    },
    cancelled: {
        label: 'Отменён',
        className: 'bg-muted text-muted-foreground',
        icon: XCircle,
    },
};

const formatDate = (date: string | null) => {
    if (!date) return '—';

    return new Date(date).toLocaleDateString('ru-RU', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });
};

const formatPrice = (amount: number | string) => {
    return `${Number(amount).toLocaleString('ru-RU')} ₽`;
};

export default function Payments({ payments }: Props) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="История платежей" />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                {/* HEADER */}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">История платежей</h1>

                    <p className="text-muted-foreground mt-2 text-sm">Ваши последние заказы и платежи</p>
                </div>

                {/* PAYMENTS */}
                <section>
                    <div className="bg-card overflow-hidden rounded-2xl border">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-muted/40 text-muted-foreground border-b text-xs">
                                    <tr>
                                        <th className="px-5 py-4 font-medium">Платёж</th>

                                        <th className="px-5 py-4 font-medium">Тариф</th>

                                        <th className="px-5 py-4 font-medium">Дата</th>

                                        <th className="px-5 py-4 font-medium">Сумма</th>

                                        <th className="px-5 py-4 font-medium">Статус</th>

                                        <th className="px-5 py-4 font-medium">Действие</th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y">
                                    {payments.map((payment) => {
                                        const status = statusConfig[payment.status] ?? {
                                            label: payment.status,
                                            className: 'bg-muted text-muted-foreground',
                                            icon: Clock3,
                                        };

                                        const StatusIcon = status.icon;

                                        return (
                                            <tr key={payment.id} className="hover:bg-muted/30 transition">
                                                <td className="px-5 py-4 font-medium whitespace-nowrap">#{payment.id}</td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    {payment.tariff?.name ?? `Тариф #${payment.tariff_id}`}
                                                </td>

                                                <td className="text-muted-foreground px-5 py-4 whitespace-nowrap">
                                                    {formatDate(payment.created_at)}
                                                </td>

                                                <td className="px-5 py-4 font-semibold whitespace-nowrap">{formatPrice(payment.amount)}</td>

                                                <td className="px-5 py-4 whitespace-nowrap">
                                                    <span
                                                        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${status.className}`}
                                                    >
                                                        <StatusIcon size={13} />
                                                        {status.label}
                                                    </span>
                                                </td>

                                                {payment.status === 'pending' && payment.payment_url && (
                                                    <td className="px-5 py-4 whitespace-nowrap">
                                                        <a
                                                            href={payment.payment_url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-1.5 text-sm font-medium text-green-600 transition hover:text-green-700"
                                                        >
                                                            Перейти к оплате
                                                            <ArrowUpRight size={15} />
                                                        </a>
                                                    </td>
                                                )}
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        </div>

                        {payments.length === 0 && (
                            <div className="flex flex-col items-center justify-center px-6 py-14 text-center">
                                <div className="bg-muted mb-4 flex h-14 w-14 items-center justify-center rounded-2xl">
                                    <CreditCard size={26} className="text-muted-foreground" />
                                </div>

                                <h3 className="text-base font-semibold">Платежей пока нет</h3>

                                <p className="text-muted-foreground mt-2 max-w-sm text-sm">
                                    Здесь будут отображаться ваши покупки и история платежей.
                                </p>

                                <Link
                                    href="/tariffs"
                                    className="mt-5 inline-flex items-center gap-2 rounded-xl bg-green-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                                >
                                    Выбрать тариф
                                </Link>
                            </div>
                        )}
                    </div>
                </section>

                {/* FOOTER */}
                <div className="bg-muted/20 flex items-start gap-3 rounded-2xl border p-5">
                    <div className="rounded-xl bg-green-500/10 p-2 text-green-600">
                        <CreditCard size={20} />
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold">Безопасные платежи</h3>

                        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                            Информация о ваших платежах и статусах покупок доступна в этом разделе личного кабинета.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
