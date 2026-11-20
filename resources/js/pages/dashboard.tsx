
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';
import {
    ArrowUpRight,
    Check,
    Clock3,
    CreditCard,
    Crown,
    Download,
    Globe2,
    History,
    Plus,
    ShieldCheck,
    Smartphone,
    Zap,
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Личный кабинет',
        href: '/dashboard',
    },
];

const subscriptions = [
    // {
    //     id: 1,
    //     name: 'Premium',
    //     status: 'Активна',
    //     expires: '13 декабря 2026',
    //     daysLeft: 30,
    //     devices: 3,
    //     maxDevices: 5,
    //     country: 'Нидерланды',
    //     color: 'bg-green-500',
    // },
];

const tariffs = [
    {
        id: 1,
        name: '1 месяц',
        duration: '30 дней',
        price: 199,
        oldPrice: null,
        devices: 3,
        popular: false,
    },
    {
        id: 2,
        name: '3 месяца',
        duration: '90 дней',
        price: 499,
        oldPrice: 597,
        devices: 5,
        popular: true,
    },
    {
        id: 3,
        name: '12 месяцев',
        duration: '365 дней',
        price: 1499,
        oldPrice: 2388,
        devices: 5,
        popular: false,
    },
];

const purchases = [
    // {
    //     id: '#10482',
    //     name: 'Premium — 1 месяц',
    //     date: '13 ноября 2026',
    //     amount: '199 ₽',
    //     status: 'Оплачен',
    // },
    // {
    //     id: '#10391',
    //     name: 'Premium — 3 месяца',
    //     date: '10 августа 2026',
    //     amount: '499 ₽',
    //     status: 'Оплачен',
    // },
    // {
    //     id: '#10215',
    //     name: 'Premium — 1 месяц',
    //     date: '10 июля 2026',
    //     amount: '199 ₽',
    //     status: 'Оплачен',
    // },
];

