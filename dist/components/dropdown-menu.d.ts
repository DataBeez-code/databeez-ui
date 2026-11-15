import * as React from "react";
import * as DropdownPrimitive from "@radix-ui/react-dropdown-menu";
declare const DropdownMenu: React.FC<DropdownPrimitive.DropdownMenuProps>;
declare const DropdownMenuTrigger: React.ForwardRefExoticComponent<DropdownPrimitive.DropdownMenuTriggerProps & React.RefAttributes<HTMLButtonElement>>;
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<DropdownPrimitive.DropdownMenuGroupProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuContent: React.ForwardRefExoticComponent<Omit<DropdownPrimitive.DropdownMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export interface DropdownMenuItemProps extends React.ComponentPropsWithoutRef<typeof DropdownPrimitive.Item> {
    /** Voce distruttiva (tono error). */
    destructive?: boolean;
}
declare const DropdownMenuItem: React.ForwardRefExoticComponent<DropdownMenuItemProps & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuLabel: React.ForwardRefExoticComponent<Omit<DropdownPrimitive.DropdownMenuLabelProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSeparator: React.ForwardRefExoticComponent<Omit<DropdownPrimitive.DropdownMenuSeparatorProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export { DropdownMenu, DropdownMenuTrigger, DropdownMenuGroup, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, };
