
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPerson, faNewspaper, faUser, faBars} from '@fortawesome/free-solid-svg-icons';


function SidebarMenu() {

    return (
        <>
        <div className='flex justify-end'>
            <FontAwesomeIcon icon={faBars} className=' text-slate-200 cursor-pointer absolute left-10 top-5 h-10'/>
        </div>
        <ul className='bg-slate-950 text-slate-100 py-24 w-32 h-60 absolute top-0 hidden'>
            <li className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faUser}/>
            <a href='#' className='flex items-center justify-center'>Profile</a>
            </li>
            <li className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faPerson} />
            <a href='#' className='flex items-center justify-center'>People</a>
            </li>
            <li className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faNewspaper} />
            <a href='#' className='flex items-center justify-center'>Articles</a>
            </li>
            <li className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faHouse} />
            <a href='#' className='flex items-center justify-center'>Home</a>
            <div/>
            </li>
        </ul>
        </>
    )
}

export default SidebarMenu

