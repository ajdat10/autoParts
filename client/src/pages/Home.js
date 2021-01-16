import React from 'react'
import '../styles/Home.css'

const Home = (props) => {
  console.log(props.currentUser)
  return (
    <div className="home">
      <div>
        <h1 className="welcome-title center">Ready To Show Off?!?!</h1>
        {props.currentUser ?
          <h6 className="logged-in center">You are Signed in as {props.currentUser}</h6>
          :
          <p className="signin-signup"> Welcome! In this site you will find an array of car enthusiasts showing off their built.
          You as the user has the opportunity to do the same! Sign in and show the world how amazing your car built is!
          Have spare parts? No problem. In AJay’s Imports you also have the opportunity to sell those parts that are taking up space in your garage.
          If you don't have an account don't worry this site is free to all users. Click on the sign up button to register.
          </p>
        }
      </div>
    </div>


  )
}


export default Home