import { useState } from "react";
import ProfilePic from "./assets/logo.png";
import MenuIcon from "./assets/menu.png";
import PhoneIcon from "./assets/phone.png";
import { Link } from "react-router-dom";
import Sidebar from "./Navbar";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="headerCSS">
                <div className="logoCenter">
                    <img
                        className="menuHeader"
                        src={MenuIcon}
                        alt="Menu"
                        onClick={() => setIsOpen(true)}
                        style={{ cursor: "pointer" }}
                    />

                    <Link to="/">
                        <img className="logoHeader" src={ProfilePic} alt="Logo" />
                    </Link>

                    <Link to="/contact">
                        <img className="phoneHeader" src={PhoneIcon} alt="Phone" />
                    </Link>
                </div>
            </div>

            <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
}

export default Header;