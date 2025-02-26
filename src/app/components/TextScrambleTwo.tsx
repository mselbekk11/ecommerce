'use client';

import { TextScramble } from '@/components/ui/text-scramble';
import { useEffect, useState } from 'react';

export function TextScrambleBasic({ text }: { text: string }) {
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setTrigger(false);
      // Small delay to ensure the animation can restart
      setTimeout(() => setTrigger(true), 100);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TextScramble
      trigger={trigger}
      className='font-mono text-sm font-bold uppercase'
    >
      {text}
    </TextScramble>
  );
}
