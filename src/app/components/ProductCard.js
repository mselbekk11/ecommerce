import Link from 'next/link';
import Image from 'next/image';
import { formatter } from '../../../utils/helpers';
import { TextScrambleBasic } from './TextScrambleTwo';
// import { AnimatedNumberBasic } from './AnimatedCounter';

export default function ProductCard({ product }) {
  const { handle, title } = product.node;
  const { altText, url } = product.node.images.edges[0].node;
  const price = product.node.priceRange.minVariantPrice.amount;

  const calcPrice = formatter.format(price);

  // console.log('calcPrice:', calcPrice);
  console.log('price:', price, 'type:', typeof price);

  // const num = Number(price);

  return (
    <div className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
      <div className='aspect-[3/4] w-full bg-[#f9fafb] group-hover:opacity-75 flex items-center justify-center'>
        <Image
          src={url}
          alt={altText || `Product image of ${title}`}
          className='w-full'
          width={300}
          height={300}
        />
      </div>
      <div className='flex justify-between p-4'>
        <h3 className='text-sm font-medium text-gray-900'>
          <Link href={`/products/${handle}`}>
            <span aria-hidden='true' className='absolute inset-0' />
            <TextScrambleBasic text={title} />
          </Link>
        </h3>
        <h3 className='text-sm font-medium text-gray-900'>
          <Link href={`/products/${handle}`}>
            <span aria-hidden='true' className='absolute inset-0' />
            <TextScrambleBasic text={calcPrice} />
          </Link>
        </h3>
        {/* <div className='flex flex-1 flex-col justify-end'>
          <p className='text-base font-medium text-gray-900'>{calcPrice}</p>
          <AnimatedNumberBasic number={num} />
        </div> */}
      </div>
    </div>
  );
}
