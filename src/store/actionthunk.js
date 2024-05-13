import axiosInstance from './../axios-config/axiosinstance';

export default function productAction(){
    return(dispatch)=>{
        axiosInstance
        .get('products')
        .then((res) => {
            console.log("API response:", res.data); // Log the entire response data
            dispatch({ type: 'SET_PRODUCT', payload: res.data }) // Assuming products are directly under res.data

        })
        .catch((err) => {
            console.error('Error fetching products:', err);
        });
    }
}




// import axiosInstance from './../axios-config/axiosinstance';

// export default function productAction() {
//     return (dispatch) => {
//         axiosInstance
//         .get('products')
//         .then((res) => {
//             dispatch({type:'SET_PRODUCT', payload: res.data.products});
//         })
//         .catch((err) => {
//             console.error('Error fetching products:', err);
//         });
//     };
// }



