import React from "react"
import { Link } from 'react-router-dom';


const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <div className="text-uppercase">
                    <h5>Muse</h5>
                <p>Live one day at a time</p>
                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase">Contact Us</h5>
                <ul className="list-unstyled">
                    <li><Link to="/Login">Login</Link></li>
                    <li><Link to="/Register">Register</Link></li>
                    
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3" style={{color: 'wheat'}}>MUSE© 2020 Copyright:
    </div>

</footer>

export default Footer;