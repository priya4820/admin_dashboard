import { Link } from "react-router-dom";

function Perent(props){
    return(
        <div>
            <h2>
                Home Page
            </h2>
            <h3>
                <Link to="/Child">
                    Profile
                </Link>
                </h3>
            
        </div>
    );
}
export default Perent;