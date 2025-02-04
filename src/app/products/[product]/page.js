import { getAllProducts, getProduct } from '../../../../lib/shopify';
import ProductPageContent from '../../components/ProductPageContent';

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((item) => ({
    product: String(item.node.handle),
  }));
}

async function ProductPage({ params }) {
  try {
    // Destructure id after awaiting params
    const { product: productHandle } = await params;
    const product = await getProduct(productHandle);

    if (!product) {
      return <div>Product not found</div>;
    }

    return (
      <div className=''>
        <ProductPageContent product={product} />
      </div>
    );
  } catch (error) {
    console.error('Error loading product:', error);
    return <div>Error loading product</div>;
  }
}

export default ProductPage;
