import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

import { Head, Link, usePage } from '@inertiajs/react';

import { CalendarDays, PencilIcon, Plus, ShieldCheck, Smartphone, Trash2 } from 'lucide-react';
const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Управление тарифами',
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

export default function Index({ ...props }: { tariffs: Tariff[] }) {
    const { tariffs } = props;

    const { auth } = usePage().props as any;

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Управление курсами" />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight">Тарифы</h1>
                            <p className="text-muted-foreground mt-2 text-sm">Управление тарифами</p>
                        </div>

                        <Link
                            href={route('admin.tariffs.create')}
                            className="bg-primary inline-flex h-10 items-center justify-center gap-2 rounded-xl px-4 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            <Plus size={18} />
                            Добавить тариф
                        </Link>
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

                                {/* FOOTER */}
                                <div className="mt-auto flex items-center justify-between border-t pt-5">
                                    <span className="text-muted-foreground text-xs">ID тарифа: #{tariff.id}</span>

                                    <div className="flex items-center gap-2">
                                        <Link
                                            href={route('admin.tariffs.edit', tariff.id)}
                                            title="Редактировать тариф"
                                            className="flex h-9 w-9 items-center justify-center rounded-xl border transition hover:border-green-500/40 hover:bg-green-500/10 hover:text-green-600"
                                        >
                                            <PencilIcon size={16} />
                                        </Link>

                                        <Link
                                            method="delete"
                                            href={route('admin.tariffs.destroy', tariff.id)}
                                            title="Удалить тариф"
                                            as="button"
                                            className="flex h-9 w-9 items-center justify-center rounded-xl border text-red-500 transition hover:border-red-500/30 hover:bg-red-500/10"
                                        >
                                            <Trash2 size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AppLayout>
    );
}
