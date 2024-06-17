

import Menu from "../components/Menu"
import Workspace from '../assets/Workspace.jpg';
import Turn from '../assets/Turn.jpg';


function Works() {
    return (
        <>
        <div>
            <Menu/>
            <div>
            <ul className='flex justify-evenly m-6 p-4 cursor-pointer font-Rubik '>
                <li className='flex justify-center hover:bg-slate-200 rounded hover:rounded-xl text-2xl'>Kategorie</li>
                <li className='flex justify-center  hover:bg-slate-200 rounded hover:rounded-xl text-2xl'>Opowiadania</li>
                <li className='flex justify-center  hover:bg-slate-200 rounded hover:rounded-xl text-2xl'>Wiersze</li>
                <li className='flex justify-center  hover:bg-slate-200 rounded hover:rounded-xl text-2xl'>Nowele</li>
            </ul>
        </div>
            <div className="flex justify-center items-center m-6">
                <img className=" w-1/3 rounded-xl mx-4 px-2"  src={Turn} alt="workspace image"></img>
                <img className=" w-1/3 rounded-xl mx-4 px-2" src={Workspace} alt="workspace image"></img>
            </div>
        </div>
        
        </>
    )
}

export default Works;
