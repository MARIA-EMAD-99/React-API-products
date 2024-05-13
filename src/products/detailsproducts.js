
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import axiosInstance from './../axios-config/axiosinstance';


 const Detailsproducts =(props)=>{ 
    const params = useParams()
  
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axiosInstance
          .get(`products/${params.id}`)
          .then((res) => {
            // Update the products state with the fetched data
            setProducts(res.data);
          })
          .catch((err) => {
            console.error('Error fetching products:', err);
          });
      }, []);
    

    return(
        <div>
            {/* (anthor way )<h1>  Details products {props.match.params.id}</h1>
            <h1>  Details products {params.id}</h1> */}

            <h2>{products.title}</h2>
            <img src={products.image} className="card-img-top" alt={products.title} style={{width:"50%",height:"250px"}} />
            
        </div>
    )
}

export default Detailsproducts