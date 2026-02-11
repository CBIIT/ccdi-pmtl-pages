export const version = '0.0.0';

export const appTitle = 'CCDI PMTL';
export const appDescription = 'CCDI Pediatric Molecular Target List (PMTL) pages.';
export const appCanonicalUrl = (import.meta?.env?.VITE_CANONICAL_URL ?? '').replace(/\/$/, '');

export const naLabel = 'N/A';
export const decimalPlaces = 2;

// Simple 0→1 gradient legend colors (kept minimal, no new design system tokens)
export const colorRange = [
  '#f7fbff',
  '#deebf7',
  '#c6dbef',
  '#9ecae1',
  '#6baed6',
  '#4292c6',
  '#2171b5',
  '#08519c',
];

export const mtpPageNames = {
  fdaPmtlPage: {
    label: 'PMTL',
    url: '/',
  },
  mtpPmtlDocPage: {
    label: 'PMTL Documentation',
    url: '/pmtl-doc',
  },
};
