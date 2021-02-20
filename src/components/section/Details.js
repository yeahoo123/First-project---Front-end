import React, { Component } from 'react'
import {DataContext} from '../Context'
import "../css/ProductDetail.css"
import {Link} from 'react-router-dom'
import Format from "react-currency-format"
export class Products extends Component {
    static contextType = DataContext;
    state = {
        product: [

        ]
    }
    getProduct = () => {
        const {products} = this.context
        if(this.props.match.params.id){
            const data = products.filter(item => {
                return item.product_id == this.props.match.params.id
            })
            this.setState({product: data})
        }
    }
    componentDidMount() {
        this.getProduct()
    }
    
    render() {
        const {product} = this.state
        console.log(this.props.match.params.id)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {product.map(item =>(
                            <div className="product_box" key={item.product_id}>
                                <div className="col-md-6">
                                    <div id="product-main-img">
                                        <div className="product-preview">
                                            <img width="263" height="263" src={`http://localhost/kltn/admin/images/202102/${item.product_image}`} alt={item.product_name} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-details">
                                        <h2 className="product-name">{item.product_name}</h2>
                                        <div>
                                            <h3 className="product-price">
                                                <Format value={item.product_price} displayType={'text'} thousandSeparator={true}></Format> VNĐ
                                            </h3>
                                        </div>
                                        <p>Còn lại: {item.product_qty} sản phẩm</p>
                                        <p>{item.product_description}</p>
                                        <div className="add-to-cart">
                                        <button  onClick={()=> this.context.addCart(item.product_id)} className="add-to-cart-btn"><i className="fa fa-shopping-cart" /> Thêm vào giỏ hàng</button>
                                        </div>
                                        <ul className="product-links">
                                        <li>Danh mục: </li>
                                        <li><Link to={`/${item.parent_id === 1?"phone":item.parent_id === 2?"laptop":item.parent_id===3?"tablet":item.parent_id===4?"watch":"accessories"}/${item.category_name.toLowerCase()}`}>{item.category_name}</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div id="product-tab">
                                        <ul className="tab-nav">
                                            <li><Link data-toggle="tab" to="#tab1">Miêu tả</Link></li>
                                            <li><Link data-toggle="tab" to="#tab2">Chi tiết</Link></li>
                                            <li><Link data-toggle="tab" to="#tab3">Đánh giá (3)</Link></li>
                                        </ul>
                                        <div className="tab-content">
                                            <div id="tab1" className="tab-pane fade in active">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p>{item.product_description}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab2" className="tab-pane fade in active">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="tab3" className="tab-pane fade in active">
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default Products
