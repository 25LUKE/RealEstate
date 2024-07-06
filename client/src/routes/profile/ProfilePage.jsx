import CartList from '../../component/cart/List'
import './ProfilePage.scss'
import ChatPage from '../../component/chat/ChatPage'
import apiRequest from '../../lib/apiRequest'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

function ProfilePage(){
  const { updateUser, currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = async() => {
    try {
      await apiRequest.post('/auth/logout')
      updateUser(null)
      navigate('/')
    } catch (error) {
      console.log(error)
    }
  }
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
            <span>Avatar:
              <img 
                src= {currentUser.avatar || "noavatar.jpg"}
                alt=''
              />
            </span>
            <span>UserName: <b>{currentUser.username}</b></span>
            <span>E-mail: <b>{currentUser.email}</b></span>
            <button onClick={handleLogout}>LogOut</button>
          </div>
          <div className="title">
            <h1>My List</h1>
            <Link to="/add">
              <button>Create New Post</button>
            </Link>
          </div>
          <CartList />
          <div className="title">
            <h1>Saved List</h1>
          </div>
          <CartList />
        </div>
      </div>
      <div className="chatContainer">
        <div className="wrapper">
          <ChatPage />
        </div>
      </div>
    </div>
  )
}

export default ProfilePage