import React, { Component } from 'react'
import axios from 'axios'
export const DataContext = React.createContext()
export class DataProvider extends Component {

    state = {

        products: [],
        productCategory: [],
        news: [],
        newsCategory: [],
        cart: [],
        order :{},
        orderContainer: [],
        phone:'',
        searchName:'',
        total: 0,
        totalInvest: 0
    }
    addCart = (id) => {
        const {products, cart} = this.state
        const check = cart.every(item=>{
            return item.product_id !== id
        })
        if(check){
            const data1 = products.filter(product => {
                return product.product_id === id
            })
            this.setState({cart: [...cart, ...data1 ]})
        }else alert("Sản phẩm đã có trong giỏ hàng")
    }

    reduction = (id) =>{
        const {cart} = this.state
        cart.forEach(item => {
            if(item.product_id === id){
                item.count1 === 1? item.count1 = 1: item.count1 -=1
            }
        })
        this.setState({cart: cart})
        this.geTotal()
    }
    increase = (id) =>{
        const {cart} = this.state
        cart.forEach(item => {
            if(item.product_id === id && item.count1 < item.product_qty){
                item.count1 +=1
            }
        })
        this.setState({cart: cart})
        this.geTotal()
    }
    remove = (id) => {
        if(window.confirm("Bạn có muốn xóa sản phẩm không")){
            const {cart} = this.state
            cart.forEach((item, index) => {
                if(item.product_id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart})
            this.geTotal()
        }   
    }
    geTotal = () => {
        const {cart} = this.state
        const data = cart.reduce((prev, item)=> {
            return prev + (item.product_price * item.count1)
        },0)
        const data2 = cart.reduce((prev, item)=> {
            return prev + (item.import_price * item.count1)
        },0)
        this.setState({total: data})
        this.setState({totalInvest: data2})
    }
    handleChange = (e) =>{
        const {value, name} = e.target;
        this.setState({
                [name] : value
        })
    }

    getProductAPI = ()=>{
        axios({
            method: "GET",
            url: "/product.php?status=1",
            credentials: true,
            data:null
        }).then(res=>{
             this.setState({products: res.data})
        }).catch(err =>{
            console.log(err)
        })
    }
    getProductCategory = ()=>{
        axios({
            method: "GET",
            url: "/category.php",
            credentials: true,
            data:null
        }).then(res=>{
             this.setState({productCategory: res.data})
        }).catch(err =>{
            console.log(err)
        })
    }
    getNews = () => {
        axios({
            method: "GET",
            url: "/news.php?status=1",
            credentials: true,
            data:null
        }).then(res=>{
             this.setState({news: res.data})
        }).catch(err =>{
            console.log(err)
        })
    }
    // getUser = () => {
    //     axios({
    //         method: "GET",
    //         url: "/user.php?status=1",
    //         credentials: true,
    //         data:null
    //     }).then(res=>{
    //         console.log(res.data)
    //          this.setState({login: res.data})
    //     }).catch(err =>{
    //         console.log(err)
    //     })
    // }
    getNewsCategory = () =>{
        axios({
            method: "GET",
            url: "/newscategory.php",
            credentials: true,
            data:null
        }).then(res=>{
             this.setState({newsCategory: res.data})
        }).catch(err =>{
            console.log(err)
        })
    } 
    getOrder = () =>{
        axios({
            method: "GET",
            url: "/order.php",
            credentials: true,
            data:null
        }).then(res=>{
             this.setState({orderContainer: res.data})
        }).catch(err =>{
            console.log(err)
        })
    }
    handleChangeNumber=(e) =>{
        const {value, name} = e.target;
        this.setState({
                [name] : value
        })
      }
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', this.state.total)
        localStorage.setItem('dataTotal2', this.state.totalInvest)

    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
        const dataTotal2 = JSON.parse(localStorage.getItem('dataTotal2'));
        if(dataTotal2 !== null){
            this.setState({totalInvest: dataTotal2});
        }
        this.getProductAPI()
        this.getProductCategory()
        this.getNews()
        this.getNewsCategory()
        this.getOrder()
    }
   
    render() {
        
        const {products, cart,total,totalInvest, orderContainer, productCategory,searchName,news, newsCategory, phone} = this.state

        const {addCart, increase,reduction, remove, geTotal, handleChange, handleOrder,handleChangeNumber} = this
        return (
        <DataContext.Provider value={{products, news, cart,total,totalInvest,phone, productCategory,searchName, orderContainer, newsCategory, geTotal, reduction, increase,remove, addCart, handleChange, handleChangeNumber, handleOrder}}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

