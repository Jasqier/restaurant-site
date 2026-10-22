
function Where(){
    return(
        <div className="where">
            <h1>Where We At?</h1>
            <iframe 
                title="Mapa dojazdu"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d76676.32037576368!2d17.840738085570433!3d53.089810176674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4703168550668a2b%3A0x19668a36670f64ab!2sOddzia%C5%82%20Dzienny%20Psychiatryczny%20Geriatryczny!5e0!3m2!1spl!2spl!4v1788173796072!5m2!1spl!2spl" 
                width="600" 
                height="450" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
            />
            <p>Toruńska 29, 85-023 Bydgoszcz</p>
        </div>
    );
}

export default Where