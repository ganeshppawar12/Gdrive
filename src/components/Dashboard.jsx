import React from 'react'
import Navbar from "./navbar";
import UploadSection from "./uploadSection";
import FiltterSection from "./FiltterSection";
import Sidebar from "./sidebar";
import FileSection from "./fileSection";

const Dashboard = () => {
  return (

    <>
    <div className='flex' >
    <div>
        <Sidebar></Sidebar>
    </div>
    <div className='flex-1'>

<Navbar></Navbar>
<UploadSection></UploadSection>
<FiltterSection></FiltterSection>
<FileSection></FileSection>


  </div>
    </div>
    
    </>
    
  )
}

export default Dashboard