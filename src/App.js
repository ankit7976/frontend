import React from "react";
import {BrowserRouter as Router , Route,Routes} from 'react-router-dom'
import Header from "./components/MainHeader";
import Home from "./containers/HomePage";
import ProductListPage from "./containers/ProductListPage";



function App() {
  return (
    <div className="App">
        <Router>
        <React.Fragment>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/:slug"  element={<ProductListPage />} />
            </Routes>
            </React.Fragment>
        </Router>




    </div>
  );
}

export default App;
