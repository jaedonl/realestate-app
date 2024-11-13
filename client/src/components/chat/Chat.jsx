import React, {useState} from 'react'
import './chat.scss'

const Chat = () => {
    const [chat, useChat] = useState(true)

    return (
        <div className='chat'>
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => useChat((prev) => !prev)}>
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
                <div className="message">
                    <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <span>John Doe</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                            John Doe
                        </div>
                        <div className="close" onClick={() => useChat((prev) => !prev)}>X</div>
                    </div>
                    <div className="center">
                        <div className="chatMessage">
                            <p>lorem ipsum dolor sit amet!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>lorem ipsum dolor sit amet!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage">
                            <p>lorem ipsum dolor sit amet!</p>
                            <span>1 hour ago</span>
                        </div>
                        <div className="chatMessage own">
                            <p>lorem ipsum dolor sit amet!</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea name="" id=""></textarea>
                        <button>Send</button>
                    </div>

                </div>
            )}            
        </div>
    )
}

export default Chat