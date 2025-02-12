import { useState } from 'react'
import './ChatPage.scss'

function ChatPage(){
    const [chat, setChat] = useState(true);
  return (
    <div className='chatPage'>
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
            <div className="message">
                <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                <span>John Doe</span>
                <p> Loren ipsum dollor sit amet...</p>
            </div>
        </div>
        { chat && <div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='' />
                    <span>John Doe</span>
                </div>
                <div className="close" onClick={() => setChat(null)}>X</div>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Loren ipsum dollor sit amet</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>}
    </div>
  )
}

export default ChatPage