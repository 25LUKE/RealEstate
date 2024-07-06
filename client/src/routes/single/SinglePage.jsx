import Slider from '../../component/slider/Slider'
import './SinglePage.scss'
import Map from '../../component/map/Map';
import { singlePostData } from "../../lib/data";
import { useLoaderData } from 'react-router-dom';

function SinglePage(){
  const post = useLoaderData();
  console.log(post)
  return (
    <div className='singlePage'>
      <div className="details">
        <div className="wrapper">
          <Slider images={post.image}/>
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt='' />
                  <span>{post.address}</span>
                </div>
                <div className="price">$ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">
              {post.postDetail.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className='title'>General</p>
          <div className="listVertical">
            <div className="feature">
              <img src='/utility.png' alt='' />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "Owner" ? (
                  <p>Owner Responsible</p>
                ):(
                  <p>Tenant Responsible</p>
                )}
              </div> 
            </div>
            <div className="feature">
              <img src='/pet.png' alt='' />
              <div className="featureText">
                <span>Pat Policy</span>
                {post.postDetail.pet === "Allowed" ? <p>Pets Allowed</p> : <p>Pet not Allowed</p>}
              </div> 
            </div>
            <div className="feature">
              <img src='/fee.png' alt='' />
              <div className="featureText">
                <span>Income policy</span>
                <p>{post.postDetail.income}</p>
              </div> 
            </div>
          </div>
          <p className='title'>Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src='/size.png' alt='' />
              <span>{post.size} sqft</span>
            </div>
            <div className="size">
              <img src='/bed.png' alt='' />
              <span>{post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src='/bath.png' alt='' />
              <span>{post.bathroom} bathroom</span>
            </div>
          </div>
          <p className='title'>Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src='/school.png' alt='' />
              <div className="featureText">
                <span>School</span>
                <p>{post.postDetail.school}m away</p>
              </div>  
            </div>
            <div className="feature">
              <img src='/pet.png' alt='' />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.postDetail.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src='/fee.png' alt='' />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.postDetail.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className='title'>Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]}/>
          </div>
          <div className="buttons">
            <button>
              <img src='/chat.png' alt='' />
              Send a message
            </button>
            <button>
              <img src='/save.png' alt='' />
              Save  the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage