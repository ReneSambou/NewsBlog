import { Link } from 'react-router-dom';


const EventNav = () => {
    return (
        <nav className="event-nav">
            <Link to="/"><h1>Muse News</h1></Link>
            <div className="event-nav-links">
            <Link to="/Event">Blogs</Link>
            <Link to="/login" style={{
                    color:"white",
                    backgroundColor: "#257bec",
                    borderRadius: "16px"
                }}>Admin</Link>  

            </div>
        </nav>
    )
}

export default EventNav;
