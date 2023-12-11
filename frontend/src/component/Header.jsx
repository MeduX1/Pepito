import Logo from "../assets/elpepito.png"
import { useNavigate } from "react-router-dom"
export default function Header() {
    const Navigate = useNavigate()



    
    return <>
        <header className=" sticky">
            <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="/" className="flex items-center">
                        <img src={Logo} className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                    </a>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <button  onClick={()=> Navigate("/")}  className="block py-2 pr-4 pl-3  text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Home</button>
                            </li>
                            <li>
                                <button onClick={() => Navigate('/Order')} className="block py-2 pr-4 pl-3 text-white border-b  border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Orders</button>
                            </li>
                            <li>
                                <button onClick={() => Navigate('/meals/tacos')} className="block py-2 pr-4 pl-3 mr-44 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Meals</button>
                            </li>
                            <li>
                                <button onClick={() => Navigate('/login')} className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Login</button>
                            </li>
                            <li>
                                <button onClick={() => Navigate('/sign-up')} className="block py-2 pr-4 pl-3 text-white border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sign-up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>




}