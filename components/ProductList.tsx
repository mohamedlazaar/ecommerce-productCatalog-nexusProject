import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSilce';
import ProductCard from './common/ProductCard';
import { AppDispatch } from '@/store';
import { Product } from '@/store/productSlice'; // Import the Product type

const ProductList = ({ products }: { products: Product[] }) => {
    const dispatch = useDispatch<AppDispatch>();
    
    return (
        <div className="w-[90%] mx-auto mb-[100px]">
            {products.length === 0 ? (
                <p>No products found</p>
            ) : (
                <>
                    <div className="flex flex-wrap justify-start items-center gap-y-3 ">
                        {products.map((product) => (
                            <ProductCard 
                                key={product.id}
                                product={product}
                                addToCart={() => dispatch(addToCart(product))}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};
 
export default ProductList;