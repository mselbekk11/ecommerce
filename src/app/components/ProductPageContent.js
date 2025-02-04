import Image from 'next/image';
import ProductForm from './ProductForm';

export default function ProductPageContent({ product }) {
  if (!product) return null;

  return (
    <div className='mx-auto max-w-7xl grid grid-cols-3  min-h-[500px]'>
      <div className='col-span-2 bg-blue-500 flex items-center justify-center'>
        <Image
          src={product.images.edges[0].node.url}
          alt={product.images.edges[0].node.altText || 'Product Image'}
          width={500}
          height={500}
          className=''
        />
      </div>
      <div className='col-span-1 bg-red-500'>
        <ProductForm product={product} />
      </div>
      {/* <h1 className='text-2xl font-bold'>{product.title}</h1>
      <div>{product.description}</div> */}
    </div>
  );
}
