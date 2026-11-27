
import { Head, Link } from '@inertiajs/react';
import AppLogo from '@/components/app-logo';
import { Button } from '@/components/ui/button';

interface Props {
    canRegister: boolean;
    isAuth: boolean;
}

export default function Offer({ canRegister, isAuth }: Props) {
    return (
        <>
            <Head title="Публичная оферта — ChameleoVPN" />

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
                            Публичная оферта
                        </h1>

                        <p className="text-muted-foreground mt-5 max-w-3xl text-base leading-8">
                            Настоящий документ является официальным предложением
                            заключить договор на предоставление услуг VPN-сервиса
                            ChameleoVPN. Оферта определяет порядок предоставления
                            доступа, условия оплаты, права и обязанности сторон,
                            а также ответственность Пользователя и Исполнителя.
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
                                    Настоящий документ является публичной офертой
                                    (далее — «Оферта») [ФИО или наименование
                                    организации], далее именуемого «Исполнитель»,
                                    адресованной физическим лицам, далее именуемым
                                    «Пользователи».
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.2.</span>{' '}
                                    Оферта регулирует отношения между Исполнителем
                                    и Пользователем при использовании VPN-сервиса
                                    ChameleoVPN (далее — «Сервис»).
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.3.</span>{' '}
                                    Оплата услуг означает принятие условий Оферты
                                    в порядке, предусмотренном применимым
                                    законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">1.4.</span>{' '}
                                    Если Пользователь не согласен с условиями
                                    Оферты, он должен воздержаться от приобретения
                                    подписки и использования платных услуг Сервиса.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                2. Термины и определения
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">2.1.</span>{' '}
                                    <span className="text-foreground font-semibold">Сервис</span>{' '}
                                    — программно-технический комплекс ChameleoVPN,
                                    предоставляющий возможность подключения к
                                    VPN-серверам Исполнителя.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.2.</span>{' '}
                                    <span className="text-foreground font-semibold">Пользователь</span>{' '}
                                    — физическое лицо, использующее Сервис и
                                    принимающее условия настоящей Оферты.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.3.</span>{' '}
                                    <span className="text-foreground font-semibold">Подписка</span>{' '}
                                    — оплаченный период предоставления доступа
                                    к функциональным возможностям Сервиса.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.4.</span>{' '}
                                    <span className="text-foreground font-semibold">Тариф</span>{' '}
                                    — набор услуг и ограничений, определяющий
                                    стоимость, срок действия подписки и количество
                                    доступных устройств.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">2.5.</span>{' '}
                                    <span className="text-foreground font-semibold">Исполнитель</span>{' '}
                                    — лицо, осуществляющее администрирование и
                                    предоставление услуг ChameleoVPN.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                3. Предмет договора
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">3.1.</span>{' '}
                                    Исполнитель обязуется предоставить Пользователю
                                    доступ к VPN-сервису ChameleoVPN на условиях
                                    выбранного и оплаченного Тарифа.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">3.2.</span>{' '}
                                    Сервис предоставляет техническую возможность
                                    подключения к VPN-серверам с использованием
                                    поддерживаемых протоколов и приложений.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">3.3.</span>{' '}
                                    Перечень возможностей, стоимость, срок действия
                                    и ограничения определяются выбранным Тарифом.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">3.4.</span>{' '}
                                    Услуги предоставляются в электронном виде.
                                    Физическая доставка товаров или документов
                                    не осуществляется.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                4. Порядок заключения договора
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">4.1.</span>{' '}
                                    Настоящая Оферта вступает в силу с момента
                                    публикации на официальном сайте ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.2.</span>{' '}
                                    Акцептом Оферты считается совершение
                                    Пользователем действий, свидетельствующих
                                    о согласии с её условиями, в том числе
                                    оплата выбранного Тарифа после предоставления
                                    возможности ознакомиться с документом.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.3.</span>{' '}
                                    С момента акцепта договор считается
                                    заключённым между Пользователем и Исполнителем.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">4.4.</span>{' '}
                                    Пользователь подтверждает, что ознакомился
                                    с условиями Оферты и принимает их добровольно.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                5. Стоимость услуг и порядок оплаты
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">5.1.</span>{' '}
                                    Стоимость услуг определяется действующими
                                    Тарифами, размещёнными на официальном сайте
                                    ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.2.</span>{' '}
                                    Оплата производится в размере 100% стоимости
                                    выбранного Тарифа до начала предоставления
                                    доступа, если иной порядок не предусмотрен
                                    Исполнителем.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.3.</span>{' '}
                                    Оплата осуществляется доступными на сайте
                                    способами через подключённые платёжные системы.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.4.</span>{' '}
                                    Обязательство по оплате считается исполненным
                                    после подтверждения успешного проведения
                                    платежа платёжной системой.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.5.</span>{' '}
                                    Стоимость приобретённой подписки не изменяется
                                    в течение оплаченного периода.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">5.6.</span>{' '}
                                    Продление подписки осуществляется вручную
                                    либо автоматически, если такая возможность
                                    предусмотрена Сервисом и Пользователь
                                    отдельно согласился на её использование.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                6. Порядок предоставления доступа
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">6.1.</span>{' '}
                                    После подтверждения оплаты Исполнитель
                                    предоставляет Пользователю доступ
                                    к приобретённому Тарифу.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.2.</span>{' '}
                                    Доступ предоставляется посредством личного
                                    кабинета, ссылки подписки, конфигурации
                                    подключения или иного предусмотренного
                                    Сервисом способа.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.3.</span>{' '}
                                    Срок действия подписки определяется выбранным
                                    Тарифом и исчисляется с момента активации
                                    доступа, если при покупке не указано иное.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.4.</span>{' '}
                                    Пользователь самостоятельно обеспечивает
                                    наличие устройства, программного обеспечения
                                    и интернет-соединения, необходимых для
                                    использования Сервиса.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.5.</span>{' '}
                                    Количество устройств ограничивается условиями
                                    приобретённого Тарифа.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">6.6.</span>{' '}
                                    Исполнитель вправе проводить технические
                                    работы, обновление программного обеспечения
                                    и обслуживание инфраструктуры.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                7. Права и обязанности сторон
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p className="text-foreground font-semibold">
                                    7.1. Исполнитель обязуется:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Предоставлять доступ в соответствии с оплаченным Тарифом;</li>
                                    <li>Принимать разумные меры для обеспечения работоспособности инфраструктуры;</li>
                                    <li>Рассматривать обращения Пользователей;</li>
                                    <li>Обеспечивать защиту информации в соответствии с Политикой конфиденциальности.</li>
                                </ul>

                                <p className="text-foreground font-semibold">
                                    7.2. Исполнитель вправе:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Изменять перечень Тарифов и стоимость будущих подписок;</li>
                                    <li>Проводить техническое обслуживание инфраструктуры;</li>
                                    <li>Ограничивать доступ при выявлении нарушений условий использования;</li>
                                    <li>Изменять функциональность Сервиса при соблюдении обязательств перед Пользователями.</li>
                                </ul>

                                <p className="text-foreground font-semibold">
                                    7.3. Пользователь обязуется:
                                </p>

                                <ul className="marker:text-primary list-disc space-y-2 pl-8">
                                    <li>Соблюдать условия Оферты и Правила пользования;</li>
                                    <li>Не использовать Сервис для противоправной деятельности;</li>
                                    <li>Не вмешиваться в работу серверов и инфраструктуры;</li>
                                    <li>Не превышать установленные Тарифом ограничения;</li>
                                    <li>Обеспечивать сохранность данных доступа к своей учётной записи.</li>
                                </ul>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                8. Ограничения использования Сервиса
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">8.1.</span>{' '}
                                    Запрещается использовать ChameleoVPN для
                                    организации сетевых атак, распространения
                                    вредоносного программного обеспечения,
                                    несанкционированного доступа к информационным
                                    системам, мошенничества и иных противоправных
                                    действий.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.2.</span>{' '}
                                    При выявлении нарушений Исполнитель вправе
                                    временно ограничить или прекратить
                                    предоставление доступа с учётом применимого
                                    законодательства.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">8.3.</span>{' '}
                                    Пользователь самостоятельно отвечает
                                    за законность своих действий при использовании
                                    Сервиса.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                9. Возврат денежных средств
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">9.1.</span>{' '}
                                    Возврат денежных средств осуществляется
                                    в соответствии с отдельным документом
                                    «Правила возврата денежных средств
                                    ChameleoVPN».
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">9.2.</span>{' '}
                                    Пользователь вправе обратиться за возвратом
                                    в случаях, предусмотренных Правилами возврата
                                    и применимым законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">9.3.</span>{' '}
                                    Каждое обращение рассматривается индивидуально.
                                </p>

                                <p>
                                    <Link href="/refund" className="text-primary hover:underline font-medium">
                                        Ознакомиться с правилами возврата →
                                    </Link>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                10. Ответственность сторон
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">10.1.</span>{' '}
                                    Стороны несут ответственность за неисполнение
                                    или ненадлежащее исполнение обязательств
                                    в соответствии с применимым законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">10.2.</span>{' '}
                                    Исполнитель не несёт ответственности за
                                    перебои, вызванные неисправностями оборудования
                                    Пользователя, работой его интернет-провайдера,
                                    сторонних сервисов и обстоятельствами,
                                    находящимися вне разумного контроля Исполнителя.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">10.3.</span>{' '}
                                    Исполнитель не гарантирует бесперебойную работу
                                    Сервиса при любых внешних обстоятельствах.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">10.4.</span>{' '}
                                    Никакие положения настоящей Оферты не
                                    освобождают Исполнителя от ответственности,
                                    от которой он не может быть освобождён
                                    в соответствии с применимым законодательством.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                11. Изменение условий Оферты
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">11.1.</span>{' '}
                                    Исполнитель вправе вносить изменения
                                    в настоящую Оферту.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">11.2.</span>{' '}
                                    Новая редакция публикуется на официальном
                                    сайте ChameleoVPN с указанием даты обновления.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">11.3.</span>{' '}
                                    Изменения не должны задним числом ухудшать
                                    условия уже оплаченной подписки или лишать
                                    Пользователя обязательных прав.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                12. Срок действия и расторжение договора
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">12.1.</span>{' '}
                                    Договор вступает в силу с момента акцепта
                                    Оферты и действует до полного исполнения
                                    обязательств сторонами.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">12.2.</span>{' '}
                                    Пользователь вправе отказаться от дальнейшего
                                    использования Сервиса в порядке,
                                    предусмотренном Офертой и применимым
                                    законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">12.3.</span>{' '}
                                    Исполнитель вправе прекратить предоставление
                                    доступа при существенном нарушении
                                    Пользователем условий договора с учётом
                                    требований применимого законодательства.
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                13. Заключительные положения
                            </h2>

                            <div className="text-muted-foreground space-y-4 text-sm leading-8 md:text-base">
                                <p>
                                    <span className="text-foreground font-semibold">13.1.</span>{' '}
                                    Во всём, что не предусмотрено настоящей
                                    Офертой, стороны руководствуются применимым
                                    законодательством.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">13.2.</span>{' '}
                                    Споры и разногласия разрешаются путём
                                    переговоров и направления обращений
                                    в службу поддержки. Если договориться
                                    не удалось, спор разрешается в установленном
                                    законом порядке.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">13.3.</span>{' '}
                                    Неотъемлемой частью условий предоставления
                                    услуг являются Правила пользования и Политика
                                    конфиденциальности ChameleoVPN.
                                </p>

                                <p>
                                    <span className="text-foreground font-semibold">13.4.</span>{' '}
                                    <Link href="/privacy" className="text-primary hover:underline">
                                        Политика конфиденциальности
                                    </Link>
                                </p>
                                <p>
                                    <span className="text-foreground font-semibold">13.5.</span>{' '}
                                    <Link href="/refund" className="text-primary hover:underline">
                                        Правила возврата денежных средств
                                    </Link>
                                </p>
                            </div>
                        </section>

                        <section>
                            <h2 className="mb-5 text-xl font-bold md:text-2xl">
                                14. Реквизиты Исполнителя
                            </h2>

                            <div className="text-muted-foreground space-y-3 text-sm leading-8 md:text-base">
                                <p><span className="text-foreground font-semibold">Наименование / ФИО:</span> [указать]</p>
                                <p><span className="text-foreground font-semibold">Статус:</span> [указать]</p>
                                <p><span className="text-foreground font-semibold">Регистрационные данные:</span> [указать при наличии]</p>
                                <p><span className="text-foreground font-semibold">Адрес:</span> [указать]</p>
                                <p><span className="text-foreground font-semibold">Электронная почта:</span> xavier.westswood@yandex.ru</p>
                                <p><span className="text-foreground font-semibold">Служба поддержки:</span> @ungten</p>
                            </div>
                        </section>
                    </article>

                    <div className="border-border mt-16 border-t pt-8">
                        <p className="text-muted-foreground text-sm">
                            ChameleoVPN · Публичная оферта
                        </p>
                    </div>
                </main>
            </div>
        </>
    );
}
