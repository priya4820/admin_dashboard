import React from 'react';
import { Link } from 'react-router-dom';


function Child(props){
    return(
        <div>
            <h2>
                Profile Page
            </h2>
            <h3>
                <Link to="/">
                    Home
                </Link>

            </h3>
        </div>
    );
}
export default Child;