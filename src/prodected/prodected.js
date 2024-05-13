// import React from 'react';
// import { Navigate } from 'react-router-dom';

// function Protected({ isLogging, children }) {
//     if (isLogging === false) {
//         return <Navigate to="/" />;
//     } else {
//         return children;
//     }
// }

// export default Protected;


import React from 'react';
import { Redirect } from 'react-router-dom';

function Protected({ isLogging, children }) {
    if (!isLogging) {
        return <Redirect to="/" />;
    } else {
        return children;
    }
}

export default Protected;
