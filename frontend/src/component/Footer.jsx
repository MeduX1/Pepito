import { MdEmail } from "react-icons/md"
import {FaLocationDot} from 'react-icons/fa6'
import Header from "./Header"
export default function Footer() {
    return <>

        <section className="bg-black dark:bg-gray-900 mt-6 flex justify-evenly">
            <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md ml-14 ">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-white ml-32">Contact Us</h2>
                <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl ml-32">Provide Us Feedback and Concerns</p>
                <form action="#" className="space-y-8 ml-32">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Your email</label>
                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-96 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-300">Subject</label>
                        <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block mb-2 text-sm font-medium text-white dark:text-gray-400">Your message</label>
                        <textarea id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                    </div>
                    <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 bg-orange-400 hover:bg-orange-700 hover:duration-300">Send message</button>
                </form>
            </div>
            <div className=" flex flex-col mr-96 gap-10 justify-center">
                <div className=" flex flex-col items-center hover:cursor-pointer hover:scale-125 hover:duration-300">
                    <div className=" bg-slate-300 rounded-2xl p-5 text-6xl"><MdEmail /></div>
                    <h1 className=" text-white">Email</h1>
                </div>
                <div className=" flex flex-col items-center hover:cursor-pointer hover:scale-125 hover:duration-300">
                    <div className=" bg-slate-300 rounded-2xl p-5 text-6xl"><MdEmail /></div>
                    <h1 className=" text-white">+212 661-981392</h1>
                </div>
                <div className=" flex flex-col items-center hover:cursor-pointer hover:scale-125 hover:duration-300">
                    <div className=" bg-slate-300 rounded-2xl p-5 text-6xl"><FaLocationDot /></div>
                    <h1 className=" text-white">Hay Ryad En Face Du Grand Hôtel, Ifrane 53000 Maroc</h1>
                </div>
            </div>
        </section>
    </>
}