import React, { Component } from 'react'
import {DataContext} from '../Context'
import "../css/ProductDetail.css"
import {Link} from 'react-router-dom'
import Format from "react-currency-format"
export class Products extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }
    check = () => {
        const {product} = this.state
        if(product){
            this.getProduct()
        }else {
            product = []
            console.log(product)
            this.getProduct()
        }
    }
    getProduct = () => {
        const products = this.context.products;
        const data = products.filter(product => {
            return product.category_name.toLowerCase() == this.props.match.params.name.toLowerCase()
        })
        this.setState({product: data})
    }
    componentDidMount() {
        this.check()
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.name.toLowerCase() !=prevProps.match.params.name.toLowerCase()){
            this.check()
        }
    }
    render() {
        const {product} = this.state
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {
                            product.map(product => (
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

                </div>
            </div>
        )
    }
}

export default Products
