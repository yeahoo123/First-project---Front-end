import React, { Component } from 'react'
import {DataContext} from '../Context'
import "../css/ProductDetail.css"
import {Link} from 'react-router-dom'
import "../css/News.css"
import Format from "react-currency-format"

export class Products extends Component {
    static contextType = DataContext;
    state = {
        news1: []
    }
    check = () => {
        const {news1} = this.state
        if(news1){
            this.getNews()
        }

    }
    getNews = () => {
        const {news} = this.context;
        const data = news.filter(newsCategory => {
            return newsCategory.news_ctgr_name.toLowerCase() == this.props.match.params.name.toLowerCase()
        })
        console.log(data)
        this.setState({news1: data})
    }
    componentDidMount() {
        this.check()
    }
    componentDidUpdate(prevProps, prevState){
        if(this.props.match.params.name.toLowerCase() != prevProps.match.params.name.toLowerCase()){
            this.check()
        }
    }
    render() {
        const {news1} = this.state
        return (
            <div id="news">
                <div className="container">
                {
                        news1.map(newsprops => (
                            <div className="news_container" key={newsprops.news_id}>
                                <Link to={`/news/${newsprops.news_id}`}>
                                    <img className="image" src={`http://localhost/kltn/admin/images/news/202102/${newsprops.news_image}`} alt={newsprops.news_title}/>
                                </Link>
                                <div className="box">
                                    <h3 className="title">
                                        <Link to={`/news/${newsprops.news_id}`}>
                                            {newsprops.news_title}
                                        </Link>
                                    </h3>
                                    <p className="content">{newsprops.news_content}</p>
                                    <div className="info_block">
                                        <p className="createInfo">
                                            <div className="author">Tác giả: {newsprops.news_author}</div>
                                            <div className="datetime">Ngày đăng: {new Date(newsprops.create_date.replace("", '')).toLocaleDateString()}</div>
                                        </p>
                                        <p className="category">Danh mục: <Link to={`/newscategory/${newsprops.news_ctgr_id==1?"new":"hot"}`}>{newsprops.news_ctgr_name}</Link>
                                        </p>
                                    </div>
                                    
                                    <p><Link to={`/news/${newsprops.news_id}`}>
                                            Xem tin
                                        </Link></p>
                                </div>
                            </div>
                        ))
                    }
                    </div>

                </div>
        )
    }
}

export default Products
