"use client"
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { removeFromCart } from "@/store/productSlice"

const CartPage = () => {
    const cart = useSelector((state: RootState) => state.products.cart);
    const dispatch = useDispatch();
    console.log("cart state:" , cart)

    const handleRemoveFromCart = (id: number) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div>
            <h1>Shopping Cart</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <img src={item.images[0]} alt={item.title} width={100} />
                            <div>
                                <h2>{item.title}</h2>
                                <p>${item.price} x {item.quantity}</p>
                                <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Your cart is empty.</p>
            )}
        </div>
    );
};

export default CartPage;
