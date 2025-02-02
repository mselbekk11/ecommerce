import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../../../utils/helpers';

export default function ProductCard({ product }) {
  const { handle, title } = product.node;

  const { altText, url } = product.node.images.edges[0].node;

  const price = product.node.priceRange.minVariantPrice.amount;

  return (
    <Link href={`/products/${handle}`}>
      <div className=' w-full bg-gray-200 rounded-3xl overflow-hidden'>
        <div className=' relative group-hover:opacity-75h-72'>
          <Image
            src={url}
            alt={altText}
            className='rounded w-full'
            width={300}
            height={300}
          />
        </div>
      </div>
      <h3 className='mt-4 text-lg font-medium text-white'>{title}</h3>
      <p className='mt-1 text-sm text-gray-700'>{formatter.format(price)}</p>
    </Link>
  );
}
