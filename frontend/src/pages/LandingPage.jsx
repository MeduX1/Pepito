import Header from "../component/Header"
import Footer from "../component/Footer"
import { RiCompassDiscoverFill } from 'react-icons/ri'
export default function LandingPage() {
    return <>
        <>
            <Header />
            <div className=" flex flex-col gap-20 pt-10">
                <div className=" pt-52 pl-28 flex justify-between">
                    <div className=" flex flex-col gap-5 font-extrabold ml-28">
                        <div>
                            <div className=" tracking-widest">Delicious Food</div>
                            <div className=" tracking-widest">Wonderful Experience</div>
                            <div className=" tracking-widest">Reasonable Price</div>
                        </div>
                        <div>
                            <button className=" bg-black rounded-2xl p-3 text-white flex items-center gap-4 hover:bg-orange-400 hover:duration-300">Discover<RiCompassDiscoverFill /></button>
                        </div>
                    </div>
                    <div>
                        <img ></img>
                    </div>
                </div>
                <hr className=" h-5 bg-black"></hr>
                <div className="pt-52 pl-28 flex justify-between">
                    <div>
                        <img></img>
                    </div>
                    <div className=" flex flex-col gap-5 font-extrabold mr-28">
                        <div>
                            <div className=" tracking-widest">Delicious Food</div>
                            <div className=" tracking-widest">Wonderful Experience</div>
                            <div className=" tracking-widest">Reasonable Price</div>
                        </div>
                        <div>
                            <button className=" bg-black rounded-2xl p-3 text-white flex items-center gap-4 hover:bg-orange-400 hover:duration-300">Discover<RiCompassDiscoverFill /></button>
                        </div>
                    </div>
                </div>
                <div> <Footer /></div>
           
            </div>
        </>
    </>
}