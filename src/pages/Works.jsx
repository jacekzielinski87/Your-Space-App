import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';
import Ideas from '../assets/Lights.jpg';
import Turn from '../assets/Turn.jpg';


function Works() {
    return (
        <div className="m-8">
            <Menu/>
            <div className="bg-slate-300/70 flex justify-center items-center">
                <img className="w-1/3 m-4 rounded-xl mx-12" src={Ideas} alt="workspace image"></img>
                <img className=" w-1/3 m-4 rounded-xl shadow-xl" src={Workspace} alt="workspace image"></img>
            </div>
            <div className="flex justify-center bg-slate-300/70">
                <img className=" w-1/3 m-4 rounded-xl"  src={Turn} alt="workspace image"></img>
            </div>
        </div>
    )
}

export default Works;
