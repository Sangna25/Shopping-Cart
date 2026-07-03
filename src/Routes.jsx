import App from "./App";

import { Cart } from "./Cart";
import { Shop } from "./Shop";
import { ErrorPage } from "./ErrorPage";

import { Home } from "./Home";
import { ProductCard } from "./ProductCard";
const Routes = [
    {
        path : '/',
        element: <App />,
        errorElement : <ErrorPage />,
        children : [
            {
                index : true ,
                element: <Home />
            },
            {
                path : "shop",
                element: <Shop />,
            },
            {
                path : "cart",
                element: <Cart />

            },{
                path :"product/:id",
                element:<ProductCard />
            }
        ]
    },
    
]

export default Routes;