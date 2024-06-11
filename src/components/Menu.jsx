
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPerson, faPen, faUser} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';


function Menu() {
    
     return (
        <>
        <div className='flex justify-center'>
        <ul className=' text-slate-600 text-xl border rounded-full shadow-xl shadow-zinc-900/25 flex justify-center w-1/3 font-serif'>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faHouse}/>
            <NavLink to = "/" className='flex items-center justify-center'>Home</NavLink>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faPerson} />
            <NavLink to ='/people' className='flex items-center justify-center'>People</NavLink>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faPen} />
            <NavLink to ='/works' className='flex items-center justify-center'>Works</NavLink>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faUser} />
            <NavLink to='/profile' className='flex items-center justify-center'>Profile</NavLink>
            <div/>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Menu

