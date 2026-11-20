import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import { ArrowRight, Check, Globe2, GlobeLock, Key, LockKeyhole, Rocket, ShieldCheck, Wifi, Zap } from 'lucide-react';

interface Props {
    canRegister: boolean;
    isAuth: boolean;
}

export default function Welcome({ canRegister, isAuth }: Props) {
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
                                Быстрое и защищённое подключение к интернету через современные серверы в Европе. Управляйте подпиской и устройствами
                                из одного личного кабинета.
                            </p>

                            <div className="flex flex-col justify-center gap-4 sm:flex-row">
                                <Link href={isAuth ? '/courses' : '/register'}>
                                    <Button size="lg" className="h-14 rounded-2xl px-8 text-base shadow-lg">
                                        <Rocket className="mr-2 h-5 w-5" />
                                        Начать пользоваться
                                        <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>

                                <Link href="/plans">
                                    <Button size="lg" variant="outline" className="h-14 rounded-2xl px-8 text-base">
                                        Посмотреть тарифы
                                    </Button>
                                </Link>
                            </div>

                            <div className="text-muted-foreground mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Простое подключение
                                </span>

                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Несколько устройств
                                </span>

                                <span className="flex items-center gap-2">
                                    <Check className="text-primary h-4 w-4" />
                                    Серверы в Европе
                                </span>
                            </div>
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

                {/* HOW IT WORKS */}
                <section>
                    <div className="container mx-auto px-4 py-24">
                        <div className="mx-auto max-w-6xl">
                            <div className="mb-14 text-center">
                                <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">Как это работает</p>

                                <h2 className="text-3xl font-bold md:text-4xl">Подключение в три шага</h2>
                            </div>

                            <div className="grid gap-8 md:grid-cols-3">
                                <Step number="01" title="Создайте аккаунт" description="Зарегистрируйтесь и перейдите в личный кабинет." />

                                <Step number="02" title="Выберите тариф" description="Выберите подходящий тариф и оплатите подписку." />

                                <Step number="03" title="Подключитесь" description="Получите конфигурацию и подключите своё устройство." />
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECURITY */}
                <section className="bg-muted/30 border-border/60 border-y">
                    <div className="container mx-auto px-4 py-24">
                        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
                            <div>
                                <div className="bg-primary/10 mb-6 flex h-14 w-14 items-center justify-center rounded-2xl">
                                    <LockKeyhole className="text-primary h-7 w-7" />
                                </div>

                                <h2 className="mb-5 text-3xl font-bold md:text-4xl">
                                    Простое управление
                                    <br />
                                    без лишних настроек
                                </h2>

                                <p className="text-muted-foreground mb-8 text-lg leading-8">
                                    Все основные действия доступны из личного кабинета. Выберите сервер, управляйте подпиской и получайте актуальные
                                    данные для подключения.
                                </p>

                                <ul className="space-y-4">
                                    {['Управление подпиской', 'Управление устройствами', 'Выбор сервера', 'Получение конфигурации'].map((item) => (
                                        <li key={item} className="flex items-center gap-3">
                                            <div className="bg-primary/10 flex h-7 w-7 items-center justify-center rounded-full">
                                                <Check className="text-primary h-4 w-4" />
                                            </div>

                                            <span className="font-medium">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <Card className="border-border bg-card rounded-3xl shadow-xl">
                                <CardContent className="p-8">
                                    <div className="mb-8 flex items-center justify-between">
                                        <div>
                                            <p className="text-muted-foreground text-sm">Текущий сервер</p>

                                            <p className="mt-1 text-xl font-bold">Netherlands</p>
                                        </div>

                                        <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-xl">
                                            <Globe2 className="text-primary h-6 w-6" />
                                        </div>
                                    </div>

                                    <div className="bg-muted mb-6 rounded-2xl p-5">
                                        <div className="mb-2 flex justify-between text-sm">
                                            <span className="text-muted-foreground">Статус</span>

                                            <span className="text-primary font-medium">Активно</span>
                                        </div>

                                        <div className="bg-background h-2 overflow-hidden rounded-full">
                                            <div className="bg-primary h-full w-3/4 rounded-full" />
                                        </div>
                                    </div>

                                    <Button className="w-full rounded-xl" size="lg">
                                        Управлять подключением
                                    </Button>
                                </CardContent>
                            </Card>
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

                {/* FOOTER */}
                <footer className="border-border border-t">
                    <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-8 text-sm md:flex-row">
                        <div className="flex items-center gap-2 font-semibold">
                            <ShieldCheck className="text-primary h-5 w-5" />
                            VPNService
                        </div>

                        <div className="text-muted-foreground">© 2026 VPNService. Все права защищены.</div>

                        <div className="text-muted-foreground flex gap-5">
                            <Link href="/terms" className="hover:text-foreground transition">
                                Условия использования
                            </Link>

                            <Link href="/privacy" className="hover:text-foreground transition">
                                Политика конфиденциальности
                            </Link>
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

function Step({ number, title, description }: { number: string; title: string; description: string }) {
    return (
        <div className="relative">
            <div className="text-primary mb-5 text-sm font-bold">{number}</div>

            <h3 className="mb-3 text-xl font-bold">{title}</h3>

            <p className="text-muted-foreground leading-7">{description}</p>
        </div>
    );
}
