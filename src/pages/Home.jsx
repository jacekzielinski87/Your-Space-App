import SidebarMenu from "../components/SidebarMenu"
import Space from '../assets/yourSpaceBoxx.jpg';


function Home() {
    return (
        <>
        <div className="bg-slate-900 h-full">
        <div>
            <SidebarMenu/>
        </div>
        <div className="flex justify-center">
            <div className="bg-slate-100">
                <img className="m-2 rounded-xl w-2/4" src={Space}></img>
                <p className="font-Dosis font-medium text-2xl text-slate-700">Your space is place where<br/> you can show your work to the whole world ! </p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="">
                <img className="m-2 rounded-xl w-2/4" src={Space}></img>
                <p className="font-Dosis font-medium text-2xl text-slate-100">Your space is place where<br/> you can show your work to the whole world ! </p>
            </div>
        </div>
        <div className="flex justify-center">
            <div className="">
                <img className="m-2 rounded-xl w-2/4" src={Space}></img>
                <p className="font-Dosis font-medium text-2xl text-slate-100">Your space is place where<br/> you can show your work to the whole world ! </p>
            </div>
        </div>
        </div>
        </>
    )
}

export default Home
