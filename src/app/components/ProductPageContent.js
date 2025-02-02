export default function ProductPageContent({ product }) {
  if (!product) return null;

  return (
    <div className='max-w-2xl mx-auto px-4'>
      <h1 className='text-2xl font-bold'>{product.title}</h1>
      <div>{product.description}</div>
    </div>
  );
}
