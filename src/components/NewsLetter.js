import React, { Component } from 'react'
import {Link} from "react-router-dom"
class NewsLetter extends Component {
    render() {
        return (
            <div>
                <div id="newsletter" className="section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="newsletter">
                                    <p>Đăng ký để nhận <strong>TIN GIẢM GIÁ</strong></p>
                                    <form>
                                        <input className="input" type="email" placeholder="Điền email của bạn"/>
                                        <button className="newsletter-btn"><i className="fa fa-envelope"></i> Đăng ký</button>
                                    </form>
                                    <ul className="newsletter-follow">
                                        <li>
                                            <Link to="/"><i className="fa fa-facebook"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-twitter"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-instagram"></i></Link>
                                        </li>
                                        <li>
                                            <Link to="/"><i className="fa fa-pinterest"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsLetter
