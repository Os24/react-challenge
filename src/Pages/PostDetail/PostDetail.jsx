import React, { Component } from 'react'

////
import './PostDetail.css'
class PostDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            post:{}
        }

    }
    componentDidMount(){
        fetch(`https://fir-session150519.firebaseio.com/Posts/${this.props.match.params.id}.json`)
        .then(response=>response.json())
        .then(json=>{this.setState({post:json})})
    }
    
    render() {
        console.log(this.state)
        const {title,subtitle,image,author,article,date} = this.state.post
        return (
            <>
            <div className = "post-container">
                <h2>{title}</h2>
                <p>{subtitle}</p>
                 <span>{date}</span>
                <img src={image} alt="post-img"/>
                <article>{article}</article>
                <span>{author}</span>

            </div>
            </>
        )
    }
}



export default PostDetail