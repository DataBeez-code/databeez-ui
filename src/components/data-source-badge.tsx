'use client';

import { Database, Sparkles } from 'lucide-react';

export type DataSource = 'real' | 'simulated' | 'mixed';

const REAL_CLS = 'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-indigo-50 dark:bg-indigo-600 border border-indigo-200';
const REAL_ICON = 'text-indigo-600 dark:text-white shrink-0';
const REAL_TEXT = 'text-[9px] font-medium text-indigo-700 dark:text-white leading-none';

const SIM_CLS = 'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-violet-50 dark:bg-violet-600 border border-violet-200';
const SIM_ICON = 'text-violet-600 dark:text-white shrink-0';
const SIM_TEXT = 'text-[9px] font-medium text-violet-700 dark:text-white leading-none';

export function DataSourceBadge({ source }: { source: DataSource }) {
  if (source === 'mixed') {
    return (
      <span className="inline-flex items-center gap-1.5">
        <span className={REAL_CLS}>
          <Database size={9} className={REAL_ICON} />
          <span className={REAL_TEXT}>Dati reali</span>
        </span>
        <span className={SIM_CLS}>
          <Sparkles size={9} className={SIM_ICON} />
          <span className={SIM_TEXT}>Simulato</span>
        </span>
      </span>
    );
  }

  if (source === 'simulated') {
    return (
      <span className={SIM_CLS}>
        <Sparkles size={9} className={SIM_ICON} />
        <span className={SIM_TEXT}>Simulato</span>
      </span>
    );
  }

  return (
    <span className={REAL_CLS}>
      <Database size={9} className={REAL_ICON} />
      <span className={REAL_TEXT}>Dati reali</span>
    </span>
  );
}
