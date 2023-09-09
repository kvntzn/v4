import { css } from 'styled-components';

const variables = css`
  :root {
    /** CSS DARK THEME PRIMARY COLORS */
    --color-primary-100: #382bf0;
    --color-primary-200: #5e43f3;
    --color-primary-300: #7a5af5;
    --color-primary-400: #9171f8;
    --color-primary-500: #a688fa;
    --color-primary-600: #ba9ffb;
    /** CSS DARK THEME SURFACE COLORS */
    --color-surface-100: #121212;
    --color-surface-200: #282828;
    --color-surface-300: #3f3f3f;
    --color-surface-400: #575757;
    --color-surface-500: #717171;
    --color-surface-600: #8b8b8b;
    /** CSS DARK THEME MIXED SURFACE COLORS */
    --color-surface-mixed-100: #1a1625;
    --color-surface-mixed-200: #2f2b3a;
    --color-surface-mixed-300: #46424f;
    --color-surface-mixed-400: #5e5a66;
    --color-surface-mixed-500: #76737e;
    --color-surface-mixed-600: #908d96;

    --dark-navy: var(--color-surface-100);
    --navy: var(--color-surface-mixed-100);
    --light-navy: var(--color-surface-mixed-200);
    --lightest-navy: var(--color-surface-mixed-300);
    --navy-shadow: rgba(2, 12, 27, 0.7);
    --dark-slate: #495670;
    --slate: #8b8b8b;
    --light-slate: #8b8b8b;
    --lightest-slate: #fff;
    --white: #e6f1ff;
    --green: var(--color-primary-500);
    --green-tint: rgba(100, 255, 218, 0.1);
    --pink: #f57dff;
    --blue: #57cbff;

    --font-sans: 'Calibre', 'Inter', 'San Francisco', 'SF Pro Text', -apple-system, system-ui,
      sans-serif;
    --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;

    --fz-xxs: 12px;
    --fz-xs: 13px;
    --fz-sm: 14px;
    --fz-md: 16px;
    --fz-lg: 18px;
    --fz-xl: 20px;
    --fz-xxl: 22px;
    --fz-heading: 32px;

    --border-radius: 4px;
    --nav-height: 100px;
    --nav-scroll-height: 70px;

    --tab-height: 42px;
    --tab-width: 120px;

    --easing: cubic-bezier(0.645, 0.045, 0.355, 1);
    --transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);

    --hamburger-width: 30px;

    --ham-before: top 0.1s ease-in 0.25s, opacity 0.1s ease-in;
    --ham-before-active: top 0.1s ease-out, opacity 0.1s ease-out 0.12s;
    --ham-after: bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ham-after-active: bottom 0.1s ease-out,
      transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s;
  }
`;

export default variables;
