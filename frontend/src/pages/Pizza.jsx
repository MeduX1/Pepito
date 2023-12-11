import React from 'react'
import Header from '../component/Header'
import SideBar from '../component/SideBar'
import { TiThMenu } from 'react-icons/ti'
import Pizzas from '../assets/pizza.png'
import axiosAPI from '../../api/AxiosAPI'
import { toast } from 'react-toastify'
import { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { FaCartShopping } from 'react-icons/fa6'
import { AddtoCart } from '../Cart'
const Pizza = () => {
    const [data, setData] = useState(null)
    const [Open, setOpen] = useState(false)
    const [cartData, setCartData] = useState({ name: '', price: 0.00, category: '', quantity: 1})
    const [count, setCount] = useState(0)
    useEffect(() => {
        async function GetData() {
            try {
                const fetched = await axiosAPI.get(`/getMeals`, { params: { category: 'pizza' } })
                setData(fetched.data)
            } catch (error) {
                toast.error('Cannot fetch data')
            }
        }
        GetData()
    }, [])
    return (
        <>
            <Modal isOpen={Open}>
                <div className=' p-20'>
                <button className=" rounded-full bg-red-500 text-white p-1" onClick={()=>setOpen(false)}>X</button>
                    <div className=' rounded-2xl border-b-2 border-t-2 p-16'>
                        <div className=' flex gap-10 items-center justify-between'>
                            <div>
                                <img src={Pizzas} className=' w-72' />
                            </div>
                            <div className=' font-extrabold flex flex-col justify-between'>
                                <h1>{cartData?.name}</h1>
                                <h2>{cartData?.price}</h2>
                            </div>
                            <div className=' flex'>
                                <button onClick={() => {
                                    setCount(count == 0 ? count - 0 : count - 1)
                                    cartData.quantity++
                                }} className=' p-2 bg-red-500 text-white hover:bg-red-400'>-</button>
                                <h4 className=' p-2 bg-slate-300'>{count}</h4>
                                <button onClick={() => {
                                    setCount(count + 1)
                                    cartData.quantity++
                                }} className=' p-2 bg-green-500 text-white hover:bg-green-400'>+</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4 flex flex-col gap-4 items-center'>
                        <h1>Shipping Fees: 8dh</h1>
                        <h1 className=' text-2xl font-bold'>Total Price: <b className=' text-green-400'>{count != 0 ? count * cartData?.price + 8 : 0} </b>DH </h1>
                        <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 gap-5 flex" onClick={() => AddtoCart(cartData)}><FaCartShopping />Add to Cart</button>
                    </div>
                </div>
            </Modal>
            <Header />
            <div className=" flex">
                <div>
                    <SideBar />
                </div>
                <div className=" p-10 flex flex-col gap-16">
                    <div>
                        <div className="flex items-center hover:cursor-pointer">Check Menu <TiThMenu /></div>
                    </div>
                    <div className=" flex flex-row flex-wrap gap-16">
                        {data?.map((meal) => {
                            return <div className=" w-80 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <a href="#">
                                    <img src={Pizzas}></img>
                                </a>
                                <div className="px-5 pb-5">
                                    <a href="#">
                                        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{meal.name}</h5>
                                    </a>
                                    <div className="flex items-center mt-2.5 mb-5">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                        </div>
                                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-3xl font-bold text-gray-900 dark:text-white">{`${meal.price} $`}</span>
                                        <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => {
                                            setCartData({ ...meal, quantity: 0 })
                                            setOpen(true)
                                        }}>Add to cart</a>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>


        </>
    )
}

export default Pizza
