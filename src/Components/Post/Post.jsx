import './Post.css'

function Post (props) {
    const { title, subtitle, author,id,push,image } = props;
    return(
        <div className="Post" onClick = {()=>push(`posts/${id}`)}>
        <img src={image} alt=""/>
        <div className="post-info">
        <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{author}</p>
        </div>
        </div>
    )
}

export default Post