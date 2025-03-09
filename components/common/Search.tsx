import { IoSearchSharp } from "react-icons/io5"



const Search = ()=>{
    return(
        <div className="mx-auto md:mx-0 w-[70%]  md:w-[50%] border-[1px] flex items-center justify-around h-[40px] rounded-[10px]">
            <input type="text" placeholder="Search for a product..." className="w-[90%] pl-[10px] h-full border-none outline-none" />
            <button className="w-[10%] h-full cursor-pointer "><IoSearchSharp className="w-[24px] h-[24px]" /></button>
        </div>
    )
}
export default Search;