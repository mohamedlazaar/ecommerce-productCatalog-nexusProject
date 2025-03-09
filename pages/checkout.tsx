"use client";

import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Link from "next/link";
import { useState } from "react";

const CheckoutPage = () => {
    const cart = useSelector((state: RootState) => state.cart.cart);
    const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Left Side: Shipping Details */}
                <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Shipping Information</h2>
                    
                    <form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="First Name" className="p-3 border rounded-lg" />
                            <input type="text" placeholder="Last Name" className="p-3 border rounded-lg" />
                            <input type="email" placeholder="Email Address" className="p-3 border rounded-lg" />
                            <input type="tel" placeholder="Phone Number" className="p-3 border rounded-lg" />
                            <input type="text" placeholder="Address" className="p-3 border rounded-lg col-span-2" />
                            <input type="text" placeholder="City" className="p-3 border rounded-lg" />
                            <input type="text" placeholder="Postal Code" className="p-3 border rounded-lg" />
                            <input type="text" placeholder="Country" className="p-3 border rounded-lg col-span-2" />
                        </div>
                        
                        <h2 className="text-2xl font-semibold mt-6 mb-4">Payment Details</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <input type="text" placeholder="Card Number" className="p-3 border rounded-lg col-span-2" />
                            <input type="text" placeholder="Cardholder Name" className="p-3 border rounded-lg col-span-2" />
                            <input type="text" placeholder="Expiry Date (MM/YY)" className="p-3 border rounded-lg" />
                            <input type="text" placeholder="CVV" className="p-3 border rounded-lg" />
                        </div>
                        
                        <button 
                            type="submit" 
                            onClick={()=>{
                                alert("Payment Successful!");
                            }}
                            className="w-full mt-6 bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
                                    <Link href="/">Order Successful</Link>
                              
                           
                        </button>
                    </form>
                </div>

                {/* Right Side: Order Summary */}
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
                    <div className="space-y-4">
                        {cart.length > 0 ? (
                            cart.map((product) => (
                                <div key={product.id} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <img 
                                            src={product.image_url} 
                                            alt={product.name} 
                                            className="w-16 h-16 object-cover rounded-md" 
                                        />
                                        <div className="ml-4">
                                            <h3 className="text-lg font-semibold">{product.name}</h3>
                                            <p className="text-gray-500">x{product.quantity}</p>
                                        </div>
                                    </div>
                                    <p className="text-lg font-bold">${(product.price * (product.quantity || 1)).toFixed(2)}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">Your cart is empty.</p>
                        )}
                    </div>

                    <hr className="my-4" />

                    <div className="flex justify-between">
                        <span className="text-lg font-semibold">Total:</span>
                        <span className="text-lg font-bold">${totalAmount.toFixed(2)}</span>
                    </div>

                    <Link href="/cart" className="block mt-6 text-blue-500 hover:underline">
                        Edit Cart
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
