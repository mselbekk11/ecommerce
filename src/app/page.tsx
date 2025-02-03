import { getProductsInCollection } from '../../lib/shopify';
import HeroContainer from './components/HeroContainer';
import Navigation from './components/Navigation';
import ProductGrid from './components/ProductGrid';
// import ProductList from './components/ProductList';

// Page components in app directory must be async by default
export default async function Home() {
  const products = await getProductsInCollection();
  console.log(products);

  return (
    <div className=''>
      <Navigation />
      <HeroContainer />
      <ProductGrid />
      {/* <ProductList products={products} /> */}
    </div>
  );
}
