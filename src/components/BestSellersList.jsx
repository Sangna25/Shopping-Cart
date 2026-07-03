import { FaRegStar, FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

export function BestSellersList({item}){
     const renderStars =(rating) => {
        const roundedRating = Math.round(rating);
        const stars=[];
        for(let i =1;i<=5;i++) {
            if(i <= roundedRating) {
                stars.push(<FaStar key={i} />)
            } else {
                stars.push(<FaRegStar key={i} />)
            }
        }
        return stars;
    }
    return (
        <Link to={`/product/${item.id}`} style={{textDecoration : "none",color: "inherit",
    display: "block"}}> 
        <div className="bestSellerCard">
            <img className="bestCardImg" src={item.image} alt={item.title} />
            <p className="bestCardTitle" >{item.title}</p>
            <p className="bestCardPrice">${item.price}</p>
            <div className="bestCardRating">{renderStars(item.rating.rate)} ({item.rating.count})</div>
        </div>
        </Link>
    )
}