import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { CreditCard, Headset, Layers, LayoutGrid, ShieldCheck, Users } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Личный кабинет',
        url: '/dashboard',
        icon: LayoutGrid,
    },
    {
        title: 'Тарифы',
        url: '/tariffs',
        icon: Layers,
    },
    {
        title: 'История покупок',
        url: '/payments',
        icon: CreditCard,
    },
];

const adminNavItems: NavItem[] = [
    {
        title: 'Управление тарифами',
        url: '/admin/tariffs',
        icon: Layers,
    },
    {
        title: 'Пользователи',
        url: '/admin/users',
        icon: Users,
    },
    {
        title: 'Подписки',
        url: '/admin/subscriptions',
        icon: ShieldCheck,
    },
    {
        title: 'История платежей',
        url: '/admin/payments',
        icon: CreditCard,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Поддержка 24/7',
        url: 'https://t.me/ungten',
        icon: Headset,
    },
];

export function AppSidebar() {
    const { auth } = usePage().props as any;
    const isAdmin = auth?.user?.role === 'admin';
    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
                {isAdmin && <NavMain items={adminNavItems} />}
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
