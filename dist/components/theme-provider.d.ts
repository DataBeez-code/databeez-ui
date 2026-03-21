export type ThemeMode = 'light' | 'dark' | 'system';
export declare const THEME_STORAGE_KEY = "databeez-theme";
/**
 * Script inline da iniettare nel <head> prima del primo paint per evitare
 * il flash of unstyled content (FOUC) in modalità dark.
 *
 * Utilizzo in Next.js:
 *   <script dangerouslySetInnerHTML={{ __html: THEME_ANTI_FOUC_SCRIPT }} />
 *
 * Utilizzo in HTML puro:
 *   <script>{THEME_ANTI_FOUC_SCRIPT}</script>
 */
export declare const THEME_ANTI_FOUC_SCRIPT = "(function(){var t=localStorage.getItem('databeez-theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}})();";
interface ThemeContextValue {
    theme: ThemeMode;
    setTheme: (theme: ThemeMode) => void;
}
export declare function ThemeProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useTheme(): ThemeContextValue;
export {};
