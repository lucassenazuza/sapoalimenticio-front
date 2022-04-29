import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from "./components/Layout";
import FoodBody from "./components/FoodBody";
import { withRouter } from 'react-router-dom';
    
function AppRoutes() {
    const url_list = [
        {id:"proteins",url_props:"/listprotein",url:"/proteins"},
        {id:"carbohydrate",url_props:"/listcarbo", url:"/carbohydrate"},
        {id:"fat",url_props:"/listfat",url:"/fat"},
        {id:"all",url_props:"/allproducts",url:"/"}
    ]
    return (
        <div>
            <Router>
                <Routes>
                    {url_list.map((item) => (
                        <Route exact path={item.url} key={item.id} element={<Layout>
                            <FoodBody key={item.id} url_item={item.url_props}  />
                        </Layout>} />   
                    ))}
                </Routes>
            </Router>
        </div >
    );
}

export default AppRoutes;
