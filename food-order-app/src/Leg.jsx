import {Link} from "react-router-dom"

function Leg(){
    return(
        <div>
            <div className="bottom">
                <div className="legGrid">
                    <Link to="/whereweat">Where We At?</Link>
                    <Link to="/contact" >Contact</Link>
                </div>
                <p className="copyright">Jan Tadrowski &copy;</p>
            </div>
        </div>
    );
}

export default Leg