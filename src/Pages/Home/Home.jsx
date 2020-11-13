import React, { Component } from 'react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import './Home.css'
import profilePic from '../../images/profile-pic.jpg'
import notification from '../../images/notification.svg'
import bookmark from '../../images/bookmarks.svg'
import search from '../../images/loupe.svg'
import CreatePost from '../../Pages/CreatePost/CreatePost'
import PostList from '../../Pages/PostList/PostList'
import PostDetail from '../PostDetail/PostDetail'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state =({
            posts :[]
        })

    }
    componentDidMount() {
        fetch('https://reactsessions-ac545.firebaseio.com/.json').then(data=>
        data.json()).then(json=>{
            let castedData = [];
            for( let i in json ){
                let post = json[i]
                post['i'] = i
                castedData.push(post)
            }
            this.setState({posts:castedData,})
        })
    }
    render() {
        return (
            <BrowserRouter>
                <header>
                    <div className="nav-bar">
                        <div className="logo">
                            <span>
                                <Link to="/">Medium</Link>
                            </span>
                            <span>Good evening</span>
                        </div>
                        <nav>
                            <ul>
                                <li><Link to="/"><picture><img src={search} alt="search-icon"/></picture></Link></li>
                                <li><Link to="/"><picture><img src={bookmark} alt="bookmark-icon"/></picture></Link></li>
                                <li><Link to="/"><picture><img src={notification} alt="notification-icon"/></picture></Link></li>
                                <li className="active"><Link to="/create-post">Create Post</Link></li>
                                <li><Link to="/">
                                    <picture>
                                    <img src={profilePic} alt="profile-pic"/>
                                    </picture></Link></li>
                            </ul>
                        </nav>
                        </div>
                        <Switch>
                            <Route exact path="/" component ={PostList}>
                                
                            </Route>
                            <Route path="/page1">
                                <h1>Contenido de la página 1</h1>
                            </Route>
                            <Route path="/page2">
                                <h1>Contenido de la página 2</h1>
                            </Route>
                            <Route exact path="/create-post">
                                <CreatePost/>
                            </Route>
                            <Route exact path="/posts" component = {PostList}/>
                            <Route  path="/posts/:id" component={PostDetail} />
                        </Switch>
             </header>
             
</BrowserRouter>
        );
    }
}
export default Home;