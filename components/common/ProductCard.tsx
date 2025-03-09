import Link from "next/link";

const ProductCard = ({ product, addToCart }:any) => {
    return (
     

  
        <div className="max-w-[350px] w-full  h-[350px] ml-[10px] rounded-[10px] group overflow-hidden">
            <div className="!h-full bg-white shadow-md rounded-[10px] max-w-sm  border-[1px] border-gray-400 relative">
              
                    <img className="rounded-[10px] h-full top-0 left-0 w-full absolute group-hover:scale-110 " src={product.image_url} alt="product image" />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-1 rounded-[10px]"></div>
                
                    <div className="px-5 pb-5 w-full h-full flex flex-col justify-center gap-[10px] relative z-2  ">
                        <Link href={`/product/${product.id}`} className="hover:underline text-white">
                            <h3 className="text-white font-semibold text-xl tracking-tight ">{product.name}</h3>
                        </Link>
                        <div className="flex items-center justify-between  ">
                            <p className="text-gray-200 text-md font-bold">{product.category_name}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-3xl font-bold text-white">${product.price}</span>
                            <button onClick={addToCart}
                                className="text-black bg-blue-200 hover:bg-blue-500 hover:text-white focus:ring-4 focus:ring-blue-300 font-bold cursor-pointer rounded-lg text-sm px-5 py-2.5 text-center">Add
                                to cart</button>
                        </div>
                    </div>
            </div>
            </div>

    );
};

export default ProductCard;
