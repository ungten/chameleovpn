import InputError from '@/components/input-error';
import { Button } from '@/components/ui/button';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';

import { Textarea } from '@/components/textarea';

import { Head, Link, useForm } from '@inertiajs/react';
import React from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Создание/изменение тарифа',
        href: 'admin.tariffs.index',
    },
];


export default function TariffForm({ ...props }) {
    const { tariff } = props;
    const isEditing = Boolean(tariff?.id);

    const { data, setData, post, put, processing, errors, reset } = useForm({
        name: tariff?.name || '',
        descr: tariff?.descr || '',
        max_devices: tariff?.max_devices || '',
        duration_day: tariff?.duration_day || '',
        price: tariff?.price || '',
        old_price: tariff?.old_price || '',
    });

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isEditing) {
            put(route('admin.tariffs.update', tariff), {
                onSuccess: () => {
                    console.log('Form submitted');
                    route('admin.tariffs.index');
                },
            });
        } else {
            post(route('admin.tariffs.store'), {
                onSuccess: () => {
                    console.log('Form submitted');
                    route('admin.tariffs.index');
                },
            });
        }
    };

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title={isEditing ? 'Редактирование тарифа' : 'Создание тарифа'} />

            <div className="flex flex-1 flex-col gap-8 p-4 md:p-6 lg:p-8">
                
                <div>
                    <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                        <div>
                            <h1 className="mt-1 text-2xl font-bold tracking-tight">{isEditing ? 'Редактировать тариф' : 'Создать тариф'}</h1>
                        </div>

                        <Link
                            href={route('admin.tariffs.index')}
                            className="inline-flex h-10 items-center justify-center gap-2 rounded-xl bg-primary px-4 text-sm font-medium text-white transition hover:bg-green-700"
                        >
                            Вернуться к тарифам
                        </Link>
                    </div>
                </div>

                <Card>
                    <CardHeader>
                        <CardTitle></CardTitle>
                    </CardHeader>

                    <CardContent>
                        <form onSubmit={submit} className="flex flex-col gap-4" autoComplete="off">
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <Label htmlFor="name">Название тарифа</Label>
                                    <Input
                                        value={data.name}
                                        onChange={(e) => {
                                            setData('name', e.target.value);
                                        }}
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Название тарифа"
                                        autoFocus
                                        tabIndex={1}
                                    ></Input>
                                    <InputError message={errors.name} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="descr">Описание тарифа</Label>
                                    <Textarea
                                        value={data.descr}
                                        onChange={(e) => {
                                            setData('descr', e.target.value);
                                        }}
                                        id="descr"
                                        name="descr"
                                        placeholder="Описание тарифа"
                                        autoFocus
                                        tabIndex={1}
                                    ></Textarea>
                                    <InputError message={errors.descr} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="max_devices">Максимальное количество устройств</Label>
                                    <Input
                                        value={data.max_devices}
                                        onChange={(e) => setData('max_devices', e.target.value)}
                                        id="max_devices"
                                        name="max_devices"
                                        type="number"
                                        placeholder="Количество устройств"
                                        autoFocus
                                        tabIndex={2}
                                    ></Input>
                                    <InputError message={errors.max_devices} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="duration_day">Количество дней</Label>
                                    <Input
                                        value={data.duration_day}
                                        onChange={(e) => setData('duration_day', e.target.value)}
                                        id="duration_day"
                                        name="duration_day"
                                        type="number"
                                        placeholder="Количество дней"
                                        autoFocus
                                        tabIndex={3}
                                    ></Input>
                                    <InputError message={errors.duration_day} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="price">Цена подписки</Label>
                                    <Input
                                        value={data.price}
                                        onChange={(e) => setData('price', e.target.value)}
                                        id="price"
                                        name="price"
                                        type="number"
                                        placeholder="Цена подписки"
                                        autoFocus
                                        tabIndex={4}
                                    ></Input>
                                    <InputError message={errors.price} />
                                </div>

                                <div className="grid gap-2">
                                    <Label htmlFor="old_price">Старая цена</Label>
                                    <Input
                                        value={data.old_price}
                                        onChange={(e) => setData('old_price', e.target.value)}
                                        id="old_price"
                                        name="old_price"
                                        type="number"
                                        placeholder="Старая цена"
                                        autoFocus
                                        tabIndex={5}
                                    ></Input>
                                    <InputError message={errors.old_price} />
                                </div>

                                <Button type="submit" className="mt-4 w-full cursor-pointer" disabled={processing}>
                                    {processing ? 'Сохранение...' : isEditing ? 'Сохранить изменения' : 'Создать тариф'}
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AppLayout>
    );
}
