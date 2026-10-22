import frontPagePhoto from "./assets/frontpagephoto.jpg"
import Menu from "./Menu.jsx"
import {Link} from "react-router-dom"

function Body(){
    return(
        <div className="bodyDiv">
            <div className="frontPagePhoto">
                <img className="photo" src={frontPagePhoto} alt="Photo" />
                <div className="textOnImg">
                    <h1>Local Burgers</h1>
                    <p>
                        Local Burgers is an atmospheric burger joint that prioritizes simplicity, 
                        quality, and a street-food vibe.
                        The spot is renowned for its fresh, perfectly seasoned beef, 
                        house-baked buttery buns, and signature sauces that elevate the flavor of every menu item. 
                        Beyond the classics, you’ll find hearty smash burgers with crispy edges, vegetarian options, 
                        and loaded fries (e.g., with cheddar or bacon). 
                        It’s all rounded off by a relaxed, unpretentious atmosphere—the perfect place 
                        for a quick outing with friends to enjoy a substantial, satisfying cheat meal.
                    </p>
                    <button className="checkNowBtn" onClick={() => {
                        document.getElementById("menu").scrollIntoView({behavior:"smooth"});
                        }}>
                        Check now
                    </button>
                </div>
            </div>

            <div id="menu">
                <Menu/>
            </div>

            <div className="divider3"></div>

            <div className="twoBtn">
                <Link to="/whereweat" className="wwacuBtn">Where We At?</Link>
                <Link to="/contact" className="wwacuBtn">Contact Us</Link>
            </div>
        </div>
    );
}

export default Body