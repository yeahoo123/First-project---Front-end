import React, { Component } from 'react'
import {DataContext} from '../Context'
import "../css/Cart.css"
import {Link} from 'react-router-dom'
import Format from "react-currency-format"
export class Cart extends Component {
    static contextType = DataContext
    componentDidMount(){
        this.context.geTotal()
    }
    render() {
        const {cart, increase, reduction, remove, total} = this.context
        if(cart.length === 0 ){
            return <h2 style={{textAlign: "center"}}>Không có sản phẩm cần thanh toán</h2>
        }else {
            return (
                <>
                    {cart.map(product =>(
                                <div className="cart_box" key={product.product_id}>
                                    <div className="row">
                                        <div className="col-md-4">
                                            <div id="product-main-img">
                                                <div className="product-preview">
                                                    <img width={"263"} height={"263"} src={`http://localhost/kltn/admin/images/202102/${product.product_image}`} alt={product.product_name} width={"40px"}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-8">
                                            <div className="product-details">
                                            <Link to={`/product/${product.product_id}`}>
                                                <h2 className="product-name">Tên sản phẩm: {product.product_name}</h2>
                                            </Link>    
                                                <div>
                                                    <h3 className="product-price">
                                                        Giá tiền: <Format value={product.product_price * product.count1} displayType={'text'} thousandSeparator={true}></Format> VNĐ   
                                                        </h3>
                                                </div>
                                                <p>{product.product_description}</p>
                                                <ul className="product-links">
                                                <li>Danh mục: <Link to={`/${product.parent_id === 1?"phone":product.parent_id === 2?"laptop":product.parent_id===3?"tablet":product.parent_id===4?"watch":"accessories"}/${product.category_name.toLowerCase()}`}>{product.category_name}</Link></li>
                                                </ul>
                                                <div className="amount">
                                                        <button className="count" onClick={()=>reduction(product.product_id)}>-</button>
                                                        <span className="qty">{product.count1}</span>
                                                        <button className="count" onClick={()=>increase(product.product_id)}>+</button>
                                                </div>
                                                <button className="delete" onClick={()=>remove(product.product_id)}><i className="fa fa-close" /></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="total">
                                <Link to="/payment">Thanh toán  <i className="fa fa-arrow-circle-right" /></Link>
                                <h3>Tổng cộng: <Format value={total} displayType={'text'} thousandSeparator={true}></Format> VNĐ</h3>
                            </div>
                </>
            )
        }
    }
}

export default Cart
