import React, { Component } from "react";
import { Link } from "react-router-dom";
import { __GetPosts } from "../services/PostServices";

import CreateComment from "../pages/CreateComment";
import Comments from "../components/Comments";
import "../styles/Feed.css";

export default class Feed extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      user: null,
      currentPage: 1,
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = async (props) => {
    try {
      const posts = await __GetPosts(this.state.currentPage);
      this.setState({ posts: [...this.state.posts, ...posts] });
    } catch (error) {
      console.log(error);
    }
  };

  // displayComments = (post) => {
  //     console.log("dc",post.comments.length)
  //     if(post.comments){
  //         return(
  //             <div>
  //                 {post.comments.map((comment, index)=>{
  //                     return <p>{comment.comment}</p>
  //                 })}
  //             </div>
  //         )
  //     }
  //    return null
  // }

  createComment = async () => {
    this.props.history.push("/create");
  };

  incrementPage = () =>
    this.setState(
      (prevstate) => ({ currentPage: prevstate.currentPage + 1 }),
      () => this.getPosts()
    );
  render() {
    const { posts, user } = this.state;
    console.log("Check here", this.state.post);

    return (
      <div>
        <div className="row">
          <div>
            <p class="center-align">
              <Link
                class="waves-effect waves-light btn-small blue"
                to="/upload"
              >
                <i class="material-icons right">create</i>Create Post
              </Link>
            </p>
          </div>
          {posts.length ? (
            posts.map((post, index) => (
              <div className="info-card">
                <div className="post col s12 m6" key={index}>
                  <div className="card grey lighten-3">
                    <p>@{post.name}</p>
                    <div className="card-image">
                      <img alt="" src={post.image_url} />
                    </div>
                    <div className="card-content">
                      <p>Description: {post.description}</p>
                      <p>Price: ${post.price}</p>
                      <p>
                        <Comments post={post} />
                      </p>
                      <p>
                        <CreateComment
                          {...this.props}
                          currentUser={this.props.currentUser}
                          postId={post._id}
                        />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h3>Loading . . . . .</h3>
          )}
        </div>
      </div>
    );
  }
}
