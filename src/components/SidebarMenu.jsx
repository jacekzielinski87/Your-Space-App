
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPerson, faNewspaper, faUser, faBars} from '@fortawesome/free-solid-svg-icons';


function SidebarMenu() {

    return (
        <>
        <div>
            <FontAwesomeIcon icon={faBars} className='py-6 px-4 text-3xl text-slate-100 cursor-pointer'/>
        </div>
        < div className='bg-slate-950 text-slate-100 py-24 w-32 h-60 absolute top-0 hidden'>
            <div className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faUser}/>
            <a href='#' className='flex items-center justify-center'>Profile</a>
            </div>
            <div className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faPerson} />
            <a href='#' className='flex items-center justify-center'>People</a>
            </div>
            <div className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faNewspaper} />
            <a href='#' className='flex items-center justify-center'>Articles</a>
            </div>
            <div className='flex p-3 justify-center items-center gap-3 relative bottom-20'>
            <FontAwesomeIcon icon={faHouse} />
            <a href='#' className='flex items-center justify-center'>Home</a>
            <div/>
            </div>
        </div>
        </>
    )
}

export default SidebarMenu

