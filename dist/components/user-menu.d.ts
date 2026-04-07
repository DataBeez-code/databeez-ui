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
}
export declare function UserMenu({ user, bumblebeeUrl, extraItems, onLogout }: UserMenuProps): import("react/jsx-runtime").JSX.Element;
