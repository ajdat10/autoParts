import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { __GetPosts } from '../services/PostServices'


export default class Feed extends Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            currentPage: 1
        }
    }

    componentDidMount() {
        this.getPosts()
    }

    getPosts = async () => {
        try {
            const posts = await __GetPosts(this.state.currentPage)
            this.setState({ posts: [...this.state.posts, ...posts] })
        } catch (error) {
            console.log(error)
        }
    }

    createComment = async () => {
        this.props.history.push('/create')
    }

    incrementPage = () =>
        this.setState(
            (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
            () => this.getPosts()
        )
    render() {
        const { posts } = this.state

        return (
            <div>
                <Link to="/upload">
                    <button className="btn">New Post</button>
                </Link>
                <div className="row">   
                    {posts.length ? (
                        posts.map((post, index) => (
                        <div className="post col s12 m6" key={index}> 
                            <div className="card">
                                <div className="card-image">
                                    <img src={post.image_url} />
                                    <button 
                                    className="btn-floating halfway-fab waves-effect waves-light red"
                                    onClick={this.createComment}
                                    >
                                        <i className="material-icons">add</i>
                                    </button>
                                </div>
                                <div className="card-content">
                                    <p>{post.description}</p>
                                    <p>{post.price}</p>
                                </div>
                            </div>   
                        </div>
                        ))   
                    ) : (
                        <h3>Loading . . . . .</h3>
                        )
                    }
                </div>
            </div>
        )
    }
}
