import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "./api/fakeStore";
import {
  FaStar,
  FaRegStar,
  FaPlus,
  FaMinus,
  FaRegHeart,
  FaHeart,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "./Contexts/CartContext";
export function ProductCard() {
  const [product, setProduct] = useState(null);
  const [isLoading, setisLoading] = useState(true);

  const [isWishlisted, setIsWishlisted] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, incrementQuantity, decrementQuantity, cartItems } =
    useCart();

  const loadProductData = async () => {
    try {
      const data = await fetchProduct(id);
      console.log(data);
      setProduct(data);
    } catch (err) {
      console.error("Error fetching the product : ", err);
    } finally {
      setisLoading(false);
    }
  };
  useEffect(() => {
    loadProductData();
  }, [id]);
  if (isLoading || !product) {
    return <div>Loading...</div>;
  }

  const cartItem = cartItems.find((item) => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= roundedRating) {
        stars.push(<FaStar key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    return stars;
  };
  return (
    <div className="productCard-container">
      <div className="product-card-header">
        <img
          className="productCardImg"
          src={product.image}
          alt={product.title}
        />
        <div className="addToCart-container">
          <div className="addtoCart-opt">
            <button
              className="addBtn-decr"
              onClick={() => decrementQuantity(product)}
            >
              <FaMinus />
            </button>
            <p className="addBtn-name">Add To Cart ({quantity})</p>
            <button
              className="addBtn-incr"
              onClick={() => incrementQuantity(product)}
            >
              <FaPlus />
            </button>
          </div>
          <div className="xyz">
            <button
              className="wishlist"
              onClick={() => setIsWishlisted((w) => !w)}
            >
              {" "}
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
            <button
              className="buyNowBtn"
              onClick={() => {
                addToCart(product, quantity);
                navigate("/cart");
              }}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="productCard-info">
        <div className="header-info">
          <h2 className="productCard-title">{product.title}</h2>
          <p className="productCard-description">{product.description}</p>
        </div>
        <div className="price-container">
          <p className="productCard-price">Price:</p>
          <p className="productCard-priceValue">${product.price}</p>
        </div>
        <div className="ratings">
          <span className="rating-star">
            {renderStars(product.rating.rate)}
          </span>
          <p className="rating-value">
            ({product.rating.rate} / 5) ({product.rating.count})
          </p>
        </div>
        <div className="product-policy">
          <div className="policy-info">
            <img
              className="policy-logo"
              src="/assets/returnLogo.png"
              alt="return logo"
            />
            <p className="policy-value">Pay on delivery is avaliable</p>
          </div>
          <div className="policy-info">
            <img
              className="policy-logo"
              src="/assets/exchangeLogo.png"
              alt="exchnage-logo"
            />
            <p className="policy-value">
              Hassle Free 5 days return and exchange
            </p>
          </div>
        </div>
        <div className="qualityPolicy-info">
          <div className="quality-info">
            <img
              className="quality-logo"
              src="/assets/originalLogo.png"
              alt="original-product-logo"
            />
            <p className="quality-value">Genuine Product</p>
          </div>
          <div className="quality-info">
            <img
              className="quality-logo"
              src="/assets/quality-logo.png"
              alt="quality-product-logo"
            />
            <p className="quality-value">Quality Checked</p>
          </div>
        </div>
      </div>
    </div>
  );
}