import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';
import Turn from '../assets/Turn.jpg';


function Works() {
    return (
        <div>
            <Menu/>
            <div className="flex justify-center items-center m-24">
                <img className=" w-1/3 rounded-xl mx-4 px-2"  src={Turn} alt="workspace image"></img>
                <img className=" w-1/3 rounded-xl mx-4 px-2" src={Workspace} alt="workspace image"></img>
            </div>
        </div>
    )
}

export default Works;
