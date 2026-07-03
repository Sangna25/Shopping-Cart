import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
export function Footer (){
    return (
        <footer>
            <div className="footer-content">
                 
                <div className="about">
                    <h2>About</h2>
                    <div className="about-us-info">
                        <h3 className="about-us-title">Ethereal Luxe</h3>
                        <p className="about-us-description">Curating the finest in minimalist luxury and mordern form for the discerning individual. </p>
                    </div>
                    <div className="abtInfo">
                        <FiMail className="footer-icon" />
                        <p>Email : contact@vibe-haul.com</p>
                    </div>
                    <div className="abtInfo">
                        <FiInstagram className="footer-icon" />
                         <p>Follow us on: @vibehaul</p>   
                    </div>
                     <div className="abtInfo">
                        <FiPhone className="footer-icon" />
                        <p>Contact On: +91 5253726</p>  
                    </div>
                </div>
               
            </div>
        </footer>
    )
} 