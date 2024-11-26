import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import ProductCategories from "../components/ProductCategories";
import Product from "../Pages/Product";
import Footer from "../components/Footer";
import TitleCategories from "../components/TitleCategories";
import Promotions from "../components/Promotion";
import ProductCate from "../components/ProductCate";
function Home(){
 return (
    <div>
        
        <Header />
        <Banner/>
        <ProductCategories/>
        <TitleCategories/>
        <Product/>
        <Promotions/>
        <Product/>
        <ProductCate/>
        <Product/>
        <Footer/>
    </div>
 );
}
export default Home;