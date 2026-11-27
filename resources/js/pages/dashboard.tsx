import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@headlessui/react';
import { Head, Link, router } from '@inertiajs/react';
import { ArrowUpRight, CalendarDays, CreditCard, Globe2, Plus, ShieldCheck, Smartphone } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Личный кабинет',
        href: '/dashboard',
    },
];

const subscriptions = [
    {
        id: 1,
        name: 'Premium',
        status: 'Активна',
        expires: '13 декабря 2026',
        daysLeft: 30,
        devices: 3,
        maxDevices: 5,
        country: 'Нидерланды',
        color: 'bg-green-500',
    },
];

const purchases = [
    {
        id: '#10482',
        name: 'Premium — 1 месяц',
        date: '13 ноября 2026',
        amount: '199 ₽',
        status: 'Оплачен',
    },
    {
        id: '#10391',
        name: 'Premium — 3 месяца',
        date: '10 августа 2026',
        amount: '499 ₽',
        status: 'Оплачен',
    },
    {
        id: '#10215',
        name: 'Premium — 1 месяц',
        date: '10 июля 2026',
        amount: '199 ₽',
        status: 'Оплачен',
    },
];

function SectionTitle({ title, description, action }: { title: string; description?: string; action?: React.ReactNode }) {
    return (
        <div className="mb-5 flex items-center justify-between gap-4">
            <div>
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                {description && <p className="text-muted-foreground mt-1 text-sm">{description}</p>}
            </div>
            {action}
        </div>
    );
}

const selectTariff = (tariffId: number) => {
    router.post(route('payments.create'), {
        tariff_id: tariffId,
    });
};

interface Tariff {
    id: number;
    name: string;
    descr: string;
    max_devices: number;
    price: number;
    old_price: number;
    duration_day: number;
}

