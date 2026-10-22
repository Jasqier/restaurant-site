import menuPhoto from "./assets/menuPhoto.jpg"

function Menu(){
    return(
        <div className="menuPhoto">
          
            
            <div className="menuTextOnImg">
                <div>
                    <h1 className="bodyMenu">Menu</h1>
                </div>
                <div className="divider1"/>

                <div className="gridContainer">

                    <div>
                        Appetizers
                        <div className="divider2"></div>

                        <h2>Caesar Salad</h2>
                        <p>Romaine lettuce, croutons, Parmesan cheese, olive oil, lemon juice, garlic, anchovies</p>

                        <h2>Steak Tartare</h2>
                        <p>Minced steak, capers, parmesan cheese, olive oil, crostini</p>

                        <h2>Shrimp Coctail</h2>
                        <p>Prawns, horseradish cocktail sauce, lemon</p>
                        
                        <h2>Crispy Fried Calamari</h2>
                        <p>Squid rings, lemon wedges, marinara sauce, garlic</p>
                    </div>


                    <div>
                        Main Dish
                        <div className="divider2"></div>

                        <h2>The Classic House Cheeseburger</h2>
                        <p>Beef patty, cheddar cheese, iceberg lettuce, tomato, pickles, signature house burger sauce, brioche bun</p>
                        
                        <h2>The Smoky Bacon & BBQ</h2>
                        <p>Smoked bacon, aged cheddar cheese, onion rings, pickled jalapenos, BBQ sauce</p>
                        
                        <h2>Nashville Hot Fried Chicken Sandwich</h2>
                        <p>Fried chicken, cayenne chill oil, coleslaw, pickles, sauce</p>

                        <h2>Crispy Buffalo Chicken Burger</h2>
                        <p>Fried chicken, buffalo sauce, ranch, blue cheese, pickles</p>

                        <h2>The Ultimate Smash Plant Burger</h2>
                        <p>Mushroom/black bean patty, cheddar cheese, avocado mash, lettuce, tomato, vegan herb mayo</p>
                    </div>


                    <div>
                        Desserts
                        <div className="divider2"></div>

                        <h2>The Warm Skillet Cookie</h2>
                        <p>Chocolate chip cookie, vanilla ice cream, hot fudge</p>
                    
                        <h2>Warm Double Chocolate Brownie Sundae</h2>
                        <p>Dark chocolate brownie, salted caramel sauce, vanilla soft serve, toasted pecans</p>

                        <h2>Cinammon Sugar Churro Bites</h2>
                        <p>Fried bite-sized churros, cinammon sugar, durce de leche, chocolate genache sauce</p>
                    </div>


                    <div>
                        Drinks
                        <div className="divider2"></div>

                        <h2>Water</h2>
                        <p>Carbonated / Mineral</p>

                        <h2>Soft Drinks</h2>
                        <p>Coca-cola / Fanta / Sprite / Schweppes</p>

                        <h2>Coffee</h2>
                        <p>Americano / cappucino / latte / espresso / doppio</p>
                        
                        <h2>Beer</h2>
                        <p>Alcohol 4,5% / Non-alcohol 0,0%</p>

                        <h2>Wine</h2>
                        <p>White / rose / red</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu