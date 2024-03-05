
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { WishlistProvider } from './components/WishlistContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<WishlistProvider><RouterProvider router={routes} /></WishlistProvider>)

