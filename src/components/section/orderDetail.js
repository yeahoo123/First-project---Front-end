import React, { Component } from 'react'
import {DataContext} from '../Context'
export class orderDetail extends Component {
    static contextType = DataContext;
    render() {
        const {orderContainer} = this.context
        console.log(orderContainer)
        return (
            <div>
                
            </div>
        )
    }
}

export default orderDetail
