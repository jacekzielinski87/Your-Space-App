import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHouse,  } from '@fortawesome/free-solid-svg-icons';





function SidebarMenu() {
    return (
        <div>
            <h2>Discover</h2>
            <FontAwesomeIcon icon={faHouse}/>
            <p>Home</p>
            <p>People</p>
        </div>
    )
}

export default SidebarMenu

