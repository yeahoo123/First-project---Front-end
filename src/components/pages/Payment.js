import React, { Component } from 'react'
import {DataContext} from '../Context'
import {Link} from 'react-router-dom'
import Format from "react-currency-format"
import axios from 'axios'
export class Payment extends Component {
    static contextType = DataContext;
    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            address:'',
            phone:'',
        }
    }
    handleForm = (e) =>{
        const {name, value} = e.target
        console.log(name, value)
        this.setState({[name]: value})
    }
    componentDidMount(){
        this.context.geTotal()
    }
    handleOrder = () =>{
        const {cart, total, totalInvest} = this.context
        const {name, email, address, phone} = this.state
        console.log(JSON.stringify(this.state))
        // axios.post("http://localhost/kltn/admin/api/getOrder.php", {name, email, address, phone, cart, total})
        // .then(res =>{
        //     console.log(res)
        // })
        // .catch(err =>{
        //     console.log(err)
        // })
        axios({
            method: "POST",
            url: "http://localhost/kltn/admin/api/getOrder.php",
            credentials: true,
            data: {name, email, address, phone, cart, total,totalInvest}
        }).then(res=>{
            localStorage.removeItem('dataCart');
            localStorage.removeItem('dataTotal');
            localStorage.removeItem('dataTotal2');
            window.location.reload()
        }).catch(err =>{
            console.log(err)
        })

    }
    render() {
        const { cart, total} = this.context
        const {handleOrder, handleForm} = this
        if(cart.length === 0 ){
            return <h2 style={{textAlign: "center"}}>Không có sản phẩm cần thanh toán</h2>
        }else {
            return (
                <div className="container">
                    <div className="row" style={{marginTop: "10px"}}>
                        <div className="col-md-7">
                            <div className="billing-details">
                                <div className="section-title">
                                    <h3 className="title">ĐỊA CHỈ THANH TOÁN</h3>
                                </div>
                                <form>
                                    <div className="form-group">
                                        <input onChange={handleForm} className="input" type="text" name="name" placeholder="Họ tên" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={handleForm} className="input" type="email" name="email" placeholder="Email" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={handleForm} className="input" type="text" name="address" placeholder="Địa chỉ" />
                                    </div>
                                    <div className="form-group">
                                        <input onChange={handleForm} className="input" type="phone" name="phone" placeholder="Điện thoại" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-5 order-details">
                            <div className="section-title text-center">
                                <h3 className="title">Đơn hàng của bạn</h3>
                                </div>
                                <div className="order-summary">
                                <div className="order-col">
                                    <div><strong>Sản phẩm</strong></div>
                                    <div><strong>Giá tiền</strong></div>
                                </div>
                                <div className="order-products">
                                    {
                                        cart.map(product =>(
                                            <div className="order-col">
                                                <div>x{product.count1} {product.product_name}</div>
                                                <div> <strong><Format value={product.product_price * product.count1} displayType={'text'} thousandSeparator={true}></Format> VNĐ</strong></div>
                                            </div>
                                        ))
                                    }
                                    </div>
                                
                                <div className="order-col">
                                    <div>Phí giao hàng</div>
                                    <div><strong>Miễn phí</strong></div>
                                </div>
                                <div className="order-col">
                                    <div><strong>Tổng cộng</strong></div>
                                    <div><strong className="order-total" style={{fontSize: 16}}><Format value={total} displayType={'text'} thousandSeparator={true}></Format> VNĐ</strong></div>
                                </div>
                                </div>
                                <div className="payment-method">
                                <Link to="/finish" onClick={handleOrder} className="primary-btn order-submit">Đặt hàng</Link>
                                </div>
                            </div>
                            </div>
                        </div>

            )
        }
    }
}

export default Payment
