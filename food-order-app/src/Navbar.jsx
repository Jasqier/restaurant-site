import { Link } from "react-router-dom";

function Sidebar({ isOpen, setIsOpen }) {
    return (
        <>
            {isOpen && (
                <div
                    className="overlay"
                    onClick={() => setIsOpen(false)}
                />
            )}

            <nav className={`sidebar ${isOpen ? "open" : ""}`}>
                <button onClick={() => setIsOpen(false)}>
                    ✕
                </button>

                <Link to="/" onClick={() => setIsOpen(false)}>
                    Home
                </Link>

                <Link to="/menu" onClick={() => setIsOpen(false)}>
                    Menu
                </Link>

                <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Contact
                </Link>
            </nav>
        </>
    );
}

export default Sidebar;