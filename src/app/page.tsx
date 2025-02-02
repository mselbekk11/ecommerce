import { getProductsInCollection } from '../../lib/shopify';
import ProductList from './components/ProductList';

// Page components in app directory must be async by default
export default async function Home() {
  const products = await getProductsInCollection();
  console.log(products);

  return (
    <div className='max-w-2xl mx-auto lg:max-w-7xl'>
      <h2 className='text-2xl font-bold text-white mb-6'>Products</h2>
      <ProductList products={products} />
    </div>
  );
}
