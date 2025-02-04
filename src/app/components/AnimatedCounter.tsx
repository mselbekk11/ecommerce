'use client';
import { useEffect, useState } from 'react';
import { AnimatedNumber } from '@/components/ui/animated-number';

export function AnimatedNumberBasic({ number }: { number: number }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(number);
  }, []);

  return (
    <div className='flex'>
      $
      <AnimatedNumber
        className='ext-base font-medium text-gray-900'
        springOptions={{
          bounce: 0,
          duration: 2000,
        }}
        value={value}
      />
      .00
    </div>
  );
}
