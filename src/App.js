import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import { isUserLoggedIn } from "./actions";
import { updateCart } from "./actions/cart.action";
import Layout from "./components/Layout";
import Header from "./components/MainHeader";
import CartPage from "./containers/cartPage";
import CheckOut from "./containers/checkout";
import Home from "./containers/HomePage";
import ProductDetailsPage from "./containers/ProductDetailsPage";
import ProductListPage from "./containers/ProductListPage";



function App() {

const auth = useSelector(state => state.auth)
const dispatch = useDispatch();
useEffect(()=>{
  if(!auth.authenticate){
    dispatch(isUserLoggedIn())
  }
},[auth.authenticate]);
useEffect(()=>{
  console.log('update Cart app js')
  dispatch(updateCart())
},[auth.authenticate])

  return (
    <div className="App">
        <Router>
    <Layout>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/cart"  element={<CartPage />} />
                <Route path="/checkout"  element={<CheckOut />} />
                <Route path="/:slug"  element={<ProductListPage />} />
                <Route path="/:productslug/:productId/p" element={<ProductDetailsPage />} />
            </Routes>
            </Layout>
        </Router>




    </div>
  );
}

export default App;
