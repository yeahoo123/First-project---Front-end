import React, { Component } from 'react'
import {Link} from 'react-router-dom'
// import Menu from './svg/bars-solid.svg'
// import Close from './svg/times-solid.svg'
// import CartIcon from './svg/shopping-cart-solid.svg'
import "./css/Header.css"
import Iframe  from "react-iframe"
export class Footer extends Component {
    render() {
        return (
            <footer id="footer">
            <div className="section">
                <div className="container">
                <div className="row">
                    <div className="col-md-3 col-xs-6">
                    <div className="footer">
                        <Link to="/" className="logo">
							
						</Link>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                    <div className="footer">
                        <h3 className="footer-title">Danh mục</h3>
                        <ul className="footer-links">
                            <li>
                                <Link to="/">Trang chủ</Link>
                            </li>
                            <li>
                                <Link to="/product">Sản phẩm</Link>
                            </li>
                            <li>
                                <Link to="/news">Tin tức</Link>
                            </li>
                            <li>
                                <Link to="/about">Về tôi</Link>
                            </li>
                        </ul>
                    </div>
                    </div>
                    <div className="clearfix visible-xs" />
                    <div className="col-md-3 col-xs-6">
                    <div className="footer">
                    <h3 className="footer-title">Địa chỉ</h3>
                        <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.780033718584!2d106.64115721462233!3d10.751428992338498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752e885629c537%3A0xefae6162ed28011b!2zMjk5LzMwIEzDqiBRdWFuZyBTdW5nLCBQaMaw4budbmcgNiwgUXXhuq1uIDYsIFRow6BuaCBwaOG7kSBI4buTIENow60gTWluaCwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1607949128912!5m2!1svi!2s" width={"200"} height={"200"} frameborder={"0"} style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></Iframe>
                    </div>
                    </div>
                    <div className="col-md-3 col-xs-6">
                    <div className="footer">
                        <h3 className="footer-title">Liên hệ</h3>
                        <ul className="footer-links">
                            <li><i className="fa fa-phone"></i>0335678089</li>
                            <li><i className="fa fa-envelope-o"></i>lamkimson1998@gmail.com</li>
                            <li><i className="fa fa-facebook"></i>Theo dõi tại:</li>
                            <br/>
                        <Iframe url="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FS%25C6%25A1n-Shop-104367471555196&tabs=timeline&width=200&height=200&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="150" height="150" style={{border:"none",overflow:"hidden"}} scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></Iframe>
                            
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </footer>

        )
    }
}

export default Footer
