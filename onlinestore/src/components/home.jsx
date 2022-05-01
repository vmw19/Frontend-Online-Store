
import "./home.css";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        
    <div className="home">
        <h1>Welcome to Shoe City</h1>
        <h2>Just buy the shoes</h2>
    </div>

    <div>
        <Link className = "btn=btn-lg btn-primary" to ="/catalog">Check out amazing catalog!</Link>
    </div>
    </div>
    );
};

export default Home;

