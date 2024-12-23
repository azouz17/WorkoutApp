const Header = () =>{


    return(
        <div className="w-3/4 h-1/5 border border-[#00B295] rounded border-2 mt-8">
            <div className="flex justify-between font-bold p-4 align-baseline">
                <button className="border border-white rounded p-1 hover:opacity-60 ">Logout</button>
                <span className="text-2xl text-[#00B295]">FitFlex</span>
                <span className="mt-1">Hello, Mostafa</span>
            </div>
        </div>
    )
}
export default Header;