import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from './Context'
// import Menu from './svg/bars-solid.svg'
// import Close from './svg/times-solid.svg'
// import CartIcon from './svg/shopping-cart-solid.svg'
// import logo from './image/Sơn.png'
import "./css/Header.css"
import Format from "react-currency-format"

class Header extends Component {
    static contextType = DataContext;
    componentDidMount(){
        this.context.geTotal()
    }
    componentDidUpdate(prevProps, prevState){
        const {cart} = this.context

        const data = cart.length
        if(data === prevProps.data){
            this.context.geTotal()
        }
    }
    render() {
        // const {mobile} = this.state;
        const {cart, increase, reduction, remove, total, handleChange, searchName, productCategory, newsCategory} = this.context
        const menuMain1 = productCategory.filter(category => category.parent_id===1)
        const menuMain2 = productCategory.filter(category => category.parent_id===2)
        const menuMain3 = productCategory.filter(category => category.parent_id===3)
        const menuMain4 = productCategory.filter(category => category.parent_id===4)
        const menuMain5 = productCategory.filter(category => category.parent_id===5)
        return (
            
            <header>
				<div id="top-header">
                    <div className="container">
                        <ul className="header-links pull-left">
                            <li><i className="fa fa-phone"></i>0335678089</li>
                            <li><i className="fa fa-envelope-o"></i>lamkimson1998@gmail.com</li>
                            <li><i className="fa fa-map-marker"></i>299/30 Lê Quang Sung</li>
                        </ul>
                        <div className="header-links pull-right">
                            <Link to="history">Xem lịch sử mua hàng</Link>
                        </div>
                    </div>
			    </div>
				<div id="header">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							<div className="header-logo">
								{/* <Link to="/" className="logo">
									<img src={logo} alt="Sơn Shop" width={"170px"}/>
								</Link> */}
							</div>
						</div>
						<div className="col-md-6">
							<div className="header-search">
								<form>
                                    <input  className="input" 
                                            placeholder="Nhập sản phẩm" 
                                            name="searchName" 
                                            onChange={handleChange}
                                     />
                                    <Link 
                                    to={`/search?searchName=${searchName}`}
                                    className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Link>
                                </form>
							</div>
						</div>
						<div className="col-md-3 clearfix">
							<div className="header-ctn">
								<div className="dropdown">
									<Link to="/cart" className="dropdown-toggle" data-toggle="" aria-expanded="true">
										<i className="fa fa-shopping-cart"></i>
										<span>Giỏ hàng</span>
										<div className="qty">{cart.length}</div>
									</Link>
                                    <div className="cart-dropdown">
                                        <div className="cart-list">
                                            
                                            {
                                                cart.map(item => (
                                                    <div className="product-widget">
                                                        <div className="product-img">
                                                            <img src={`http://localhost/kltn/admin/images/202102/${item.product_image}`} alt={item.product_name} />
                                                        </div>
                                                        <div className="product-body">
                                                            <h3 className="product-name"><Link to={`product/${item.product_id}`}>{item.product_name}</Link>
                                                                
                                                            </h3>
                                                            <h4 className="product-price">
                                                                <span className="qty">x{item.count1}</span>
                                                                <Format value={item.product_price * item.count1} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                                            </h4>
                                                            <div className="amount">
                                                                    <button className="count" onClick={()=>reduction(item.product_id)}>-</button>
                                                                    <button className="count" onClick={()=>increase(item.product_id)}>+</button>
                                                            </div>
                                                        </div>
                                                        <button className="delete" onClick={()=>remove(item.product_id)}><i className="fa fa-close" /></button>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                        <div className="cart-summary">
                                        <h5>Tổng cộng:  <Format value={total} displayType={'text'} thousandSeparator={true}></Format> VNĐ</h5>
                                        </div>
                                        <div className="cart-btns">
                                            <Link to="/cart">Xem giỏ hàng</Link>
                                            <Link to="/payment">Thanh toán  <i className="fa fa-arrow-circle-right" /></Link>
                                        </div>
                                    </div>
								</div>
							</div>
							{/* <div className="menu" onClick={this.menuToggle}>
                    					<img src={Menu} alt="" width="30"/>
                			</div> */}
						</div>
					</div>
				</div>
			</div>
                <nav id="navigation" >
                    <div className="container">
                        <div id="responsive-nav">
                            <ul className="main-nav nav navbar-nav">
                                <li>
                                    <Link to="/">Trang chủ</Link>
                                </li>
                                <li>
                                    <Link to="/product">Sản phẩm</Link>
                                </li>

                                    

                                <li className="menuOnHover"> 
                                    <Link to="/phone">Điện thoại</Link>
                                    <ul  className="menuHover">
                                        {
                                            menuMain1.map(category=><li><Link to={`/phone/${category.category_name.toLowerCase()}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li  className="menuOnHover">
                                    <Link to="/laptop">Laptop</Link>
                                    <ul  className="menuHover">
                                        {
                                            menuMain2.map(category=><li><Link to={`/laptop/${category.category_name.toLowerCase()}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li className="menuOnHover">
                                    <Link to="/tablet">Máy tính bảng</Link>
                                    <ul  className="menuHover">
                                        {
                                            menuMain3.map(category=><li><Link to={`/tablet/${category.category_name.toLowerCase()}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li className="menuOnHover">
                                    <Link to="/watch">Đồng hồ thông minh</Link>
                                    <ul className="menuHover">
                                        {
                                            menuMain4.map(category=><li><Link to={`/watch/${category.category_name.toLowerCase()}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li className="menuOnHover">
                                    <Link to="/accessories">Phụ kiện</Link>
                                    <ul  className="menuHover">
                                        {
                                            menuMain5.map(category=><li><Link to={`/accessories/${category.category_name.toLowerCase()}`}>{category.category_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                
                                <li className="menuOnHover">
                                    <Link to="/news">Tin tức</Link>
                                    <ul  className="menuHover">
                                        {
                                            newsCategory.map(category=><li><Link to={`/newscategory/${category.news_ctgr_name.toLowerCase()}`}>{category.news_ctgr_name}</Link></li>)
                                        }
                                    </ul>
                                </li>
                                <li>
                                    <Link to="/about">Về tôi</Link>
                                </li>
                            </ul>
                        </div>
                        {/* <div id="responsive-nav" className="mobile active">
                            <ul className="main-nav nav navbar-nav">
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
                        </div> */}
                    </div>
                </nav>
            </header>
        )
    }
}

export default Header