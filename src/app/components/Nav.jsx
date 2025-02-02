import Link from 'next/link';

export default function Nav() {
  return (
    <header className="border-b sticky top-0 z-20 max-w-2xl mx-auto lg:max-w-7xl">
      <div className="flex items-center justify-between max-w-6xl pt-4 pb-2 px-4 mz-auto lg:max-w-screen-xl">
        <Link href="/" passHref>
          <span className="text-lg pt-1 font-bold">
            Shopify + Next.js
          </span>
        </Link>
        <a className="text-md font-bold cursor-pointer">
          Cart
        </a>
      </div>
    </header>
  )
}