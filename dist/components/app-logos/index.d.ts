import { AppLogoProps } from './types';
import { SwarmLogo } from './SwarmLogo';
import { BeeGraphLogo } from './BeeGraphLogo';
import { BeeMapLogo } from './BeeMapLogo';
import { BeeScoutLogo } from './BeeScoutLogo';
import { HaiveLogo } from './HaiveLogo';
import * as React from "react";
export type { AppLogoProps };
export { SwarmLogo, BeeGraphLogo, BeeMapLogo, BeeScoutLogo, HaiveLogo };
/** Registry dei loghi disponibili: slug → { label, component } */
export declare const APP_LOGOS: Record<string, {
    label: string;
    component: React.FC<AppLogoProps>;
}>;
/** Lista degli slug disponibili */
export declare const APP_LOGO_SLUGS: string[];
export interface AppLogoComponentProps extends AppLogoProps {
    /** Slug del logo (es. "swarm", "beegraph") */
    slug: string;
    /** Testo alternativo per il fallback (default: prima lettera dello slug) */
    fallback?: string;
}
/**
 * Renderizza il logo di un'app DataBeez dato lo slug.
 * Se lo slug non corrisponde a nessun logo, mostra un fallback con la prima lettera.
 */
export declare function AppLogo({ slug, size, className, fallback }: AppLogoComponentProps): import("react/jsx-runtime").JSX.Element;
