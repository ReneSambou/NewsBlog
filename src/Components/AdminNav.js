import { Link } from 'react-router-dom';


const AdminNav = () => {
    return (
        <nav className="event-nav">
            <Link to="/"><h1>Muse News</h1></Link>
            <div className="event-nav-links">
            <Link to="/AdminEvent">Blogs</Link>
                <Link to="/AddEvent" style={{
                    color: 'white', 
                    backgroundColor: '#257bec',
                    borderRadius:'8px'
                }}>New Blog</Link>

            </div>
        </nav>
    )
}

export default AdminNav;
