import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import {DataContext} from '../Context'
import '../css/News.css'
export class News extends Component {
    static contextType = DataContext
    // getDate(a){
    //     const date = JSON.stringify(a)
    //     const formatDate = new Date(date)
    //     console.log(date.toLocaleDateString())
    // }
    // componentDidMount(){
    //     this.getDate()
    // }
    render() {
        const {news} = this.context 
        return (
            <div id="news">
                <div className="container">
                    {
                        news.map(newsprops => (
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

export default News
