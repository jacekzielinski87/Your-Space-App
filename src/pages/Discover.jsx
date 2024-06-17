import Menu from "../components/Menu"
import Searchbar from "../components/Searchbar.jsx";

function Discover() {

    return (
        <div>
            <Menu/>
            <h1 className="flex justify-center text-4xl font-Rubik p-8 shadow-xl">Odkrywaj twórczość innych autorów</h1>
            <div>
                <Searchbar/>    
            </div>
        </div>
    )
}

export default Discover;
