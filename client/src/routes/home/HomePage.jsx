import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import SearchBar from '../../component/searchBar/SearchBar';
import './HomePage.scss';
function HomePage(){
    const { currentUser} = useContext(AuthContext);
    console.log(currentUser)
  return (
    <div className='homePage'>
        <div className='homePage__container'>
            <div className="wrapper">
                <h1 className='title'>
                    Find Real Estate & get Your Dream Place
                </h1>
                <p>
                    Lorem ispun dolor sit amet consectetur, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                    in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                </p>
                <SearchBar /> 
                <div className='boxes'>
                    <div className='box'>
                        <h1>16+</h1>
                        <h2>Years of Experience</h2>
                    </div>
                    <div className='box'>
                        <h1>200</h1>
                        <h2>Award Gained</h2>
                    </div>
                    <div className='box'>
                        <h1>2000+</h1>
                        <h2>Property Ready</h2>
                    </div>
                </div>
            </div>
        </div>
        <div className='imgPage__container'>
            <img src='/bg.png' alt='' />
        </div>
    </div>
  )
}

export default HomePage