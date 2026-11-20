import { useEffect, useState } from 'react';
import { usePage } from '@inertiajs/react';
import {
    CheckCircle2,
    AlertCircle,
    X,
} from 'lucide-react';

export default function FlashMessage() {
    const { flash } = usePage().props as any;

    const [visible, setVisible] = useState(false);

    const message = flash.success || flash.error;

    const isSuccess = !!flash.success;

    useEffect(() => {
        if (message) {
            setVisible(true);

            const timer = setTimeout(() => {
                setVisible(false);
            }, 3500);

            return () => clearTimeout(timer);
        }
    }, [message]);

    if (!visible || !message) return null;

    return (
        <div className="fixed right-6 top-6 z-50">
            <div
                className="
                    flex items-start gap-3
                    w-[360px]
                    rounded-2xl
                    border border-zinc-200
                    bg-white
                    p-4
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                    animate-in fade-in slide-in-from-top-2 duration-300
                "
            >
                {/* icon */}
                <div
                    className={`
                        mt-0.5 flex h-9 w-9 items-center justify-center rounded-full
                        ${
                            isSuccess
                                ? 'bg-emerald-50 text-emerald-600'
                                : 'bg-red-50 text-red-500'
                        }
                    `}
                >
                    {isSuccess ? (
                        <CheckCircle2 size={18} />
                    ) : (
                        <AlertCircle size={18} />
                    )}
                </div>

                {/* content */}
                <div className="flex-1">
                    <div className="text-sm font-semibold text-zinc-900">
                        {isSuccess ? 'Успешно' : 'Ошибка'}
                    </div>

                    <div className="mt-1 text-sm leading-relaxed text-zinc-500">
                        {message}
                    </div>
                </div>

                {/* close */}
                <button
                    onClick={() => setVisible(false)}
                    className="
                        rounded-md p-1 text-zinc-400
                        transition hover:bg-zinc-100 hover:text-zinc-700
                    "
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}