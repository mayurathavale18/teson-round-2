import products from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 mx-3 rounded-3xl bg-slate-100">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
