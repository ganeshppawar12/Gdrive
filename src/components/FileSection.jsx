import React from 'react'
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
const FileSection = () => {
  return (

    <>
    <div  className='flex items-center justify-between p-2' >

        <div></div>
        <div className='flex items-center px-2 py-1 gap-2 text-gray-500 border-1 border-gray-300 rounded-md'>
           
                <button className=' flex items-center cursor-pointer '>
                <span className=' text-xs ' ><FormatListBulletedOutlinedIcon></FormatListBulletedOutlinedIcon></span>
                <p>List</p>
                </button>
           
            <span>|</span>
            <button className=' flex items-center  cursor-pointer'>
                <span><GridViewOutlinedIcon></GridViewOutlinedIcon></span>
                <p>Grid</p>
            </button>
        </div>
    </div>

    <div className='p-2'>

    
    <div class="overflow-x-auto rounded-2xl border-1 border-gray-100">
    <table class="min-w-full table-auto border-collapse border border-gray-200">
      <thead class="bg-blue-50">
        <tr className=' text-gray-600 '>
          <th class=" px-4 py-2 text-left">File Name</th>
          <th class=" px-4 py-2 text-left">Date Upload</th>
          <th class=" px-4 py-2 text-left">Last Update</th>
          <th class=" px-4 py-2 text-left">File Size</th>
          <th class=" px-4 py-2 text-left">File Owner</th>
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
        <tr>
          <td class=" px-4 py-2">good-memories.png</td>
          <td class=" px-4 py-2">17 Aug 2023</td>
          <td class=" px-4 py-2">2 Month ago</td>
          <td class=" px-4 py-2">15.7 MB</td>
          <td class=" px-4 py-2">Azarine Abby</td>
        </tr>
        <tr>
          <td class=" px-4 py-2">data-webtech.pdf</td>
          <td class=" px-4 py-2">30 Aug 2023</td>
          <td class=" px-4 py-2">1 Month ago</td>
          <td class=" px-4 py-2">17.5 MB</td>
          <td class=" px-4 py-2">Lawrence Sunrise</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">live-report.docx</td>
          <td class="border border-gray-300 px-4 py-2">31 Aug 2023</td>
          <td class="border border-gray-300 px-4 py-2">1 Month ago</td>
          <td class="border border-gray-300 px-4 py-2">34.7 MB</td>
          <td class="border border-gray-300 px-4 py-2">Katherine Abzarine</td>
        </tr>
        <tr>
          <td class="border border-gray-300 px-4 py-2">valorant.apk</td>
          <td class="border border-gray-300 px-4 py-2">10 Sept 2023</td>
          <td class="border border-gray-300 px-4 py-2">4 Week ago</td>
          <td class="border border-gray-300 px-4 py-2">105.7 MB</td>
          <td class="border border-gray-300 px-4 py-2">Revita Putri</td>
        </tr>
        
      </tbody>
    </table>
  </div>
  </div>

    </>
  )
}

export default FileSection