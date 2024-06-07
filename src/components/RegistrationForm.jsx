import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faPerson} from '@fortawesome/free-solid-svg-icons';

function RegistrationForm() {
    return (
        <div className="bg-[url('src/assets/spaceBg.jpg')] h-screen flex justify-center items-center">
           <form className=" text-slate-500 bg-slate-100 w-1/3 h-1/3 pt-10 grid text-4xl mt-24 rounded-xl font-extra p-14 items-center">
            <FontAwesomeIcon icon={faPerson} />
            <FontAwesomeIcon icon ={faEnvelope}/>
            <FontAwesomeIcon icon={faLock} />
            </form>
            <p className='text-slate-200 text-8xl w-1/2 p-6 text-center font-family-roboto'>CREATE YOUR OWN SPACE</p>
            
        </div>
        
        
    )
}

export default RegistrationForm;
