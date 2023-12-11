import { GiTacos } from 'react-icons/gi'
import { FaPlateWheat } from 'react-icons/fa6'
import { FaPizzaSlice } from 'react-icons/fa6'
import { BiSolidDrink } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
export default function SideBar() {



    return <>
        <div className="py-4 overflow-y-auto w-56">
            <ul className="space-y-2 font-medium">
                <li className=" text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700 group hover:duration-300 hover:cursor-pointer p-2">
                    <NavLink className={({ isActive }) => isActive ? " bg-orange-400 flex items-center p-2 text-white rounded-lg" : ""} to={"/meals/tacos"}> 
                    <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-4"><FaPlateWheat />Tacos</span>
                    </NavLink>
                </li>
                <li className=" text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700 group hover:duration-300 hover:cursor-pointer p-2">
                    <NavLink className={({ isActive }) => isActive ? " bg-orange-400 flex items-center p-2 text-white rounded-lg" : ""} to={"/meals/tagine"}> 
                    <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-4"><FaPlateWheat />Tagine</span>
                    </NavLink>
                </li>
                <li className=" text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700 group hover:duration-300 hover:cursor-pointer p-2">
                    <NavLink className={({ isActive }) => isActive ? " bg-orange-400 flex items-center p-2 text-white rounded-lg" : ""} to={"/meals/pizza"}> 
                    <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-4"><FaPlateWheat />Pizza</span>
                    </NavLink>
                </li>
                <li className=" text-gray-900 rounded-lg dark:text-white hover:bg-orange-400 hover:text-white dark:hover:bg-gray-700 group hover:duration-300 hover:cursor-pointer p-2">
                    <NavLink className={({ isActive }) => isActive ? " bg-orange-400 flex items-center p-2 text-white rounded-lg" : ""} to={"/meals/drinks"}> 
                    <span className="flex-1 ms-3 whitespace-nowrap flex items-center gap-4"><FaPlateWheat />Drinks</span>
                    </NavLink>
                </li>

            </ul>
        </div>
    </>
}