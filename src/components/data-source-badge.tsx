'use client';

import { Database, Sparkles } from 'lucide-react';

export type DataSource = 'real' | 'simulated' | 'mixed';

const REAL_CLS = 'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-info-bg border border-info-border';
const REAL_ICON = 'text-info-fg shrink-0';
const REAL_TEXT = 'text-[9px] font-medium text-info-fg leading-none';

const SIM_CLS = 'inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-accent-bg border border-accent-border';
const SIM_ICON = 'text-accent-fg shrink-0';
const SIM_TEXT = 'text-[9px] font-medium text-accent-fg leading-none';

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
