import React from 'react'

export default (props) => {
    const {post} = props
        // console.log("dc",post.comments.length)
        if(post.comments){

            return(
                <div>
                    {post.comments.map((comment, index)=>{
                        return <p>{comment.comment}</p>
                    })}
                </div>
            )
        }
    //    return null 
    
}