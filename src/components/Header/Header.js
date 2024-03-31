import { CiSearch } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { FaUser } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import "./index.css"
const Header=()=>{
    return (
        <div>
            <div className="headerSection">
            <p className="heading">Book my show</p>
            <div className="icons">
            <CiSearch/>
            <FcLike/>
            <FaUser/>
            </div>
            </div>
            <div className="locationSection">
                <CiLocationOn/>
                <p>Mumbai, India &lt;</p>
            </div>
            <ul className="headerList">
                
                <li>Live shows</li>
                <li> Streams</li>
                <li> Movies</li>
                <li>Plays</li>
                <li>Events</li>
                <li>Sports</li>
                <li>Activities</li>
                
            </ul>

        </div>
    )
}
export default Header