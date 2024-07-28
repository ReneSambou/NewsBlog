import { Link } from 'react-router-dom';


const Navbar = () => {
    return (  
        <nav className="navbar">
            <Link to="/"><h1>Muse News</h1></Link>
            <div className="links">
            <Link to="/">Home</Link>
            <Link to="/Event">Blogs</Link>
                <Link to="Login" style={{
                    color:"white",
                    backgroundColor: "#257bec",
                    borderRadius: "16px"
                }}>Admin</Link>              
            </div>
        </nav>

    );
}
 
export default Navbar;