function SectionTitle({
    title,
    description,
    action,
}: {
    title: string;
    description?: string;
    action?: React.ReactNode;
}) {
    return (
        <div className="mb-5 flex items-center justify-between gap-4">
            <div>
                <h2 className="text-lg font-semibold tracking-tight">{title}</h2>
                {description && (
                    <p className="mt-1 text-sm text-muted-foreground">
                        {description}
                    </p>
                )}
            </div>
            {action}
        </div>
    );
}

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Личный кабинет" />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">

                {/* Welcome */}
                <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-sm text-muted-foreground">
                                Личный кабинет
                            </p>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight">
                                Добро пожаловать!
                            </h1>
                            <p className="mt-2 text-sm text-muted-foreground">
                                Управляйте подписками и следите за своими покупками.
                            </p>
                        </div>

                        <Link
                            href="/tariffs"
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            <Plus size={17} />
                            Купить подписку
                        </Link>
                    </div>
                </div>

                {/* Statistics */}
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                    <div className="rounded-2xl border bg-card p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                                Активные подписки
                            </span>
                            <ShieldCheck className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">
                            {subscriptions.length}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            Доступно прямо сейчас
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-card p-5">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                                Используется устройств
                            </span>
                            <Smartphone className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">
                            3 <span className="text-lg font-normal text-muted-foreground">/ 5</span>
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            В рамках активной подписки
                        </p>
                    </div>

                    <div className="rounded-2xl border bg-card p-5 sm:col-span-2 xl:col-span-1">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-muted-foreground">
                                Всего покупок
                            </span>
                            <CreditCard className="text-green-600" size={20} />
                        </div>
                        <div className="mt-3 text-3xl font-bold">
                            {purchases.length}
                        </div>
                        <p className="mt-1 text-xs text-muted-foreground">
                            История ваших заказов
                        </p>
                    </div>
                </div>

                {/* Active subscriptions */}
                <section>
                    <SectionTitle
                        title="Мои подписки"
                        description="Управление вашими активными VPN-подписками"
                    />

                    {subscriptions.length > 0 ? (
                        <div className="grid gap-4 lg:grid-cols-2">
                            {subscriptions.map((subscription) => (
                                <div
                                    key={subscription.id}
                                    className="overflow-hidden rounded-2xl border bg-card"
                                >
                                    <div className="p-5 md:p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <div className="flex size-12 items-center justify-center rounded-xl bg-green-500/10 text-green-600">
                                                    <ShieldCheck size={25} />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold">
                                                        {subscription.name}
                                                    </h3>
                                                    <p className="text-xs text-muted-foreground">
                                                        Подписка #{subscription.id}
                                                    </p>
                                                </div>
                                            </div>

                                            <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/10 px-3 py-1.5 text-xs font-medium text-green-600">
                                                <span className="size-1.5 rounded-full bg-green-500" />
                                                {subscription.status}
                                            </span>
                                        </div>

                                        <div className="mt-6 grid grid-cols-2 gap-4">
                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Действует до
                                                </p>
                                                <p className="mt-1 text-sm font-semibold">
                                                    {subscription.expires}
                                                </p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-muted-foreground">
                                                    Осталось
                                                </p>
                                                <p className="mt-1 text-sm font-semibold">
                                                    {subscription.daysLeft} дней
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-5">
                                            <div className="mb-2 flex justify-between text-xs">
                                                <span className="text-muted-foreground">
                                                    Устройства
                                                </span>
                                                <span className="font-medium">
                                                    {subscription.devices} из {subscription.maxDevices}
                                                </span>
                                            </div>
                                            <div className="h-2 overflow-hidden rounded-full bg-muted">
                                                <div
                                                    className="h-full rounded-full bg-green-500"
                                                    style={{
                                                        width: `${(subscription.devices / subscription.maxDevices) * 100}%`,
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="mt-5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                                            <Globe2 size={15} />
                                            Сервер: {subscription.country}
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap items-center gap-3 border-t bg-muted/30 p-4">
                                        <Link
                                            href={`/subscriptions/${subscription.id}`}
                                            className="inline-flex h-9 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-3 text-sm font-medium text-white transition hover:bg-green-700"
                                        >
                                            Управлять
                                            <ArrowUpRight size={15} />
                                        </Link>
                                        <Link
                                            href="/tariffs"
                                            className="inline-flex h-9 flex-1 items-center justify-center rounded-lg border bg-background px-3 text-sm font-medium transition hover:bg-muted"
                                        >
                                            Продлить
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="rounded-2xl border border-dashed p-10 text-center">
                            <ShieldCheck className="mx-auto text-muted-foreground" size={32} />
                            <h3 className="mt-3 font-semibold">
                                У вас пока нет подписок
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                                Выберите тариф и получите доступ к ChameleoVPN.
                            </p>
                            <Link
                                href="/tariffs"
                                className="mt-5 inline-flex h-10 items-center rounded-xl bg-primary px-5 text-sm font-medium text-white hover:bg-green-700"
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

                    <div className="grid gap-4 md:grid-cols-3">
                        {tariffs.map((tariff) => (
                            <div
                                key={tariff.id}
                                className={`relative flex flex-col rounded-2xl border bg-card p-5 transition hover:border-green-500/50 ${
                                    tariff.popular
                                        ? 'border-green-500 shadow-sm shadow-green-500/10'
                                        : ''
                                }`}
                            >
                                {tariff.popular && (
                                    <div className="absolute -top-3 right-4 flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-xs font-medium text-white">
                                        <Crown size={12} />
                                        Популярный
                                    </div>
                                )}

                                <div className="flex items-center gap-2">
                                    <Zap size={18} className="text-green-600" />
                                    <h3 className="font-semibold">{tariff.name}</h3>
                                </div>

                                <p className="mt-2 text-sm text-muted-foreground">
                                    {tariff.duration} доступа
                                </p>

                                <div className="mt-5 flex items-end gap-2">
                                    <span className="text-3xl font-bold">
                                        {tariff.price.toLocaleString('ru-RU')} ₽
                                    </span>
                                    {tariff.oldPrice && (
                                        <span className="mb-1 text-sm text-muted-foreground line-through">
                                            {tariff.oldPrice.toLocaleString('ru-RU')} ₽
                                        </span>
                                    )}
                                </div>

                                <div className="my-5 h-px bg-border" />

                                <div className="flex flex-1 flex-col gap-3">
                                    <div className="flex items-center gap-2 text-sm">
                                        <Check className="text-green-600" size={17} />
                                        Все серверы VPN
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Check className="text-green-600" size={17} />
                                        До {tariff.devices} устройств
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Check className="text-green-600" size={17} />
                                        Защищённое соединение
                                    </div>
                                    <div className="flex items-center gap-2 text-sm">
                                        <Check className="text-green-600" size={17} />
                                        Поддержка 24/7
                                    </div>
                                </div>

                                <Link
                                    href={`/tariffs/${tariff.id}`}
                                    className={`mt-6 flex h-10 items-center justify-center rounded-xl text-sm font-medium transition ${
                                        tariff.popular
                                            ? 'bg-primary text-white hover:bg-green-700'
                                            : 'border bg-background hover:border-green-500 hover:text-green-600'
                                    }`}
                                >
                                    Выбрать тариф
                                </Link>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Footer hint */}
                <div className="flex items-start gap-3 rounded-2xl border bg-muted/20 p-5">
                    <div className="rounded-xl bg-green-500/10 p-2 text-green-600">
                        <ShieldCheck size={20} />
                    </div>
                    <div>
                        <h3 className="text-sm font-semibold">
                            Ваше соединение под защитой
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            ChameleoVPN помогает защитить ваше интернет-соединение
                            и сохранить конфиденциальность в сети.
                        </p>
                    </div>
                </div>

            </div>
        </AppLayout>
    );
}
