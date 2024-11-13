import React from 'react'
import { Link } from 'react-router-dom'
import { listData } from '../../lib/dummydata'
import List from '../../components/list/List'
import Chat from '../../components/chat/Chat'
import './profilePage.scss'

const ProfilePage = () => {
  return (
    <div className='profilePage'>
        <div className="details">
            <div className="wrapper">
                <div className="title">
                    <h1>User Information</h1>
                    <Link to="/profile/update">
                        <button>Update Profile</button>
                    </Link>
                </div>
                <div className="info">
                    <span>
                        Avatar: 
                        <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    </span>
                    <span>
                        Username: <b>John Doe</b>
                    </span>
                    <span>
                        E-mail: <b>johndoe@gmail.com</b>
                    </span>
                    <button>Logout</button>
                </div>
                <div className="title">
                    <h1>My List</h1>
                    <Link to="/add">
                        <button>Add New Post</button>
                    </Link>
                </div>
                <List />
                <div className="title">
                    <h1>Saved List</h1>
                </div>
                <List />
            </div>
        </div>

        <div className="chatContainer">
            <div className="wrapper">
                <Chat />
            </div>
        </div>
    </div>
  )
}

export default ProfilePage