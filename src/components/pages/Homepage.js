import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/Product.css'
import Format from "react-currency-format"
import Slider from "react-slick";
import "../css/Homepage.css"
export class Homepage extends Component {
    static contextType = DataContext
    render() {
        const {products} = this.context
        const hotProducts = products.filter(product=>{
            return product.product_isHot===1
        })
        const homeProductsDell = products.filter(product=>{
            return product.product_isHome===1&&product.category_id===26
        })
        const apple = products.filter(product=>{
            return product.category_id===8 ||  product.category_id===6
        })
        console.log(apple)
        const homeProductApple = apple.filter(product =>{
            return product.product_isHome===1
        })
  
        const homeProductsSamsung = products.filter(product=>{
            return product.product_isHome===1&&product.category_id===7
        })      
        console.log(homeProductsSamsung)
        const settings = {
            autoplay: true,
            autoplaySpeed: 1500,
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4
          };
        return (
            <div>
                <div className="slide-container">
                    <h2 className="content-title"> Sản phẩm hot</h2>
                    <Slider {...settings}>
                    {
                            hotProducts.map(product => (
                                <div class="col-md-3 col-xs-4" key={product.product_id}>
                                    <div className="product product-hover" >
                                        <div className="product-img">
                                            <Link to={`/product/${product.product_id}`}>
                                                <img width="263" height="263" src={`http://localhost/kltn/admin/images/202102/${product.product_image}`} alt={product.product_name}/>
                                            </Link>
                                        <div className={product.product_isHot===1?"product-label":"hide"} >
                                            <span className="new">Hot</span>
                                        </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Danh mục <Link to={`/${product.parent_id === 1?"phone":product.parent_id === 2?"laptop":product.parent_id===3?"tablet":product.parent_id===4?"watch":"accessories"}/${product.category_name.toLowerCase()}`}>{product.category_name}</Link></p>
                                            <h3 className="product-name">
                                                <Link to={`/product/${product.product_id}`}>
                                                    {product.product_name}
                                                </Link></h3>
                                            <h4 className="product-price">
                                                <Format value={product.product_price} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                            </h4>
                                            <p className="product-category">{product.product_description}</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <button onClick={()=> this.context.addCart(product.product_id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="container new-products">
                    <h2 className="content-title"> Sản phẩm Dell</h2>
                    <div className="row">
                        {
                            homeProductsDell.map(product => (
                                <div class="col-md-3 col-xs-4" key={product.product_id}>
                                    <div className="product" >
                                        <div className="product-img">
                                            <Link to={`/product/${product.product_id}`}>
                                                <img width="263" height="263" src={`http://localhost/kltn/admin/images/202102/${product.product_image}`} alt={product.product_name}/>
                                            </Link>
                                        <div className={product.product_isHot===1?"product-label":"hide"} >
                                            <span className="new">Hot</span>
                                        </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Danh mục <Link to={`/${product.parent_id === 1?"phone":product.parent_id === 2?"laptop":product.parent_id===3?"tablet":product.parent_id===4?"watch":"accessories"}/${product.category_name.toLowerCase()}`}>{product.category_name}</Link></p>
                                            <h3 className="product-name">
                                                <Link to={`/product/${product.product_id}`}>
                                                    {product.product_name}
                                                </Link></h3>
                                            <h4 className="product-price">
                                                <Format value={product.product_price} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                            </h4>
                                            <p className="product-category">{product.product_description}</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <button onClick={()=> this.context.addCart(product.product_id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                        <Link className="btn" to="/laptop/dell">Xem thêm</Link>
                </div>
                <div className="slide-container">
                    <h2 className="content-title"> Sản phẩm Apple</h2>
                    <Slider {...settings}>
                    {
                            homeProductApple.map(product => (
                                <div class="col-md-3 col-xs-4" key={product.product_id}>
                                    <div className="product product-hover" >
                                        <div className="product-img">
                                            <Link to={`/product/${product.product_id}`}>
                                                <img width="263" height="263" src={`http://localhost/kltn/admin/images/202102/${product.product_image}`} alt={product.product_name}/>
                                            </Link>
                                        <div className={product.product_isHot===1?"product-label":"hide"} >
                                            <span className="new">Hot</span>
                                        </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Danh mục <Link to={`/${product.parent_id === 1?"phone":product.parent_id === 2?"laptop":product.parent_id===3?"tablet":product.parent_id===4?"watch":"accessories"}/${product.category_name.toLowerCase()}`}>{product.category_name}</Link></p>
                                            <h3 className="product-name">
                                                <Link to={`/product/${product.product_id}`}>
                                                    {product.product_name}
                                                </Link></h3>
                                            <h4 className="product-price">
                                                <Format value={product.product_price} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                            </h4>
                                            <p className="product-category">{product.product_description}</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <button onClick={()=> this.context.addCart(product.product_id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                    
                </div>
                <div className="slide-container">
                    <h2 className="content-title"> Sản phẩm Samsung</h2>
                    <Slider {...settings}>
                    {
                            homeProductsSamsung.map(product => (
                                <div class="col-md-3 col-xs-4" key={product.product_id}>
                                    <div className="product product-hover" >
                                        <div className="product-img">
                                            <Link to={`/product/${product.product_id}`}>
                                                <img width="263" height="263" src={`http://localhost/kltn/admin/images/202102/${product.product_image}`} alt={product.product_name}/>
                                            </Link>
                                        <div className={product.product_isHot===1?"product-label":"hide"} >
                                            <span className="new">Hot</span>
                                        </div>
                                        </div>
                                        <div className="product-body">
                                            <p className="product-category">Danh mục <Link to={`/${product.parent_id === 1?"phone":product.parent_id === 2?"laptop":product.parent_id===3?"tablet":product.parent_id===4?"watch":"accessories"}/${product.category_name.toLowerCase()}`}>{product.category_name}</Link></p>
                                            <h3 className="product-name">
                                                <Link to={`/product/${product.product_id}`}>
                                                    {product.product_name}
                                                </Link></h3>
                                            <h4 className="product-price">
                                                <Format value={product.product_price} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                            </h4>
                                            <p className="product-category">{product.product_description}</p>
                                        </div>
                                        <div className="add-to-cart">
                                            <button onClick={()=> this.context.addCart(product.product_id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ</button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
    );
  }
}


export default Homepage