export default function Dashboard({ ...props }: { tariffs: Tariff[] }) {
    const { tariffs } = props;
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Личный кабинет" />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                {/* Welcome */}
                <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-muted-foreground text-sm">Личный кабинет</p>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight">Добро пожаловать!</h1>
                            <p className="text-muted-foreground mt-2 text-sm">Управляйте подписками и следите за своими покупками.</p>
                        </div>

                        <Link
                            href="/tariffs"
                            className="bg-primary inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            <Plus size={17} />
                            Купить подписку
                        </Link>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="bg-card rounded-2xl border p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-sm">Активные подписки</span>
                            <ShieldCheck className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">{subscriptions.length}</div>
                        <p className="text-muted-foreground mt-1 text-xs">Доступно прямо сейчас</p>
                    </div>

                    <div className="bg-card rounded-2xl border p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-sm">Используется устройств</span>
                            <Smartphone className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">
                            3 <span className="text-muted-foreground text-lg font-normal">/ 5</span>
                        </div>
                        <p className="text-muted-foreground mt-1 text-xs">В рамках активной подписки</p>
                    </div>

                    <div className="bg-card rounded-2xl border p-5 sm:col-span-2 xl:col-span-1">
                        <div className="flex items-center justify-between">
                            <span className="text-muted-foreground text-sm">Всего покупок</span>
                            <CreditCard className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">{purchases.length}</div>
                        <p className="text-muted-foreground mt-1 text-xs">История ваших заказов</p>
                    </div>
                </div>

                {/* Active subscriptions */}
                <section>
                    <SectionTitle title="Мои подписки" description="Управление вашими активными VPN-подписками" />

                    {subscriptions.length > 0 ? (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {subscriptions.map((subscription) => (
                                <div key={subscription.id} className="bg-card overflow-hidden rounded-2xl border">
                                    <div className="p-5 md:p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                                                    <ShieldCheck size={25} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">{subscription.name}</h3>
                                                    <p className="text-muted-foreground text-xs">Подписка #{subscription.id}</p>
                                                </div>
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600">
                                                <span className="size-1.5 rounded-full bg-green-500" />
                                                {subscription.status}
                                            </span>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-muted-foreground text-xs">Действует до</p>
                                                <p className="mt-1 text-sm font-semibold">{subscription.expires}</p>
                                            </div>
                                            <div>
                                                <p className="text-muted-foreground text-xs">Осталось</p>
                                                <p className="mt-1 text-sm font-semibold">{subscription.daysLeft} дней</p>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <div className="mb-2 flex justify-between text-xs">
                                                <span className="text-muted-foreground">Устройства</span>
                                                <span className="font-medium">
                                                    {subscription.devices} из {subscription.maxDevices}
                                                </span>
                                            </div>
                                            <div className="bg-muted h-2 overflow-hidden rounded-full">
                                                <div
                                                    className="h-full rounded-full bg-green-500"
                                                    style={{
                                                        width: `${(subscription.devices / subscription.maxDevices) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="text-muted-foreground mt-5 flex flex-wrap items-center gap-2 text-xs">
                                            <Globe2 size={15} />
                                            Сервер: {subscription.country}
                                        </div>
                                    </div>

                                    <div className="bg-muted/30 flex flex-wrap items-center gap-3 border-t p-4">
                                        <Link
                                            href={`/subscriptions/${subscription.id}`}
                                            className="bg-primary inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium text-white transition hover:bg-green-700"
                                        >
                                            Управлять
                                            <ArrowUpRight size={15} />
                                        </Link>
                                        <Link
                                            href="/tariffs"
                                            className="bg-background hover:bg-muted inline-flex h-9 flex-1 items-center justify-center rounded-lg border px-3 text-sm font-medium transition"
                                        >
                                            Продлить
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed p-10 text-center">
                            <ShieldCheck className="text-muted-foreground mx-auto" size={32} />
                            <h3 className="mt-3 font-semibold">У вас пока нет подписок</h3>
                            <p className="text-muted-foreground mt-1 text-sm">Выберите тариф и получите доступ к ChameleoVPN.</p>
                            <Link
                                href="/tariffs"
                                className="bg-primary mt-5 inline-flex h-10 items-center rounded-xl px-5 text-sm font-medium text-white hover:bg-green-700"
                            >
                                Выбрать тариф
                            </Link>
                        </div>
                    )}
                </section>

                {/* Available tariffs */}
                <section>
                    <SectionTitle
                        title="Доступные тарифы"
                        description="Выберите подходящий период использования ChameleoVPN"
                        action={
                            <Link
                                href="/tariffs"
                                className="hidden items-center gap-1 text-sm font-medium text-green-600 hover:text-green-700 sm:flex"
                            >
                                Все тарифы
                                <ArrowUpRight size={16} />
                            </Link>
                        }
                    />

                    {/* TARIFFS GRID */}
                    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                        {tariffs.map((tariff) => (
                            <div
                                key={tariff.id}
                                className="group bg-card relative flex flex-col overflow-hidden rounded-2xl border shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:shadow-lg"
                            >
                                {/* DECORATIVE BACKGROUND */}
                                <div className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-green-500/5 blur-2xl transition-all group-hover:bg-green-500/10" />

                                <div className="relative flex flex-1 flex-col p-6">
                                    {/* HEADER */}
                                    <div className="mb-6 flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500/10 text-green-600">
                                                <ShieldCheck size={25} />
                                            </div>

                                            <div>
                                                <h2 className="text-lg font-bold tracking-tight">{tariff.name}</h2>
                                                <span className="text-muted-foreground text-xs">Тариф подписки</span>
                                            </div>
                                        </div>

                                        <span className="rounded-full border border-green-500/20 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                                            Активен
                                        </span>
                                    </div>

                                    {/* PRICE */}
                                    <div className="mb-5 flex items-end gap-2">
                                        <span className="text-4xl font-bold tracking-tight">{Number(tariff.price).toLocaleString('ru-RU')} ₽</span>

                                        {Number(tariff.old_price) > Number(tariff.price) && (
                                            <span className="text-muted-foreground mb-1 text-sm line-through">
                                                {Number(tariff.old_price).toLocaleString('ru-RU')} ₽
                                            </span>
                                        )}
                                    </div>

                                    {/* DESCRIPTION */}
                                    <p className="text-muted-foreground mb-6 min-h-[60px] text-sm leading-6">
                                        {tariff.descr || 'Описание тарифа не указано'}
                                    </p>

                                    {/* FEATURES */}
                                    <div className="mb-6 space-y-3">
                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                                                <Smartphone size={16} className="text-muted-foreground" />
                                            </div>
                                            <span>
                                                До <strong>{tariff.max_devices}</strong> устройств
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3 text-sm">
                                            <div className="bg-muted flex h-8 w-8 items-center justify-center rounded-lg">
                                                <CalendarDays size={16} className="text-muted-foreground" />
                                            </div>
                                            <span>
                                                <strong>{tariff.duration_day}</strong> дней действия
                                            </span>
                                        </div>
                                    </div>

                                    <Button
                                        className="bg-primary mt-5 inline-flex h-10 items-center justify-center rounded-xl px-5 text-sm font-medium text-white hover:bg-green-700"
                                        onClick={() => selectTariff(tariff.id)}
                                    >
                                        Выбрать тариф
                                    </Button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer hint */}
                <div className="bg-muted/20 flex items-start gap-3 rounded-2xl border p-5">
                    <div className="rounded-xl bg-green-500/10 p-2 text-green-600">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">Ваше соединение под защитой</h3>
                        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
                            ChameleoVPN помогает защитить ваше интернет-соединение и сохранить конфиденциальность в сети.
                        </p>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
