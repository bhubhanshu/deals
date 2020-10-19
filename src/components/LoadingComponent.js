import Loader from 'react-loader-spinner'
import React from 'react';

const Loading = () => {
    return(
        <div id="loader">
            <Loader type="Circles" color="#00BFFF" height={80} width={80}/>
            <p>Loading</p>
        </div>
    );
};

export default Loading;