import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';
import Ideas from '../assets/Lights.jpg';
import Turn from '../assets/Turn.jpg';


function Works() {
    return (
        <div>
            <Menu/>
            <div className="bg-slate-300/70 flex justify-start items-center mx-12">
                <h1 className="font-Rubik text-2xl flex">Share your <br/>ideas <br/>with others</h1>
                <img className="w-1/3 m-4 rounded-xl mx-12" src={Ideas} alt="workspace image"></img>
                <h1 className="font-Rubik text-2xl">Share your<br/> ideas</h1>
                <img className=" w-1/3 m-4 rounded-xl"  src={Turn} alt="workspace image"></img>
            </div>
            <div className="flex justify-center bg-slate-300/70 m-12">
                <h1 className="font-Rubik text-2xl flex items-center">This is space for<br/> your works.</h1>
                <img className=" w-1/3 m-4 rounded-xl shadow-xl" src={Workspace} alt="workspace image"></img>
            </div>
        </div>
    )
}

export default Works;
