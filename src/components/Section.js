import React, { Component } from 'react'
import Products from './pages/Products'
import News from './pages/News'
import Payment from './pages/Payment'
import Card from './pages/Cart'
import Phone from './pages/Phones'
import Laptop from './pages/Laptop'
import Tablet from './pages/Tablet'
import Watch from './pages/Watch'
import Finish from './pages/Finish'
import NewsDetails from './section/NewsDetails'
import Details from './section/Details'
import {Route, Switch} from 'react-router-dom'
import Search from './section/Search'
import Homepage from './pages/Homepage'
import Category from './section/Category'
import NewsCategory from './section/NewsCategory'
import History from './pages/History'
import orderDetail from './section/orderDetail'
export class Section extends Component {

    render() {
        return (
            <section>
                <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/product" component={Products} exact/>
                <Route path="/product/:id" component={Details}/>
                <Route path="/phone/" component={Phone} exact/>
                <Route path="/laptop/" component={Laptop} exact/>
                <Route path="/tablet/" component={Tablet} exact/>
                <Route path="/watch/" component={Watch} exact/>
                <Route path="/accessories/" component={Watch} exact/>
                <Route path="/phone/:name" component={Category} />
                <Route path="/laptop/:name" component={Category} />
                <Route path="/tablet/:name" component={Category} />
                <Route path="/watch/:name" component={Category} />
                <Route path="/accessories/:name" component={Category} />

                <Route path="/news" component={News} exact/>
                <Route path="/newscategory/:name" component={NewsCategory}/>
                <Route path="/news/:id" component={NewsDetails}/>

                <Route path="/cart" component={Card} exact/>
                <Route path="/payment" component={Payment} exact/>
                <Route path="/search" component={Search}/>
                <Route path="/finish" component={Finish}/>

                <Route path="/history" component={History} exact/>
                <Route path="/history:id" component={orderDetail} />


                </Switch>

            </section>
        )
    }
}

export default Section
