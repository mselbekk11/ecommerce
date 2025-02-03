'use client';

import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant='outline'
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      T
    </Button>
  );
}
