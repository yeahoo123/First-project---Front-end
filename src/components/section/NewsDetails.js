import React, { Component } from 'react'
import {DataContext} from '../Context'
export class NewsDetails extends Component {
    static contextType = DataContext;
    state = {
        news: []
    }
    getNews = () => {
        const {news} = this.context
        if(this.props.match.params.id){
            const data = news.filter(item => {
                return item.news_id == this.props.match.params.id
            })
            console.log(data)
            this.setState({news: data})
        }
    }
    componentDidMount() {
        this.getNews()
    }
    render() {
        const {news} = this.state
        console.log(this.props.match)
        return (
            <div>
                <div className="container">
                    <div className="row">
                        {news.map(item =>(
                            <div style={{textAlign: 'center'}} className="news_box" key={item.news_id}>
                                <h2><p>{item.news_title}</p></h2>
                                <img src={`http://localhost/kltn/admin/images/news/202102/${item.news_image}`} alt={item.news_title}/>
                                
                                <p style={{textAlign:"left"}}>{item.news_description}. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minima nostrum. Qui consectetur vel sint libero id, adipisci ea asperiores ipsum magnam, laudantium sequi modi velit cum voluptatem enim voluptates?</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsDetails
