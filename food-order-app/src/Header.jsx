import ProfilePic from "./assets/logo.png"
import MenuIcon from "./assets/menu.png"
import PhoneIcon from "./assets/phone.png"
import {Link} from "react-router-dom"

function Header(){
    return(
        <div className="headerCSS">
            <div className="logoCenter">
                <img className="menuHeader" src={MenuIcon} alt="Menu"/>
                <Link to="/"><img className="logoHeader" src={ProfilePic} alt="Logo" /></Link>
                <Link to="/contact"><img className="phoneHeader" src={PhoneIcon} alt="Phone" /></Link>
            </div>
        </div>
    );
}

export default Header