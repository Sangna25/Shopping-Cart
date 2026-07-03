import { useEffect,useState } from "react"
import data from './data/imgCarousel.json'
import { ImageCarousel} from "./components/ImageCarousel"
import { fetchProducts } from "./api/fakeStore";
import { BestSellersList } from "./components/BestSellersList";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export function Home (){
    const [bestSeller, setBestSeller] = useState([]);
    const[isLoading, setisLoading] = useState(true);
    
    useEffect(()=>{
        fetchData();
    },[])
    const fetchData = async() =>{
        try {
            const data = await fetchProducts();
            const highestRating =[...data].sort((a,b)=>b.rating.rate -a.rating.rate).slice(0,6);
            setBestSeller(highestRating);
        } catch(err) {
            console.error("Error fetching the products :",err)
        } finally{
            setisLoading(false)
        }

    }
const slides = data.slides;
const navigate = useNavigate()
    return (
        <div className="home">
            
            <div className="img-carousel-container">
                <div className="img-caraousel-info">
                    <h2 className="img-carousel-title">Quiet-Luxury.</h2>
                    <h2 className="img-carousel-title">Mordern-Form.</h2>
                    <p className="img-carousel-description">Experience the intersection of high fashion and functional minimalism. Our seasonal curation features essential pieces designed for the discerning individual.</p>
                    <button className="showNowBtn" onClick={() => navigate("/shop")}>Show Now</button>
                </div>
            
             <div className="img-caraousel">
                 <ImageCarousel data={slides}></ImageCarousel>
              </div> 
            </div>
         {isLoading ? <div className="loading">
            <div className="spinner" ></div>
            <p>Loading Products...</p>
         </div> : 
         <div className="bestSellerInfo">
            <h2>Our BestSeller</h2>
            <p>Discover what everyone's loving right now.</p>
           <div className="bestSeller">
            
            {
                bestSeller.map((item, key) => (
                    <BestSellersList item={item} key={key} />
                ))

            }
            </div>
            <button className="viewAllBtn" onClick={() => navigate("/shop")}>View All <FaArrowRight /> </button>
            </div>}
           <div className="subscribe">
                    <h2>Stay Updated</h2>
                    <p>
                        Subscribe for exclusive access to new collections, private events, and seasonal curations. 
                    </p>
                    <form className="emailInfo">
                     <span>📧</span>
                    <input className="emailInp" type="email" placeholder="name@example.com" ></input>
                    <button className="subscribeBtn">Join</button>
                    </form>
                 </div>
                 </div>
              
        
    )
}