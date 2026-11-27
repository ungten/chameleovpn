import { Card, CardContent } from '@/components/ui/card';
import { Head, Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
interface Props {
    canRegister: boolean;
    isAuth: boolean;
}

export default function Welcome({ canRegister, isAuth }: Props) {
    return (
        <>
            <Head title="ChameleoVPN — быстрый и защищённый интернет" />
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
                                <Link href="/login" className="text-muted-foreground hover:text-foreground px-4 py-2 text-sm font-medium transition">
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
            <div className="bg-background text-foreground min-h-screen">
                <main className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                    {/* TITLE */}
                    <div className="border-border mb-12 border-b pb-10">
                        <p className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">ChameleoVPN</p>

                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">Политика конфиденциальности</h1>

                        <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-8">
                            Политика конфиденциальности регулирует сбор, использование и защиту информации пользователей Сервиса. Собираются
                            идентификаторы аккаунта, техническая информация и история взаимодействий. Данные используются для обеспечения работы
                            Сервиса, связи с Пользователем и анализа. Передача информации третьим лицам возможна только в установленных законом
                            случаях или с согласия Пользователя. Данные хранятся в течение необходимого срока и защищаются разумными мерами.
                        </p>
                    </div>

                    {/* CONTENT */}
                    <article className="max-w-4xl space-y-12">
                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">1. Общие положения</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">1.1.</span> Настоящая Политика конфиденциальности (далее —
                                    «Политика») регулирует порядок обработки и защиты информации, которую Пользователь передаёт при использовании
                                    сервиса (далее — «Сервис»).
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.2.</span> Используя Сервис, Пользователь подтверждает своё
                                    согласие с условиями Политики. Если Пользователь не согласен с условиями, он обязан прекратить использование
                                    Сервиса.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">2. Сбор информации</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">2.1.</span> Сервис может собирать следующие типы данных:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Идентификаторы аккаунта (логин, ID, никнейм и т. п.);</li>
                                    <li>Техническую информацию (IP-адрес, данные о браузере, устройстве и операционной системе);</li>
                                    <li>Историю взаимодействий с Сервисом.</li>
                                </ul>

                                <p>
                                    <span className="text-foreground font-semibold">2.2.</span> Сервис не требует от Пользователя предоставления
                                    паспортных данных, документов, фотографий или другой личной информации, кроме минимально необходимой для работы.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">3. Использование информации</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">3.1.</span> Сервис может использовать полученную информацию
                                    исключительно для:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Обеспечения работы функционала;</li>
                                    <li>Связи с Пользователем, в том числе для уведомлений и поддержки;</li>
                                    <li>Анализа и улучшения работы Сервиса.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">4. Передача информации третьим лицам</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">4.1.</span> Администрация не передаёт полученные данные третьим
                                    лицам, за исключением случаев:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Если это требуется по закону;</li>
                                    <li>
                                        Если это необходимо для исполнения обязательств перед Пользователем, например при работе с платёжными
                                        системами;
                                    </li>
                                    <li>Если Пользователь сам дал на это согласие.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">5. Хранение и защита данных</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">5.1.</span> Данные хранятся в течение срока, необходимого для
                                    достижения целей обработки.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.2.</span> Администрация принимает разумные меры для защиты
                                    данных, но не гарантирует абсолютную безопасность информации при передаче через интернет.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">6. Отказ от ответственности</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">6.1.</span> Пользователь понимает и соглашается, что передача
                                    информации через интернет всегда сопряжена с рисками.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.2.</span> Администрация не несёт ответственности за утрату,
                                    кражу или раскрытие данных, если это произошло по вине третьих лиц или самого Пользователя.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">7. Изменения в Политике</h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">7.1.</span> Администрация вправе изменять условия Политики без
                                    предварительного уведомления.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">7.2.</span> Продолжение использования Сервиса после внесения
                                    изменений означает согласие Пользователя с новой редакцией Политики.
                                </p>
                            </div>
                        </section>
                    </article>

                    {/* FOOTER NOTE */}
                    <div className="border-border mt-16 border-t pt-8">
                        <p className="text-muted-foreground text-sm">ChameleoVPN · Политика конфиденциальности</p>
                    </div>
                </main>
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
