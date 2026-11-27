
import { Head, Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';

interface Props {
    canRegister: boolean;
    isAuth: boolean;
}

export default function Refund({ canRegister, isAuth }: Props) {
    return (
        <>
            <Head title="Правила возврата — ChameleoVPN" />

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

            <div className="bg-background text-foreground min-h-screen">
                <main className="container mx-auto max-w-5xl px-4 py-16 md:py-24">
                    <div className="border-border mb-12 border-b pb-10">
                        <p className="text-primary mb-4 text-sm font-semibold tracking-widest uppercase">
                            ChameleoVPN
                        </p>

                        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                            Правила возврата денежных средств
                        </h1>

                        <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-8">
                            Настоящие Правила определяют порядок, условия и сроки
                            возврата денежных средств Пользователям VPN-сервиса
                            ChameleoVPN. Мы рассматриваем обращения по вопросам
                            оплаты, предоставления доступа и технических
                            неисправностей сервиса.
                        </p>

                        <p className="text-muted-foreground mt-4 text-sm">
                            Дата публикации: 27 ноября 2026 года
                        </p>
                    </div>

                    <article className="max-w-4xl space-y-12">
                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                1. Общие положения
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">1.1.</span>{' '}
                                    ChameleoVPN предоставляет цифровые услуги
                                    по организации VPN-подключения посредством
                                    предоставления доступа к VPN-серверам.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.2.</span>{' '}
                                    Возврат денежных средств осуществляется
                                    в случаях ненадлежащего предоставления
                                    оплаченной услуги, невозможности получения
                                    доступа по вине Исполнителя, повторного
                                    списания и иных случаях, предусмотренных
                                    настоящими Правилами или законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.3.</span>{' '}
                                    Все обращения по вопросам возврата
                                    рассматриваются индивидуально.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.4.</span>{' '}
                                    Возврат осуществляется с учётом фактически
                                    предоставленной услуги, характера нарушения
                                    и требований применимого законодательства.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                2. Условия возврата денежных средств
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">2.1.</span>{' '}
                                    Пользователь вправе обратиться за возвратом
                                    денежных средств в следующих случаях:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>
                                        Оплата подписки прошла успешно, но доступ
                                        к Сервису не был предоставлен в течение
                                        48 часов с момента оплаты.
                                    </li>
                                    <li>
                                        VPN-сервис не работает по технической
                                        причине на стороне Исполнителя, и проблема
                                        не была устранена в течение 24 часов после
                                        обращения Пользователя в поддержку.
                                    </li>
                                    <li>
                                        Пользователь не может воспользоваться
                                        оплаченной услугой по причине неисправности
                                        серверной инфраструктуры ChameleoVPN.
                                    </li>
                                    <li>
                                        Произошло повторное или ошибочное списание
                                        денежных средств за одну и ту же подписку.
                                    </li>
                                    <li>
                                        Исполнитель не может предоставить
                                        оплаченную услугу в соответствии
                                        с условиями приобретённого Тарифа.
                                    </li>
                                    <li>
                                        Возврат предусмотрен применимым
                                        законодательством.
                                    </li>
                                </ul>

                                <p>
                                    <span className="text-foreground font-semibold">2.2.</span>{' '}
                                    Возврат может быть произведён полностью
                                    или частично в зависимости от обстоятельств
                                    обращения, периода фактического использования
                                    подписки и характера нарушения.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.3.</span>{' '}
                                    Если Пользователь самостоятельно передумал
                                    использовать Сервис, изменил свои предпочтения
                                    или не воспользовался приобретённой подпиской,
                                    возврат по этим причинам не гарантируется.
                                    Данное положение не ограничивает обязательные
                                    права Пользователя, предусмотренные законом.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.4.</span>{' '}
                                    Технические проблемы на стороне устройства
                                    Пользователя, операционной системы, стороннего
                                    программного обеспечения или интернет-провайдера
                                    сами по себе не являются основанием для возврата
                                    по причине неисправности инфраструктуры
                                    ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.5.</span>{' '}
                                    Если проблема возникла по вине Исполнителя,
                                    он вправе предложить восстановление доступа
                                    или продление подписки в качестве альтернативы
                                    возврату. Такая альтернатива применяется
                                    только с согласия Пользователя.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                3. Срок подачи заявки на возврат
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">3.1.</span>{' '}
                                    Заявка на возврат денежных средств должна
                                    быть направлена в течение 7 календарных
                                    дней с момента возникновения проблемы
                                    или обнаружения обстоятельств, являющихся
                                    основанием для возврата.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">3.2.</span>{' '}
                                    В случае повторного или ошибочного списания
                                    Пользователь вправе обратиться после
                                    обнаружения такого списания в сроки,
                                    предусмотренные применимым законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">3.3.</span>{' '}
                                    Обращение направляется через официальную
                                    службу поддержки ChameleoVPN:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>
                                        Telegram:{' '}
                                        <a
                                            href="https://t.me/ungten"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-primary hover:underline"
                                        >
                                            @ungten
                                        </a>
                                    </li>
                                    <li>
                                        Email:{' '}
                                        <a
                                            href="mailto:xavier.westswood@yandex.ru"
                                            className="text-primary hover:underline"
                                        >
                                            xavier.westswood@yandex.ru
                                        </a>
                                    </li>
                                </ul>

                                <p>
                                    <span className="text-foreground font-semibold">3.4.</span>{' '}
                                    В обращении необходимо указать:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Telegram ID или другой идентификатор учётной записи;</li>
                                    <li>Дату и примерное время оплаты;</li>
                                    <li>Название приобретённого Тарифа;</li>
                                    <li>Причину обращения за возвратом;</li>
                                    <li>Номер транзакции или подтверждение оплаты;</li>
                                    <li>Дополнительные материалы, подтверждающие возникшую проблему, при наличии.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                4. Срок рассмотрения заявки
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">4.1.</span>{' '}
                                    Рассмотрение заявки Пользователя
                                    осуществляется в течение 24 часов
                                    с момента получения обращения службой
                                    поддержки ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.2.</span>{' '}
                                    В случае необходимости уточнения информации
                                    Исполнитель вправе запросить дополнительные
                                    сведения, необходимые для проверки
                                    обстоятельств обращения.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.3.</span>{' '}
                                    По результатам рассмотрения Пользователю
                                    направляется уведомление об одобрении
                                    или отказе в возврате денежных средств
                                    с указанием причины принятого решения.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.4.</span>{' '}
                                    Отказ в возврате должен быть обоснован
                                    и не может противоречить обязательным
                                    требованиям применимого законодательства.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                5. Срок осуществления возврата
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">5.1.</span>{' '}
                                    В случае одобрения заявки возврат денежных
                                    средств производится в течение 72 часов
                                    с момента принятия решения о возврате.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.2.</span>{' '}
                                    Фактическое зачисление денежных средств
                                    на счёт Пользователя может зависеть от сроков
                                    обработки операции банком, платёжной системой
                                    или иным платёжным посредником.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.3.</span>{' '}
                                    Исполнитель не отвечает за задержки
                                    зачисления денежных средств, возникшие
                                    исключительно по вине банков или платёжных
                                    систем, при условии своевременного направления
                                    операции на возврат.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                6. Способ осуществления возврата
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">6.1.</span>{' '}
                                    Возврат денежных средств осуществляется
                                    преимущественно тем же способом и на те же
                                    платёжные реквизиты, с которых была произведена
                                    первоначальная оплата.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.2.</span>{' '}
                                    Возврат на другие реквизиты возможен только
                                    в случаях, когда это допускается платёжной
                                    системой и применимым законодательством,
                                    после дополнительной проверки принадлежности
                                    реквизитов Пользователю.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.3.</span>{' '}
                                    Исполнитель не осуществляет возврат денежных
                                    средств третьим лицам, не являющимся
                                    плательщиками по соответствующей операции,
                                    за исключением предусмотренных законом случаев.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.4.</span>{' '}
                                    Если первоначальный способ оплаты недоступен,
                                    Пользователь и Исполнитель согласовывают
                                    допустимый альтернативный способ возврата
                                    с соблюдением требований законодательства.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                7. Дополнительные условия
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">7.1.</span>{' '}
                                    Пользователь несёт ответственность за
                                    предоставление достоверной информации,
                                    необходимой для рассмотрения заявки.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">7.2.</span>{' '}
                                    Предоставление заведомо ложных сведений
                                    или поддельных подтверждений оплаты может
                                    являться основанием для отказа в удовлетворении
                                    необоснованного требования о возврате.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">7.3.</span>{' '}
                                    При одобрении полного возврата Исполнитель
                                    вправе прекратить действие соответствующей
                                    подписки и аннулировать предоставленный
                                    по ней доступ.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">7.4.</span>{' '}
                                    При частичном возврате объём предоставляемого
                                    доступа и дальнейшие условия использования
                                    согласовываются сторонами с учётом характера
                                    возврата и применимого законодательства.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">7.5.</span>{' '}
                                    Настоящие Правила не отменяют и не ограничивают
                                    права Пользователя, предоставленные ему
                                    законодательством о защите прав потребителей
                                    и иными обязательными нормами применимого права.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                8. Заключительные положения
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">8.1.</span>{' '}
                                    Исполнитель вправе изменять настоящие
                                    Правила с публикацией актуальной редакции
                                    на официальном сайте ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.2.</span>{' '}
                                    Изменения вступают в силу с момента
                                    публикации, если иной срок не указан
                                    в новой редакции.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.3.</span>{' '}
                                    Вопросы, не урегулированные настоящими
                                    Правилами, рассматриваются в соответствии
                                    с Публичной офертой ChameleoVPN
                                    и применимым законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.4.</span>{' '}
                                    <Link href="/offer" className="text-primary hover:underline">
                                        Публичная оферта
                                    </Link>
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.5.</span>{' '}
                                    <Link href="/privacy" className="text-primary hover:underline">
                                        Политика конфиденциальности
                                    </Link>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                9. Контакты службы поддержки
                            </h2>

                            <div className="text-muted-foreground space-y-3 text-sm leading-8 md:text-base">
                                <p>
                                    По вопросам возврата и оплаты Пользователь
                                    может обратиться в службу поддержки:
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">Telegram:</span>{' '}
                                    <a
                                        href="https://t.me/ungten"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary hover:underline"
                                    >
                                        @ungten
                                    </a>
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">Email:</span>{' '}
                                    <a
                                        href="mailto:xavier.westswood@yandex.ru"
                                        className="text-primary hover:underline"
                                    >
                                        xavier.westswood@yandex.ru
                                    </a>
                                </p>
                            </div>
                        </section>
                    </article>

                    <div className="border-border mt-16 border-t pt-8">
                        <p className="text-muted-foreground text-sm">
                            ChameleoVPN · Правила возврата денежных средств
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
