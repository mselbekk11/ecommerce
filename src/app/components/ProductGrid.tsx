const products = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://9gkyc4ano8.ufs.sh/f/bQmZVzMJri47QnMJbtOAElc7iBuJFZCv3djRezIMgYqk6HUW',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://9gkyc4ano8.ufs.sh/f/bQmZVzMJri47lSdD9wVbU1hqmBLzoyFTKwQCj9uG0pfesnJx',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://9gkyc4ano8.ufs.sh/f/bQmZVzMJri47QnMJbtOAElc7iBuJFZCv3djRezIMgYqk6HUW',
    imageAlt: 'Front of plain black t-shirt.',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    price: '$32',
    description:
      'Look like a visionary CEO and wear the same black t-shirt every day.',
    options: 'Black',
    imageSrc:
      'https://9gkyc4ano8.ufs.sh/f/bQmZVzMJri47lSdD9wVbU1hqmBLzoyFTKwQCj9uG0pfesnJx',
    imageAlt: 'Front of plain black t-shirt.',
  },
];

export default function ProductGrid() {
  return (
    <div className='bg-white dark:bg-background'>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
        <h2 className='sr-only'>Products</h2>

        <div className='grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4 lg:gap-x-8'>
          {products.map((product) => (
            <div
              key={product.id}
              className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
            >
              <img
                alt={product.imageAlt}
                src={product.imageSrc}
                className='aspect-[3/4] w-full bg-gray-200 object-cover group-hover:opacity-75 sm:aspect-auto sm:h-96'
              />
              <div className='flex flex-1 flex-col space-y-2 p-4'>
                <h3 className='text-sm font-medium text-gray-900'>
                  <a href={product.href}>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {product.name}
                  </a>
                </h3>
                <p className='text-sm text-gray-500'>{product.description}</p>
                <div className='flex flex-1 flex-col justify-end'>
                  <p className='text-sm italic text-gray-500'>
                    {product.options}
                  </p>
                  <p className='text-base font-medium text-gray-900'>
                    {product.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
