import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import { isUserLoggedIn } from "./actions";
import Header from "./components/MainHeader";
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
})

  return (
    <div className="App">
        <Router>
    
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:slug"  element={<ProductListPage />} />
                <Route path="/:productslug/:productId/p" element={<ProductDetailsPage />} />
            </Routes>
         
        </Router>




    </div>
  );
}

export default App;
