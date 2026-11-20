import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Button } from '@headlessui/react';
import { Head, router } from '@inertiajs/react';
import { CalendarDays, ShieldCheck, Smartphone } from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Тарифы',
        href: '/tariffs',
    },
];

interface Tariff {
    id: number;
    name: string;
    descr: string;
    max_devices: number;
    price: number;
    old_price: number;
    duration_day: number;
}

const selectTariff = (tariffId: number) => {
    router.post(route('payments.create'), {
        tariff_id: tariffId,
    });
};

export default function Tariffs({ ...props }: { tariffs: Tariff[] }) {
    const { tariffs } = props;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Доступные тарифы" />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                {/* Welcome */}
                <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <p className="text-muted-foreground text-sm">Выберите подходящий тариф</p>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight">Тарифы</h1>
                        </div>
                    </div>
                </div>

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

                                <Button onClick={() => selectTariff(tariff.id)}>Выбрать тариф</Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
