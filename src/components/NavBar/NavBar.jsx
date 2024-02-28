import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
    return (
        <nav className="sticky w-full shadow-md bg-[#86b0e6]">
            <div className="flex flex-row justify-evenly items-center h-16 px-12">
                <Link to='/'>
                    <h3 className='text-white font-bold hover:text-gray-500 text-center'>Apple Ecommerce</h3>
                </Link>
                <div className="flex flex-row font-bold text-white gap-8">
                    <NavLink to={`/category/celular`}>Celulares</NavLink>
                    <NavLink to={`/category/tablet`}>Tablets</NavLink>
                    <NavLink to={`/category/notebook`}>Notebooks</NavLink>
                </div>
                <CartWidget />
            </div>
        </nav>
    )
}

export default NavBar