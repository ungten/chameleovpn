import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import {
    Apple,
    ArrowRight,
    Check,
    Globe2,
    GlobeLock,
    Headset,
    Key,
    Laptop,
    Mail,
    Monitor,
    Rocket,
    Send,
    ShieldCheck,
    Smartphone,
    Terminal,
    Tv,
    Wifi,
    Zap,
} from 'lucide-react';
interface Tariff {
    id: number;
    name: string;
    descr: string;
    max_devices: number;
    price: number;
    old_price: number;
    duration_day: number;
}

interface Props {
    canRegister: boolean;
    isAuth: boolean;
    tariffs: Tariff[];
}

export default function Welcome({ canRegister, isAuth, tariffs }: Props) {
    return (
        <>
            <Head title="ChameleoVPN — быстрый и защищённый интернет" />

            <div className="bg-background text-foreground min-h-screen">
                {/* NAV */}
                <nav className="border-border/60 bg-background/80 sticky top-0 z-50 border-b backdrop-blur">
                    <div className="container mx-auto flex h-20 items-center justify-between px-4">
                        <Link href="/" prefetch className="flex items-center space-x-2">
                            <AppLogo />
                        </Link>

                        <div className="flex items-center gap-3">
                            {isAuth ? (
                                <Link href="/dashboard">
                                    <Button className="rounded-xl">Личный кабинет</Button>
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href="/login"
                                        className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium transition"
                                    >
                                        Войти
                                    </Link>

                                    {canRegister && (
                                        <Link href="/register">
                                            <Button className="rounded-xl">Регистрация</Button>
                                        </Link>
                                    )}
                                </>
                            )}
                        </div>
                    </div>
                </nav>

                {/* HERO */}
                <section className="relative overflow-hidden">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="bg-primary/10 absolute top-0 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full blur-3xl" />
                    </div>

                    <div className="relative container mx-auto px-4 py-24 md:py-32">
                        <div className="mx-auto max-w-5xl text-center">
                            <div className="bg-primary/10 text-primary mb-8 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
                                <Zap className="h-4 w-4" />
                                Простое подключение за несколько минут
                            </div>

                            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                                Твой интернет.
                                <span className="text-primary block">Твои правила.</span>
                            </h1>

                            <p className="text-muted-foreground mx-auto mb-10 max-w-2xl text-lg leading-8 md:text-xl">
                                Современный VPN для комфортного интернета. Подключение за пару минут, удобное управление и серверы в Европе.
                            </p>

                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link href={isAuth ? '/tariffs' : '/register'}>
                                    <Button size="lg" className="h-14 rounded-2xl px-8 text-base shadow-lg">
                                        <Rocket className="mr-2 h-5 w-5" />
                                        Начать пользоваться
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>

                                <Link href="/tariffs">
                                    <Button size="lg" variant="outline" className="h-14 rounded-2xl px-8 text-base">
                                        Посмотреть тарифы
                                    </Button>
                                </Link>
                            </div>

                            <div className="text-muted-foreground mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Умное разделение трафика
                                </span>

                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Одна подписка несколько устройств
                                </span>

                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Заботливая поддержка
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* DEVICES */}
                <section className="border-border/60 relative overflow-hidden border-y">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="bg-primary/5 absolute top-1/2 left-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
                    </div>

                    <div className="relative container mx-auto px-4 py-24">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">Твои устройства</p>

                            <h2 className="text-3xl font-bold md:text-4xl">Один VPN — все твои устройства</h2>

                            <p className="text-muted-foreground mt-4 leading-7">
                                Подключай смартфоны, компьютеры и телевизоры. ChameleoVPN работает на популярных платформах, чтобы ты мог пользоваться
                                интернетом там, где удобно.
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-12">
                            {[
                                {
                                    name: 'Windows',
                                    description: 'Компьютеры и ноутбуки',
                                    icon: Monitor,
                                },
                                {
                                    name: 'macOS',
                                    description: 'MacBook и iMac',
                                    icon: Laptop,
                                },
                                {
                                    name: 'iOS',
                                    description: 'iPhone и iPad',
                                    icon: Smartphone,
                                },
                                {
                                    name: 'Android',
                                    description: 'Смартфоны и планшеты',
                                    icon: Smartphone,
                                },
                                {
                                    name: 'Linux',
                                    description: 'Компьютеры и серверы',
                                    icon: Terminal,
                                },
                                {
                                    name: 'Android TV',
                                    description: 'Телевизоры и приставки',
                                    icon: Tv,
                                },
                                {
                                    name: 'Apple TV',
                                    description: 'Медиаприставки Apple',
                                    icon: Apple,
                                },
                            ].map((device, index) => {
                                const Icon = device.icon;

                                return (
                                    <div
                                        key={device.name}
                                        className={`group border-border bg-card hover:border-primary/50 hover:bg-primary/[0.03] rounded-2xl border p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                                            index < 4 ? 'md:col-span-3' : 'md:col-span-4'
                                        }`}
                                    >
                                        <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300">
                                            <Icon className="h-6 w-6" strokeWidth={1.7} />
                                        </div>

                                        <h3 className="text-base font-semibold">{device.name}</h3>

                                        <p className="text-muted-foreground mt-1 text-xs leading-5">{device.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mx-auto mt-10 flex max-w-5xl flex-col items-center justify-center gap-3 text-center sm:flex-row">
                            <div className="bg-primary/10 text-primary flex h-9 w-9 items-center justify-center rounded-full">
                                <Smartphone className="h-4 w-4" />
                            </div>

                            <p className="text-muted-foreground text-sm">
                                Количество одновременно подключённых устройств зависит от выбранного тарифа.
                            </p>
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="border-border/60 border-y">
                    <div className="container mx-auto px-4 py-20">
                        <div className="mx-auto mb-14 max-w-2xl text-center">
                            <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">Возможности</p>

                            <h2 className="text-3xl font-bold md:text-4xl">Всё необходимое в одном сервисе</h2>

                            <p className="text-muted-foreground mt-4">
                                Подключайтесь к серверу, управляйте подпиской и устройствами без сложных настроек.
                            </p>
                        </div>

                        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-4">
                            <FeatureCard
                                icon={<ShieldCheck />}
                                title="Защита в публичных сетях"
                                description="Дополнительная защита передаваемых данных при подключении к общественным Wi-Fi сетям."
                            />

                            <FeatureCard
                                icon={<GlobeLock />}
                                title="Приватность и сокрытие IP-адреса"
                                description="Зашифрованный канал связи и дополнительный уровень конфиденциальности в сети."
                            />

                            <FeatureCard
                                icon={<Wifi />}
                                title="Безопасная удаленная работа"
                                description="Защищённое подключение к рабочим ресурсам и корпоративным системам из разных мест."
                            />

                            <FeatureCard
                                icon={<Key />}
                                title="Доступ к определенным сервисам"
                                description="Гибкая настройка подключений для использования поддерживаемых приложений и сервисов."
                            />
                        </div>
                    </div>
                </section>

                {/* TARIFFS */}
                <section id="tariffs" className="border-border/60 bg-muted/20 relative overflow-hidden border-y">
                    <div className="pointer-events-none absolute inset-0">
                        <div className="bg-primary/[0.04] absolute top-0 left-1/2 h-[400px] w-[800px] -translate-x-1/2 rounded-full blur-3xl" />
                    </div>

                    <div className="relative container mx-auto px-4 py-24">
                        {/* HEADER */}
                        <div className="mx-auto mb-16 max-w-2xl text-center">
                            <div className="bg-primary/10 text-primary mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-wider uppercase">
                                <Zap className="h-4 w-4" />
                                Тарифы ChameleoVPN
                            </div>

                            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
                                Выбери свой уровень
                                <span className="text-primary block">свободы</span>
                            </h2>

                            <p className="text-muted-foreground mx-auto mt-5 max-w-xl text-base leading-7 md:text-lg">
                                Никаких сложных условий. Выбери подходящий тариф и пользуйся быстрым и защищённым интернетом на своих устройствах.
                            </p>
                        </div>

                        {/* TARIFF CARDS */}
                        <div className="mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {tariffs.map((tariff) => (
                                <Card
                                    key={tariff.id}
                                    className={`group relative flex h-full flex-col overflow-visible rounded-3xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                                        tariff.is_popular
                                            ? 'border-primary shadow-primary/10 shadow-xl'
                                            : 'border-border bg-card hover:border-primary/40'
                                    }`}
                                >
                                    <CardContent className="flex h-full flex-col p-7 md:p-8">
                                        {/* NAME */}
                                        <div className="mb-7">
                                            <div className="mb-3 flex items-center justify-between gap-3">
                                                <h3 className="text-xl font-bold tracking-tight">{tariff.name}</h3>

                                                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                                    <Rocket className="h-5 w-5" />
                                                </div>
                                            </div>

                                            <p className="text-muted-foreground min-h-[48px] text-sm leading-6">{tariff.descr}</p>
                                        </div>

                                        {/* PRICE */}
                                        <div className="mb-7">
                                            <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                                                <span className="text-4xl font-bold tracking-tight md:text-5xl">
                                                    {tariff.price.toLocaleString('ru-RU')}
                                                    <span className="ml-1 text-2xl">₽</span>
                                                </span>

                                                {tariff.old_price > tariff.price && (
                                                    <span className="text-muted-foreground text-base line-through">
                                                        {tariff.old_price.toLocaleString('ru-RU')} ₽
                                                    </span>
                                                )}
                                            </div>

                                            <p className="text-muted-foreground mt-2 text-sm">за {tariff.duration_day} дней подписки</p>
                                        </div>

                                        {/* DIVIDER */}
                                        <div className="border-border mb-7 border-t" />

                                        {/* MAIN BENEFITS */}
                                        <div className="mb-7 space-y-4">
                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                                    <Wifi className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold">До {tariff.max_devices} устройств</p>
                                                    <p className="text-muted-foreground mt-0.5 text-xs">Одновременное подключение</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                                    <Globe2 className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold">Серверы в Европе</p>
                                                    <p className="text-muted-foreground mt-0.5 text-xs">Выбор доступного сервера</p>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-3">
                                                <div className="bg-primary/10 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-xl">
                                                    <ShieldCheck className="h-5 w-5" />
                                                </div>

                                                <div>
                                                    <p className="text-sm font-semibold">Защищённое соединение</p>
                                                    <p className="text-muted-foreground mt-0.5 text-xs">Шифрование трафика</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* EXTRA FEATURES */}
                                        {tariff.features?.length > 0 && (
                                            <>
                                                <div className="border-border mb-5 border-t" />

                                                <div className="mb-7 space-y-3">
                                                    <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-wider uppercase">
                                                        В тариф включено
                                                    </p>

                                                    {tariff.features.map((feature, index) => (
                                                        <div key={index} className="flex items-start gap-3">
                                                            <div className="bg-primary/10 mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full">
                                                                <Check className="text-primary h-3 w-3" />
                                                            </div>

                                                            <span className="text-sm leading-5 font-medium">{feature}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </>
                                        )}

                                        {/* BUTTON */}
                                        <div className="mt-auto pt-2">
                                            <Link href={isAuth ? `/dashboard/tariffs/${tariff.id}` : '/register'} className="block">
                                                <Button
                                                    className="h-12 w-full rounded-xl text-sm font-semibold transition-all"
                                                    variant={tariff.is_popular ? 'default' : 'outline'}
                                                >
                                                    Выбрать тариф
                                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                                </Button>
                                            </Link>

                                            <p className="text-muted-foreground mt-4 text-center text-xs">Без скрытых условий</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        {/* FOOTNOTE */}
                        <div className="mt-10 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
                            <ShieldCheck className="text-primary h-5 w-5 shrink-0" />

                            <p className="text-muted-foreground text-sm">
                                Все тарифы включают доступ к основным возможностям ChameleoVPN. Количество устройств зависит от выбранного тарифа.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section>
                    <div className="container mx-auto px-4 py-24">
                        <Card className="border-border bg-card mx-auto max-w-5xl overflow-hidden rounded-3xl shadow-sm">
                            <CardContent className="relative p-10 text-center md:p-16">
                                <div className="bg-primary/10 absolute top-0 left-1/2 h-40 w-80 -translate-x-1/2 rounded-full blur-3xl" />

                                <div className="relative">
                                    <ShieldCheck className="text-primary mx-auto mb-6 h-14 w-14" />

                                    <h2 className="mb-4 text-3xl font-bold md:text-4xl">Готовы подключиться?</h2>

                                    <p className="text-muted-foreground mx-auto mb-8 max-w-xl text-lg">
                                        Создайте аккаунт, выберите тариф и получите доступ к сервису за несколько минут.
                                    </p>

                                    <Link href={isAuth ? '/dashboard' : '/register'}>
                                        <Button size="lg" className="h-14 rounded-2xl px-8">
                                            Начать пользоваться
                                            <ArrowRight className="ml-2 h-5 w-5" />
                                        </Button>
                                    </Link>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* SUPPORT */}
                <section className="border-border/60 border-t">
                    <div className="container mx-auto px-4 py-20">
                        <Card className="border-border bg-card mx-auto max-w-5xl overflow-hidden rounded-3xl">
                            <CardContent className="relative p-8 md:p-12">
                                <div className="bg-primary/10 absolute -top-20 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full blur-3xl" />

                                <div className="relative mx-auto max-w-2xl text-center">
                                    <div className="bg-primary/10 text-primary mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                                        <Headset className="h-7 w-7" />
                                    </div>

                                    <div className="bg-primary/10 text-primary mb-3 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold">
                                        <span className="bg-primary h-2 w-2 animate-pulse rounded-full" />
                                        На связи 24/7
                                    </div>

                                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Нужна помощь?</h2>

                                    <p className="text-muted-foreground mt-4 leading-7">
                                        Наша техническая поддержка работает круглосуточно. Напишите нам, если возникли вопросы с подключением, оплатой
                                        или использованием ChameleoVPN.
                                    </p>

                                    <div className="mt-8 grid gap-4 sm:grid-cols-2">
                                        <a
                                            href="mailto:gangster.westswood@yandex.ru"
                                            className="border-border bg-background hover:border-primary/50 group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all hover:shadow-md"
                                        >
                                            <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                                                <Mail className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold">Электронная почта</p>
                                                <p className="text-muted-foreground mt-1 truncate text-sm">gangster.westswood@yandex.ru</p>
                                            </div>
                                        </a>

                                        <a
                                            href="https://t.me/ungten"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="border-border bg-background hover:border-primary/50 group flex items-center gap-4 rounded-2xl border p-5 text-left transition-all hover:shadow-md"
                                        >
                                            <div className="bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors">
                                                <Send className="h-5 w-5" />
                                            </div>

                                            <div className="min-w-0">
                                                <p className="text-sm font-semibold">Telegram</p>
                                                <p className="text-muted-foreground mt-1 text-sm">@ungten</p>
                                            </div>
                                        </a>
                                    </div>

                                    <p className="text-muted-foreground mt-6 text-xs">ChameleoVPN — поддержка пользователей круглосуточно</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </section>

                {/* FOOTER */}
                <footer className="border-border bg-card/30 border-t">
                    <div className="container mx-auto max-w-7xl px-4 pt-14 pb-8">
                        {/* MAIN FOOTER */}
                        <div className="grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-4">
                            {/* BRAND */}
                            <div className="lg:col-span-2">
                                <Link href="/" className="inline-flex items-center gap-2">
                                    <AppLogo />
                                </Link>

                                <p className="text-muted-foreground mt-5 max-w-sm text-sm leading-7">
                                    ChameleoVPN — быстрый, стабильный и защищённый доступ к интернету. Комфортное подключение и безопасность ваших
                                    данных каждый день.
                                </p>

                                <div className="mt-6 flex items-center gap-2">
                                    <span className="relative flex h-2.5 w-2.5">
                                        <span className="bg-primary/40 absolute inline-flex h-full w-full animate-ping rounded-full" />
                                        <span className="bg-primary relative inline-flex h-2.5 w-2.5 rounded-full" />
                                    </span>
                                    <span className="text-muted-foreground text-xs">ChameleoVPN · Ваш интернет без границ</span>
                                </div>
                            </div>

                            {/* NAVIGATION */}
                            <div>
                                <h3 className="text-foreground mb-5 text-sm font-semibold">Навигация</h3>

                                <ul className="text-muted-foreground space-y-3 text-sm">
                                    <li>
                                        <Link href="/" className="hover:text-primary transition">
                                            Главная
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/#tariffs" className="hover:text-primary transition">
                                            Тарифы и подписки
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/login" className="hover:text-primary transition">
                                            Личный кабинет
                                        </Link>
                                    </li>

                                    <li>
                                        <a
                                            href="https://t.me/ungten"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:text-primary transition"
                                        >
                                            Поддержка
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* DOCUMENTS */}
                            <div>
                                <h3 className="text-foreground mb-5 text-sm font-semibold">Документы</h3>

                                <ul className="text-muted-foreground space-y-3 text-sm">
                                    <li>
                                        <Link href="/offer" className="hover:text-primary transition">
                                            Публичная оферта
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/terms" className="hover:text-primary transition">
                                            Условия использования
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/refund" className="hover:text-primary transition">
                                            Правила возврата
                                        </Link>
                                    </li>

                                    <li>
                                        <Link href="/privacy" className="hover:text-primary transition">
                                            Политика конфиденциальности
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* BOTTOM FOOTER */}
                        <div className="border-border flex flex-col gap-5 border-t pt-7 md:flex-row md:items-center md:justify-between">
                            <div className="text-muted-foreground text-xs leading-6">
                                <p>© {new Date().getFullYear()} ООО «Рога, Копыта и Трафик»</p>
                                <p>Все права защищены.</p>
                            </div>

                            <div className="flex flex-col gap-2 text-xs md:items-end">
                                <a href="mailto:gangster.westswood@gmail.com" className="text-muted-foreground hover:text-primary transition">
                                    gangster.westswood@gmail.com
                                </a>

                                <a
                                    href="https://t.me/ungten"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-muted-foreground hover:text-primary transition"
                                >
                                    Telegram: @ungten
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
    return (
        <Card className="border-border bg-card rounded-2xl shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <CardContent className="p-6">
                <div className="bg-primary/10 text-primary mb-5 flex h-12 w-12 items-center justify-center rounded-xl">{icon}</div>

                <h3 className="mb-2 text-lg font-bold">{title}</h3>

                <p className="text-muted-foreground text-sm leading-6">{description}</p>
            </CardContent>
        </Card>
    );
}
