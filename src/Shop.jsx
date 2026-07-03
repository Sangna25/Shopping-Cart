import { fetchProducts } from "./api/fakeStore"
import { useEffect, useState } from "react";
import { BestSellersList } from "./components/BestSellersList";

export function Shop (){
    const [allProducts, setAllProducts]= useState([]);
    const[isLoading, setisLoading] = useState(true);
    const[filteredList, setFilteredList] =useState([]);
    const[searchQuery, setSearchQuery] = useState('');
    const[selectedCategory, setSelectedCategory] = useState('All');
    const [sortBy, setSortBy] = useState("");
    const categories = ['All',...new Set(allProducts.map(p=>p.category))];
    useEffect(()=>{
        fetchData()
    },[])
     useEffect(()=>{
        filterAndSort();
     },[allProducts,searchQuery,selectedCategory,sortBy]);
    
    const fetchData = async() =>{
        try{
            const data = await fetchProducts();
            console.log(data);
            setAllProducts(data);
        } catch(err) {
            console.error(err);
        } finally {
            setisLoading(false);
        }
        
    }

    const filterAndSort = () => {
        let filtered = allProducts.filter ((product) => {
            return(
                 product.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
           (selectedCategory === 'All' || product.category === selectedCategory)
            ) 
          });

          if(sortBy){
             filtered.sort((a,b)=>{
                switch(sortBy){
                    case "price" :
                        return a.price - b.price;
                    case "priceDesc" :
                        return b.price - a.price;
                    case "rating" :
                        return b.rating.rate - a.rating.rate;         
                    case "popular" :
                        return b.rating.count - a.rating.count;
                    default :
                    return 0;
                }
              })
          }
        setFilteredList(filtered);
    }
 
    return (
        <div className="shop">
            <div className="shopNavBar">
                <div className="categories">
                    {categories.map((category, key) => {
                        return(
                             <div className={selectedCategory === category ? "category-card active": "category-card"} key={key} onClick={() => setSelectedCategory(category)}> 
                              <img src={`/assets/${category}.png`} alt={category} className="category-image"></img>
                               <p className="category-value">{category.toUpperCase()}</p>
                            </div>
                        )
                       
                    })}
                </div>
                <div className="sorting-container">
                    <label htmlFor="sort-select">Sort By :</label>
                    <select id="sort-select" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                        <option value="">Featured</option>
                        <option value="price">Price(Low to High)</option>
                        <option value="priceDesc">Price(High to Low)</option>
                        <option value="rating">Top Rated</option>
                        <option value="popular">Popularity</option>
                    </select>
                </div>

                <div className="search-container">
                    <input type="text" className="search-input" placeholder="search products..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
            </div>

             {isLoading ? (
            <div className="loading">
                <div className="spinner"></div>
                <p>Loading products...</p>
            </div>
        ) : filteredList.length === 0 ? (
            <div className="no-results">No products found.</div>
        ) : (
            <div className="product-display-container">
                <div className="product-grid">
                    {filteredList.map((product) => (
                        <BestSellersList key={product.id} item={product}></BestSellersList>
                    ))}
                </div>
            </div>
        )}
    </div>
)}