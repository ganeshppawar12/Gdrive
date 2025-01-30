import React, { useEffect, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { auth } from '../firebase-config';
import { useNavigate } from 'react-router-dom';

const navbar = () => {
  const [userDetails, setUserdetails] = useState(null);
  const [showDropdwon , setShowdropdown] = useState(false);
  const navigate = useNavigate();

  const fetchUserData = async ()=>{
    auth.onAuthStateChanged(async (user)=>{
      // console.log(user.displayName);
      setUserdetails({uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,})

    })
  }

  const handelLogout = async ()=>{
 try {
      await auth.signOut();
      navigate('/Login');  // Navigate after logging out
    } catch (error) {
      console.log('Error logging out:', error);
    }


  }

  const showDropDownOPtion = ()=>{

    setShowdropdown(!showDropdwon)
  }

  useEffect(()=>{
    fetchUserData();
    // console.log(userDetails.displayName)
  },[]);
  return (
    <div className=' border-b-1  border-gray-200' >


    <div  className=' flex items-center justify-between  p-2' >
        <div className=' flex items-center  border-1 rounded-md border-gray-300 p-1 w-64 '>
            <SearchIcon className=' text-gray-400'></SearchIcon>
            <input className='border-0 outline-0 w-100 '  type="text" placeholder='Search for documents & files'  name='search' />
        </div>

        <div>
          <div className=' flex items-center gap-1.5 text-gray-500'>
            <span className=''><HelpOutlineIcon></HelpOutlineIcon></span>
            <span><NotificationsNoneIcon></NotificationsNoneIcon></span>
            <span  onClick={showDropDownOPtion}>
            {
              userDetails ? (
                <>
                <div className='rounded-full  overflow-hidden ' >
                <img className=' w-10' src={userDetails?.photoURL} alt="" />
                  
                </div>
                </>
              ) : (
                <span><AccountCircleIcon></AccountCircleIcon></span>

              )
            }

           
          </span>

          </div>
          {
            showDropdwon ? (  <div id='moreoption' className=''>
              <ul className='border-1 border-gray-300 shadow p-2 rounded-md'>
                <li className=' text-red-500 ' onClick={handelLogout} >Log Out</li>
              </ul>
            </div>) : (null) 
          }
        
           
        </div>
    </div>


    </div>
  )
}

export default navbar