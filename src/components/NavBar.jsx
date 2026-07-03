import { Link } from "react-router-dom"

export function NavBar (){
    return (
        <header >
            <div className="navbar">
                <h2 className="webName">Ethereal Luxe</h2>
                <nav className="navigation">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/shop">Shop</Link>
                    <Link className="nav-link" to="/cart">Shopping Cart</Link>
                </nav>
            </div>
        </header>
    )
}