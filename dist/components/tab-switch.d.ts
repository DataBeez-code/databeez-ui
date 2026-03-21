import { LucideIcon } from 'lucide-react';
export interface TabSwitchItem {
    id: string;
    label: string;
    icon?: LucideIcon;
}
export interface TabSwitchProps {
    tabs: TabSwitchItem[];
    activeTab: string;
    onChange: (id: string) => void;
    className?: string;
}
declare function TabSwitch({ tabs, activeTab, onChange, className }: TabSwitchProps): import("react/jsx-runtime").JSX.Element;
export { TabSwitch };
