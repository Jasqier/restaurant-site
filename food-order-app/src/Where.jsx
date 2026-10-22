
function Where(){
    return(
        <div className="where">
            <h1>Where We At?</h1>
            <iframe 
                title="Mapa dojazdu"
                src="https://www.google.com/maps?q=Poznań&output=embed"
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Poznań</p>
            <p style={{ color: "red" , fontWeight: "bold"}}>To jest wersja demo strony</p>
        </div>
    );
}

export default Where