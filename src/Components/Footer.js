import React from "react";
import {Link} from "react-router-dom";

const Footer = () => 
<>
    <div className='foter__indent'/>
    <footer className="page-footer fixed-bottom">
        <div className="container text-center ">
            <div className="row">
                <div className="col-md-6 mt-md-0 mt-3">
                    <h5 className="text-uppercase">Что-то</h5>
                    <p>будет</p>
                </div>

                <div className="col-md-6 mb-md-0 mb-3">
                    <ul className="list-unstyled">
                        <li><Link to="/instruction">Инструкция</Link></li>
                        <li><Link to="/advertisment">Реклама</Link></li>
                    </ul>
                </div>
            </div>
        </div>

        <div className="footer-copyright text-center py-3">© 2021 Copyright</div>

    </footer>
</>

export default Footer