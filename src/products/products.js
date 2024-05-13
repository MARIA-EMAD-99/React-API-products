

//withour readux

// import React, { useEffect, useState } from 'react';
// //import axios from 'axios';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';
// import axiosInstance from './../axios-config/axiosinstance';
// import { useSelector, useDispatch } from 'react-redux';
// import productAction from './../store/actionthunk';

// const Products = () => {
// const lodder =useSelector((state)=>state.isLoading)

//   // State to store the fetched products
//   // const [products, setProducts] = useState([]);

//   useEffect(() => {
//     // axiosInstance
//     //   .get('products')
//     //   .then((res) => {
//     //     // Update the products state with the fetched data
//     //     setProducts(res.data);
//     //   })
//     //   .catch((err) => {
//     //     console.error('Error fetching products:', err);
//     //   });




//   return (
//     <div>
//         <h1>Products</h1>
    
//          <div className="row row-cols-2 row-cols-md-2 g-4">
//          {products.map((product) => (
//               <div className="col" key={product.id}>
//                 <div className="card">
//                   <img src={product.image} className="card-img-top" alt={product.title} style={{ width: "50%", height: "250px" }} />
//                   <div className="card-body">
//                     <h5 className="card-title">{product.title}</h5>
//                     <p className="card-text">{product.description}</p>
//                     <Link to={`/details/${product.id}`}> Details </Link>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//   );
// };

// export default Products;













import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import productAction from './../store/actionthunk';

const Products = () => {
  const products = useSelector((state) => state.products.products);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productAction());
  }, [dispatch,products]);
console.log(products)
  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Products</h1>
      <div className="row row-cols-2 row-cols-md-2 g-4">
        {products.map((product) => (
          <div className="col" key={product.id}>
            <div className="card">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.title}
                style={{ width: '50%', height: '250px' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <Link to={`/details/${product.id}`}> Details </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
