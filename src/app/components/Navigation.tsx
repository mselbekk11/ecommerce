import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from './ThemeToggle';

const links = [
  {
    label: 'All',
    href: '/',
  },
  {
    label: 'Shirts',
    href: '/shirts',
  },
  {
    label: 'Hats',
    href: '/stickers',
  },
];

export default function Navigation() {
  return (
    <header className='w-full sticky top-0 z-50 border-b bg-background'>
      <nav className=' mx-auto max-w-7xl flex justify-between py-4 px-4 items-center'>
        <div className='flex gap-4 items-center'>
          <div className=''>
            <ThemeToggle />
          </div>
          <div className='flex gap-4 min-w-[120px] text-sm dark:text-[#888888]'>
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className='text-2xl font-bold'>LLM DEPT.</div>
        <div className='min-w-[120px] flex justify-end'>
          {/* <Button variant='outline' size='icon'>
            <ShoppingBag />
          </Button> */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant='outline'>
                <ShoppingBag />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                  Make changes to your profile here. Click save when your done.
                </SheetDescription>
              </SheetHeader>

              <SheetFooter>
                <SheetClose asChild>
                  <Button type='submit'>Save changes</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
