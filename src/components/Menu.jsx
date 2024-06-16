
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPeopleGroup, faPen, faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/space-travel.png';


function Menu() {
    
     return (
        <>
        <div className='flex justify-center'>
            <img className='absolute left-20 top-8' src={Logo}></img>
            <ul className=' text-slate-600 text-xl border rounded-full shadow-xl shadow-zinc-900/25 flex justify-center w-1/3 font-serif my-4'>
                <li className='flex justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl mx-4'>
                <FontAwesomeIcon icon={faHouse}/>
                <NavLink to = "/" className='flex items-center justify-center font-Rubik text-2xl'>Home</NavLink>
                </li>
                <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faPeopleGroup} />
                <NavLink to ='/people' className='flex items-center justify-center font-Rubik text-2xl'>Discover</NavLink>
                </li>
                <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faPen} />
                <NavLink to ='/works' className='flex items-center justify-center font-Rubik text-2xl'>Works</NavLink>
                </li>
                <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
                <FontAwesomeIcon icon={faUser} />
                <NavLink to='/profile' className='flex items-center justify-center font-Rubik text-2xl'>Profile</NavLink>
            <div/>
                </li>
            </ul>
            </div>
        </>
    )
}

export default Menu

