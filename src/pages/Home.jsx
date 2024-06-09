import SidebarMenu from "../components/SidebarMenu"
import Space from '../assets/yourSpaceBox.jpg';


function Home() {
    return (
        <>
        <div>
        <div>
            <SidebarMenu/>
        </div>
        <div className="bg-stone-950 h-screen">
            <div className="flex justify-center items-center p-16">
            <p className="font-Dosis font-bold text-5xl text-slate-100 absolute p-12">Your space is place where<br/> you can show your work to the whole world ! </p>
        </div>
        <div className="flex justify-center py-4 opacity-80">
            <img className="m-2 rounded-xl w-2/4" src={Space}></img>
        </div>
        </div>
        </div>
        </>
    )
}

export default Home
