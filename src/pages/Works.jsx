import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';


function Works() {
    return (
        <div>
            <Menu/>
            <h1>This is space for your work !</h1>
            <img src={Workspace} alt="workspace image"></img>
        </div>
    )
}

export default Works;
