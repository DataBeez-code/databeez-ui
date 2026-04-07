export interface UserMenuItem {
    label: string;
    href?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}
export interface UserMenuProps {
    user: {
        fullname: string;
        email: string;
        avatarUrl?: string;
    };
    bumblebeeUrl: string;
    extraItems?: UserMenuItem[];
    onLogout?: () => void;
    showLaunchpadLink?: boolean;
}
export declare function UserMenu({ user, bumblebeeUrl, extraItems, onLogout, showLaunchpadLink }: UserMenuProps): import("react/jsx-runtime").JSX.Element;
