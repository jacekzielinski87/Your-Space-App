import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';
import Ideas from '../assets/Lights.jpg';


function Works() {
    return (
        <div className="bg-zinc-300">
            <Menu/>
            <div className="flex items-start justify-start">
                <h1 className="font-Rubik">This is space for your works !</h1>
                <img className=" w-1/3 m-4 rounded-xl" src={Workspace} alt="workspace image"></img>
            </div>
            <div className="bg-zinc-400 flex justify-end">
                <h1 className="font-Rubik">This is space for your works !</h1>
                <img className="w-1/3 m-4 rounded-xl" src={Ideas} alt="workspace image"></img>
            </div>
        </div>
    )
}

export default Works;
