import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'

export class History extends Component {
    static contextType = DataContext;
    render() {
        const {handleChangeNumber, phone, orderContainer} = this.context
        console.log(orderContainer)
        console.log(phone)
        return (
            <div>
                <div className="header-search">
                    <h1 style={{textAlign: "center"}}>Xin nhập lịch sử đơn hàng</h1>
					<form>
                        <input  className="input" 
                                placeholder="Nhập sđt" 
                                name="phone" 
                                onChange={handleChangeNumber}
                            />
                        <Link 
                        to={`/history?phone=${phone}`}
                        className="search-btn"><i className="fa fa-search" aria-hidden="true"></i></Link>
                    </form>
                </div>
            </div>
        )
    }
}

export default History
