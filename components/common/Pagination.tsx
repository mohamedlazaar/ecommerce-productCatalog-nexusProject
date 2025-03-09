import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiLastPage, BiFirstPage } from "react-icons/bi";



const Pagination = ({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) => {
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center mt-[50px] mb-[100px]">
            <button
                onClick={() => onPageChange(1)}
                disabled={currentPage === 1}
                className={`px-4 cursor-pointer rounded-[10px] py-2 mx-1 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
            >
                <BiFirstPage />
            </button>

            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={`px-4 cursor-pointer rounded-[10px] py-2 mx-1 border ${currentPage === 1 ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
            >
               <FaArrowLeft />
            </button>

            {pageNumbers.map((num) => (
                <button
                    key={num}
                    onClick={() => onPageChange(num)}
                    className={`px-4 cursor-pointer rounded-[10px] py-2 mx-1 border ${num === currentPage ? 'bg-gray-700 text-white' : 'bg-gray-200'}`}
                >
                    {num}
                </button>
            ))}

            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`px-4 cursor-pointer rounded-[10px] py-2 mx-1 border ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
            >
                <FaArrowRight />
            </button>

            <button
                onClick={() => onPageChange(totalPages)}
                disabled={currentPage === totalPages}
                className={`px-4 cursor-pointer rounded-[10px] py-2 mx-1 border ${currentPage === totalPages ? 'bg-gray-300' : 'bg-gray-700 text-white'}`}
            >
               <BiLastPage />
            </button>
        </div>
    );
};

export default Pagination;
