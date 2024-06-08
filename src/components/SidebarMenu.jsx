
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse, faPerson, faNewspaper, faUpload} from '@fortawesome/free-solid-svg-icons';


function SidebarMenu() {
    return (
        <>
        <div className='bg-slate-950 text-slate-100 p-4 w-40 h-50'>
            <div className='flex p-2 justify-center items-center gap-3'>
            <FontAwesomeIcon icon={faHouse}/>
            <p>Home</p>
            </div>
            <div className='flex p-2 justify-center items-center gap-3'>
            <FontAwesomeIcon icon={faPerson} />
            <p className='flex items-center justify-center'>People</p>
            </div>
            <div className='flex p-2 justify-center items-center gap-3'>
            <FontAwesomeIcon icon={faNewspaper} />
            <p className='flex items-center justify-center'>Articles</p>
            </div>
            </div>
        <div className='absolute right-10 top-0 bg-slate-200 text-slate-900 text-xl font-medium'>
        <button className='p-4'>Upload</button>
        <FontAwesomeIcon icon={faUpload} className='pr-6'/>
        </div>
        </>
    )
}

export default SidebarMenu

