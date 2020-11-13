import React, { Component } from 'react'
import Post from '../../Components/Post/Post'
import creatorOne from '../../images/creator_1.jpeg'
import creatorTwo from '../../images/creator_2.jpeg'

///CSS
import './PostList.css'

class PostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts : [],
        }
        this.renderPosts = this.renderPosts.bind(this)
        this.renderMainPost = this.renderMainPost.bind(this)
    }

    componentDidMount() {
        fetch('https://fir-session150519.firebaseio.com/Posts/.json').then(data =>
            data.json()).then(json => {
                let castedData = [];
                for (let i in json) {
                    let post = json[i]
                    post['i'] = i
                    castedData.push(post)
                }
                this.setState({ posts: castedData, })
            })
    }

    renderMainPost() {
        return this.state.posts.filter(post => (post.category === 'React')).map(({ i, title, subtitle, author, image }) =>
            (<Post
                id={i}
                key={i}
                title={title}
                subtitle={subtitle}
                author={author}
                image={image}
                push={this.props.history.push}
            />
            ))


    }

    renderPosts() {
        return this.state.posts.filter(post => (post.category !== 'React')).map(({ i, title, subtitle, author, image }) =>
            (<Post
                id={i}
                key={i}
                author={author}
                title={title}
                image={image}
                push={this.props.history.push}
            />
            ))
    }



    render() {
        return (
            <>
                <main>
                    <section className='posts-section'>
                        <div className='grid-posts'>
                            <div className="main-post">
                                {this.renderMainPost()}
                            </div>
                            <div className="list-posts">
                                {this.renderPosts()}
                            </div>
                        </div>
                        <div className='to-follow'>
                            <div className="creator">
                                <picture><img src={creatorOne} alt="creator-one" /></picture>
                                <div className="creator-info">
                                    <h3>Scott Galloway</h3>
                                    <span>Prof Marketing @NYUStern </span><br></br>
                                    <span>Founder @L2_digital @redenvelop</span>
                                </div>
                                <button>Follow</button>
                            </div>
                            <div className="creator">
                                <picture><img src={creatorTwo} alt="creator-two" /></picture>
                                <div className="creator-info">
                                    <h3>Hank Green</h3>
                                    <span>Novelist, YouTuber, Science</span><br></br>
                                    <span>Communicator, Community</span>
                                </div>
                                <button>Follow</button>
                            </div>
                        </div>
                    </section>
                </main>

            </>
        )
    }
}



export default PostsList