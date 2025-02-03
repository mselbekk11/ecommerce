import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../../../utils/helpers';

export default function ProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, url } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <div className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
      <div className='aspect-[3/4] w-full bg-gray-200 group-hover:opacity-75 sm:aspect-auto sm:h-96'>
        <Image
          src={url}
          alt={altText}
          className='h-full w-full object-cover'
          width={300}
          height={300}
        />
      </div>
      <div className='flex flex-1 flex-col space-y-2 p-4'>
        <h3 className='text-sm font-medium text-gray-900'>
          <Link href={`/products/${handle}`}>
            <span aria-hidden='true' className='absolute inset-0' />
            {title}
          </Link>
        </h3>
        <div className='flex flex-1 flex-col justify-end'>
          <p className='text-base font-medium text-gray-900'>
            {formatter.format(price)}
          </p>
        </div>
      </div>
    </div>
  );
}
