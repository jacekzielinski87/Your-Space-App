
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPerson, faNewspaper, faUser} from '@fortawesome/free-solid-svg-icons';


function Menu() {

    return (
        <>
        <div className='flex justify-center'>
        <ul className=' text-slate-600 text-xl border rounded-full shadow-xl shadow-zinc-900/25 flex justify-center w-1/3 font-serif'>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faHouse}/>
            <a href='#' className='flex items-center justify-center'>Home</a>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faPerson} />
            <a href='#' className='flex items-center justify-center'>People</a>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faNewspaper} />
            <a href='#' className='flex items-center justify-center'>Articles</a>
            </li>
            <li className='flex p-4 justify-center items-center gap-3  hover:bg-slate-200 rounded hover:rounded-2xl'>
            <FontAwesomeIcon icon={faUser} />
            <a href='#' className='flex items-center justify-center'>Profile</a>
            <div/>
            </li>
        </ul>
        </div>
        </>
    )
}

export default Menu

