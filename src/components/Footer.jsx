import { FiMail, FiPhone, FiInstagram } from "react-icons/fi";
export function Footer (){
    return (
        <footer>
            <div className="footer-content">
                 
                <div className="about">
                    
                    <div className="about-us-info">
                        <h3 className="about-us-title">Ethereal Luxe</h3>
                        <p className="about-us-description">Curating the finest in minimalist luxury and mordern form for the discerning individual. </p>
                    </div>
                    <div className="contact-section">
                    <div className="abtInfo">
                        <FiMail className="footer-icon" />
                        <p>contact@vibe-haul.com</p>
                    </div>
                    <div className="abtInfo">
                        <FiInstagram className="footer-icon" />
                         <p>@vibehaul</p>   
                    </div>
                     <div className="abtInfo">
                        <FiPhone className="footer-icon" />
                        <p> +91 5253726</p>  
                    </div>
                    </div>
                </div>
                  <div className="support">
                    <h3 className="footer-heading">SUPPORT</h3>

                    <div className="support-links">
                        <a href="#">Shipping & Returns</a>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Ethereal Luxe. All Rights Reserved.</p>
            </div>
               
            
        </footer>
    )
} 