
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPeopleGroup, faPen, faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/space-travel.png';


function Menu() {
    
     return (
        <>
        <div className='flex justify-center'>
            <img className='absolute left-20 top-4' src={Logo}></img>
            <ul className=' text-slate-700 text-xl border rounded-full shadow-xl shadow-zinc-900/25 flex justify-center space-x-10 w-2/2 p-4 m-4'>
                <li className='flex justify-center items-center gap-2  hover:bg-slate-200 rounded hover:rounded-xl mx-4'>
                <FontAwesomeIcon icon={faHouse}/>
                <NavLink to = "/" className='flex justify-center items-center font-Rubik text-2xl'>Strona główna</NavLink>
                </li>
                <li className=' gap-4 flex justify-center items-center hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <NavLink to ='/discover' className='flex items-center justify-center font-Rubik text-2xl'>Odkrywaj</NavLink>
                </li>
                <li className=' gap-4 flex justify-center items-center hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faPen} />
                <NavLink to ='/works' className='flex items-center justify-center font-Rubik text-2xl'>Prace</NavLink>
                </li>
                <li className=' gap-4 flex justify-center items-center hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faUser} />
                <NavLink to='/profile' className='flex items-center justify-center font-Rubik text-2xl'>Profil</NavLink>
            <div/>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Menu

