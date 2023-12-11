import { Link } from "react-router-dom";



const Header = () => {
    return (
        <div className="border-2 border-red-700 text-center">
            <Link className="mr-5" to="/">Home</Link>
            <Link className="ml-5" to="/login">Login</Link>
        </div>
    );
};

export default Header;