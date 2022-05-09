import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Htmlcard from './Htmlcard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <h1>This is my first Dynamic Page🔥🎆🎇 </h1>
    <ul className="Htmlcard">
        <Htmlcard name='Amazing Spider man' link="https://cdn.shopify.com/s/files/1/0747/3829/products/mHP0317_1024x1024.jpeg?v=1571444288"/>
        <Htmlcard name='Batman'link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaNd7O9WAtlwHckDgEp_syvZByN9bgJg2lAQ&usqp=CAU"/>
        <Htmlcard name='Venom' link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGvJkd-Q0LakyTZ9TolE_Ynafc3rYJO_rwZA&usqp=CAU"/>
        <Htmlcard name='Zero' link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm07MQsxwAH4YunEvpJxu0_GhhonBSuITIJw&usqp=CAU"/>
        <Htmlcard name='The Dark Knight' link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIxnfOiZoJg6nkTLAb1tup-YvhNfCOCDyvQ&usqp=CAU"/>
        <Htmlcard name='RRR' link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_rlk9us9cHoj2FFqlyK9tTFyOwYGdkZm4g&usqp=CAU"/>

        </ul>   

  </>
);

