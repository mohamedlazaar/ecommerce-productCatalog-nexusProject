import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store";
import {  updateQuantity, removeFromCart } from "@/store/cartSilce";
import Link from "next/link";
import Image from "next/image";


const Cart = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { cart, totalAmount } = useSelector((state: RootState) => state.cart);

    const handleIncrement = (id: number) => {
        const item = cart.find((product) => product.id === id);
        if (item) {
            dispatch(updateQuantity({ id, quantity: (item.quantity || 1) + 1 }));
        }
    };

    const handleDecrement = (id: number) => {
        const item = cart.find((product) => product.id === id);
        if (item && item.quantity && item.quantity > 1) {
            dispatch(updateQuantity({ id, quantity: item.quantity - 1 }));
        } else {
            dispatch(removeFromCart(id));
        }
    };

    const handleRemove = (id: number) => {
        dispatch(removeFromCart(id));
    };



    return (
        <div className="h-screen bg-gray-100 pt-20">
            <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
            <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
                <div className="rounded-lg md:w-2/3">
                    {cart.length > 0 ? (
                        cart.map((item) => (
                            <div key={item.id} className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
                                <Image width={400} height={400} src={item.image_url} alt={item.name} className="w-full rounded-lg sm:w-40" />
                                <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                                    <div className="mt-5 sm:mt-0">
                                        <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                        <p className="mt-1 text-md text-gray-700">{item.category_name}</p>
                                    </div>
                                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                                        <div className="flex items-center border-gray-100">
                                            <button
                                                onClick={() => handleDecrement(item.id)}
                                                aria-label="Decrease quantity"
                                                className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            >
                                                -
                                            </button>
                                            <input
                                                className="h-8 w-8 border bg-white text-center text-xs outline-none"
                                                type="number"
                                                value={item.quantity}
                                                min="1"
                                                readOnly
                                            />
                                            <button
                                                onClick={() => handleIncrement(item.id)}
                                                aria-label="Increase quantity"
                                                className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                                            >
                                                +
                                            </button>
                                        </div>
                                        <div className="flex justify-center items-center space-x-4">
                                            <p className="text-md font-bold">${item.price * (item.quantity || 1)}</p>
                                            <button onClick={() => handleRemove(item.id)} aria-label="Remove item"> 
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="currentColor"
                                                    className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) 
                        
                    ) : (
                        <p className="text-center text-gray-700">Your cart is empty.</p>
                    )}
                </div>

               {cart.length > 0 ?  (
                <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
                    <div className="mb-2 flex justify-between">
                        <p className="text-gray-700">Subtotal</p>
                        <p className="text-gray-700">${totalAmount.toFixed(2)}</p>
                    </div>
                    <hr className="my-4" />
                    <div className="flex justify-between">
                        <p className="text-lg font-bold">Total</p>
                        <div>
                        <p className="text-gray-700">${totalAmount?.toFixed(2) || "0.00"}</p>

                        </div>
                    </div>
                    <Link href="/checkout">
                      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                        Check out
                    </button>  
                    </Link>
                    
                </div>                
               ): ""
            }

            </div>
        </div>
    );
};

export default Cart;
