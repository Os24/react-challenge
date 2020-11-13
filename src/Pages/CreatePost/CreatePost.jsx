import React, { Component } from 'react'
import CustomInput from '../../Components/CustomInput/CustomInput'
import './CreatePost.css'

class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title : "",
            subtitle : "",
            image : "",
            author : "",
            category : "",
            shortDescription : "",
            article :"",
            date:"",
        }

        this.handleCreatePost = this.handleCreatePost.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleCreatePost(name,value){
        this.setState({[name] : value,})

    }
    
    
    handleSubmit(event){
        event.preventDefault()
        const {title,subtitle,image,author,article,shortDescription,category,date} = this.state
        const newPost ={
            title,
            author,
            subtitle,
            image,
            article,
            shortDescription,
            category,
            date,

        }
        fetch('https://fir-session150519.firebaseio.com/Posts/.json',{
            method : "POST",
            headers :{
             "Content-Type" : "application/json",
            },
            body : JSON.stringify(newPost)
        })
        .then(response => response.json())
        .then(data=>console.log(data,"Tu contenido se subio con exito padrino"))
    }
    
    
    render() {
        const {title,subtitle,image,author,article,shortDescription,category,date} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                Titulo del post :{""}
                <CustomInput
                    type = "text"
                    value = {title}
                    name = "title"
                    callback = {this.handleCreatePost}
                    />
                    Subtitulo del post :{""}
                    <CustomInput
                    type = "text"
                    value = {subtitle}
                    name = "subtitle"
                    callback = {this.handleCreatePost}
                    />
                    Url de la imagen :{""}
                    <CustomInput
                    type = "text"
                    value = {image}
                    name = "image"
                    callback = {this.handleCreatePost}
                    />
                    Autor :{""}
                    <CustomInput
                    type = "text"
                    value = {author}
                    name = "author"
                    callback = {this.handleCreatePost}
                    />
                    Contenido :{""}
                    <CustomInput
                    type = "text"
                    value = {article}
                    name = "article"
                    callback = {this.handleCreatePost}
                    />
                    descripción rapida :{""}
                    <CustomInput
                    type = "text"
                    value = {shortDescription}
                    name = "shortDescription"
                    callback = {this.handleCreatePost}
                    />
                    Categoria :{""}
                    <CustomInput
                    type = "text"
                    value = {category}
                    name = "category"
                    callback = {this.handleCreatePost}
                    />
                    Fecha :{""}
                    <CustomInput
                    type = "text"
                    value = {date}
                    name = "date"
                    callback = {this.handleCreatePost}
                    />
                    <button type="submit">Crear Post</button>

            </form>
        )
    }
}



export default CreatePost