
function Footer () {

    return(

        <div className="footer-container">

            <footer>
            
            <div className="footer-links-container">

             <div className="footer-logo"> 
                <img src="/logo.png" alt="Logo.png" width="60px" />
                <h3>KELDEV</h3>
                <h4 >0935-869-3624</h4>
             </div>

             <div className="footer-links">

                    <label htmlFor="">Navigation</label>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Resume</a></li>
                    <li><a href="#">Contacts</a></li>

             </div>
                
                  <div className="footer-links">

                    <label htmlFor="">Socials</label>
                    <li><a href="#"><img src="fb.png" alt="telegram" height="25"/> &ensp; Facebook </a></li>
                    <li><a href="#"><img src="ig.png" alt="telegram" height="25"/> &ensp; Instagram </a></li>
                    <li><a href="#"><img src="email.png" alt="telegram" height="25"/> &ensp; Email </a></li>
                    <li><a href="#"><img src="tg.png" alt="telegram" height="25"/>  &ensp; Telegram </a></li>
       

             </div>
             </div>

             <div className="footer-author">
                
                <h5> Created by Michael Z. Sabino</h5>
             </div>

            </footer>
            
        </div>
        

    )
}

export default Footer;