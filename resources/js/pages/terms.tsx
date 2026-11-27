import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';
import { Head, Link } from '@inertiajs/react';

interface Props {
    canRegister: boolean;
    isAuth: boolean;
}

export default function Term({ canRegister, isAuth }: Props) {
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

                <main className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                    <header className="mb-12">
                        <p className="text-primary mb-3 text-sm font-semibold tracking-wider uppercase">ChameleoVPN</p>

                        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">Пользовательское соглашение</h1>

                        <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-7">
                            Настоящее Пользовательское соглашение регулирует порядок использования сервиса ChameleoVPN. Пожалуйста, внимательно
                            ознакомьтесь с его условиями перед началом использования Сервиса.
                        </p>
                    </header>

                    <article className="max-w-4xl space-y-12">
                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">1. Общие положения</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">1.1.</span> Настоящее Пользовательское соглашение (далее —
                                    «Соглашение») регулирует порядок использования онлайн-сервиса (далее — «Сервис»), предоставляемого Администрацией.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">1.2.</span> Используя Сервис, включая запуск бота, регистрацию,
                                    оплату услуг или получение доступа к материалам, Пользователь подтверждает, что полностью ознакомился с условиями
                                    настоящего Соглашения и принимает их в полном объёме.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">1.3.</span> В случае несогласия с условиями Соглашения Пользователь
                                    обязан прекратить использование Сервиса.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">1.4.</span> Официальный адрес сервиса изменён с vpn-one.net на
                                    smm-one.com. Владельцы сервиса и условия оказания услуг не изменились.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">2. Характер услуг и цифровых товаров</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">2.1.</span> Сервис предоставляет цифровые товары и услуги
                                    нематериального характера, включая, но не ограничиваясь, информационные материалы, обучающие программы,
                                    консультации, цифровые продукты и сервисные услуги.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">2.2.</span> Материалы, предоставляемые через Сервис, могут включать:
                                </p>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>информацию из открытых источников;</li>
                                    <li>авторские материалы Администрации и/или третьих лиц;</li>
                                    <li>аналитические обзоры, подборки, рекомендации и структурированные данные.</li>
                                </ul>
                                <p>
                                    <span className="text-foreground font-medium">2.3.</span> Пользователь осознаёт и соглашается, что ценность
                                    цифровых товаров и услуг Сервиса заключается в систематизации, анализе, форме подачи, сопровождении, поддержке и
                                    обновлениях, а не в эксклюзивности отдельных фрагментов информации.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">2.4.</span> Сервис не заявляет и не гарантирует уникальность,
                                    исключительность или недоступность отдельных элементов материалов вне Сервиса.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">3. Отказ от гарантий и ответственности</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">3.1.</span> Сервис предоставляется на условиях «AS IS» («как есть»).
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">3.2.</span> Администрация не гарантирует:
                                </p>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>соответствие Сервиса ожиданиям Пользователя;</li>
                                    <li>достижение каких-либо финансовых, коммерческих, профессиональных или иных результатов;</li>
                                    <li>бесперебойную и безошибочную работу Сервиса.</li>
                                </ul>
                                <p>
                                    <span className="text-foreground font-medium">3.3.</span> Администрация не несёт ответственности за:
                                </p>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>любые прямые или косвенные убытки, включая упущенную выгоду;</li>
                                    <li>последствия применения Пользователем полученных материалов;</li>
                                    <li>действия или бездействие третьих лиц;</li>
                                    <li>временные технические сбои и ограничения доступа.</li>
                                </ul>
                                <p>
                                    <span className="text-foreground font-medium">3.4.</span> Все решения о применении материалов, рекомендаций и
                                    услуг принимаются Пользователем самостоятельно и на его риск.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">4. Законность использования</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">4.1.</span> Сервис не предназначен для поощрения, организации или
                                    содействия противоправной деятельности.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">4.2.</span> Пользователь обязуется использовать Сервис исключительно
                                    в рамках применимого законодательства и правил третьих сторон.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">4.3.</span> Ответственность за законность использования материалов и
                                    услуг Сервиса полностью возлагается на Пользователя.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">5. Интеллектуальная собственность</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">5.1.</span> Все материалы, размещённые в Сервисе, охраняются
                                    законодательством об интеллектуальной собственности.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">5.2.</span> Пользователю запрещается копировать, распространять,
                                    перепродавать, передавать третьим лицам или иным образом использовать материалы Сервиса без разрешения
                                    правообладателя.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">5.3.</span> Нарушение прав интеллектуальной собственности может
                                    повлечь ограничение доступа к Сервису без компенсации.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">6. Ограничение доступа</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">6.1.</span> Администрация вправе приостановить или ограничить доступ
                                    Пользователя к Сервису в случае:
                                </p>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>нарушения условий настоящего Соглашения;</li>
                                    <li>выявления злоупотреблений;</li>
                                    <li>требований законодательства или платёжных провайдеров.</li>
                                </ul>
                                <p>
                                    <span className="text-foreground font-medium">6.2.</span> Ограничение доступа не освобождает Пользователя от
                                    обязательств, возникших ранее.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">6.3.</span> Администрация оставляет за собой право отказывать в
                                    обслуживании Пользователям, чьи действия могут создавать повышенные риски для Сервиса, платёжных провайдеров или
                                    третьих лиц.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">7. Платежи и возвраты</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">7.1.</span> Оплата услуг и цифровых товаров производится на
                                    условиях, указанных в Сервисе до момента оплаты.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">7.2.</span> В связи с нематериальным характером цифровых товаров и
                                    услуг возврат денежных средств после предоставления доступа не осуществляется, за исключением случаев, указанных
                                    ниже.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">7.3.</span> Возврат средств возможен, только если:
                                </p>
                                <ul className="list-disc space-y-2 pl-6">
                                    <li>услуга не была оказана по технической вине Сервиса;</li>
                                    <li>доступ к цифровому товару фактически не был предоставлен.</li>
                                </ul>
                                <p>
                                    <span className="text-foreground font-medium">7.4.</span> Для рассмотрения вопроса о возврате Пользователь обязан
                                    обратиться в службу поддержки в течение 24 часов с момента оплаты.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">7.5.</span> Решение о возврате принимается Администрацией
                                    индивидуально.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">7.6.</span> Пользователь подтверждает, что обязуется не инициировать
                                    возврат платежа (chargeback) через платёжные системы без предварительного обращения в службу поддержки Сервиса.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">8. Конфиденциальность</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">8.1.</span> Администрация может собирать минимально необходимые
                                    технические данные для обеспечения работы Сервиса.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">8.2.</span> Администрация принимает разумные меры для защиты данных,
                                    однако не гарантирует абсолютную безопасность передаваемой информации.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">9. Изменение условий</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">9.1.</span> Администрация вправе вносить изменения в настоящее
                                    Соглашение.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">9.2.</span> Актуальная версия Соглашения публикуется в Сервисе.
                                </p>
                                <p>
                                    <span className="text-foreground font-medium">9.3.</span> Продолжение использования Сервиса означает согласие
                                    Пользователя с обновлёнными условиями.
                                </p>
                            </div>
                        </section>

                        <section className="space-y-5">
                            <h2 className="text-xl font-semibold">10. Контактная информация</h2>

                            <div className="text-muted-foreground space-y-4 leading-7">
                                <p>
                                    <span className="text-foreground font-medium">10.1.</span> По всем вопросам Пользователь может обратиться в службу
                                    поддержки через форму в самом боте.
                                </p>
                            </div>
                        </section>

                        <p className="text-muted-foreground border-border border-t pt-8 text-sm leading-7">
                            Используя Сервис, в том числе запуская бота и/или вводя команду /start, Пользователь подтверждает, что ознакомлен с
                            настоящим Соглашением и принимает его условия в полном объёме.
                        </p>
                    </article>
                </main>
            </div>
        </>
    );
}
