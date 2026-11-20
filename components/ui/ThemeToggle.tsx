'use client';

import { useSyncExternalStore } from 'react';
import { useTheme, type Theme } from '@/components/providers/ThemeProvider';

const choices: { value: Theme; label: string; ariaLabel: string }[] = [
  { value: 'light', label: 'Light', ariaLabel: 'Mode Terang' },
  { value: 'dark', label: 'Dark', ariaLabel: 'Mode Gelap' },
  { value: 'system', label: 'System', ariaLabel: 'Ikuti Sistem' },
];

const emptySubscribe = () => () => {};

interface ThemeToggleProps {
  variant?: 'desktop' | 'mobile';
}

export function ThemeToggle({ variant = 'desktop' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const activeTheme: Theme = mounted ? theme : 'system';

  if (variant === 'mobile') {
    return (
      <div
        role="group"
        aria-label="Pengaturan Tema Seluler"
        className="grid grid-cols-3 p-1 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary"
      >
        {choices.map((item) => {
          const isActive = activeTheme === item.value;
          return (
            <button
              key={item.value}
              type="button"
              onClick={() => setTheme(item.value)}
              aria-label={item.ariaLabel}
              aria-pressed={isActive}
              className={`py-2 rounded-sm font-mono text-mono-sm uppercase text-center transition-colors duration-state-change cursor-pointer ${
                isActive
                  ? 'bg-light-surface-card dark:bg-dark-surface-card text-light-primary dark:text-dark-accent-blue'
                  : 'text-light-on-surface-muted dark:text-dark-on-surface-muted hover:text-light-on-surface dark:hover:text-dark-on-surface'
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div
      role="group"
      aria-label="Pengaturan Tema"
      className="inline-flex items-center p-0.5 rounded-sm border border-light-border dark:border-dark-border bg-light-surface-secondary dark:bg-dark-surface-secondary"
    >
      {choices.map((item) => {
        const isActive = activeTheme === item.value;
        return (
          <button
            key={item.value}
            type="button"
            onClick={() => setTheme(item.value)}
            aria-label={item.ariaLabel}
            aria-pressed={isActive}
            className={`px-2.5 py-1.5 rounded-sm font-mono text-mono-sm uppercase transition-colors duration-state-change cursor-pointer ${
              isActive
                ? 'bg-light-surface-card dark:bg-dark-surface-card text-light-primary dark:text-dark-accent-blue'
                : 'text-light-on-surface-muted dark:text-dark-on-surface-muted hover:text-light-on-surface dark:hover:text-dark-on-surface'
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
