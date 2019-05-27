import React from 'react';
import HeaderBig from "./headerBig/headerBig";
import HeaderSmall from './headerSmall/headerSmall';
import Products from './products/products';
import HeaderSmall2 from "./headerSmall2/headerSmall2";
import Products2 from "./products2/products2";

const container = () => (
    <div class="container">
        <HeaderBig />
        <HeaderSmall />
        <Products />
        <HeaderSmall2 />
        <Products2 />

    </div>
)

export default container;