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
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <TextScramble
      trigger={trigger}
      className='font-mono text-2xl font-bold uppercase border-2 border-[#f0ecdc] py-2 px-4'
    >
      {text}
    </TextScramble>
  );
}
