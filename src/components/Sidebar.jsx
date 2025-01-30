import React from 'react'
import Drive from '../img/logo.png'
import AddIcon from '@mui/icons-material/Add';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ComputerIcon from '@mui/icons-material/Computer';
import NoteOutlinedIcon from '@mui/icons-material/NoteOutlined';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

const Sidebar = () => {
  return (
    <div className='w-60 p-2 flex flex-col gap-3 border-r-1 border-gray-300'>


<div  className='flex items-center gap-2'>
    <img className=' w-10 ' src={Drive} alt="Logo" loading='lazy' />
    <p className=' text-2xl text-green-600 font-semibold'>GP Drive</p>
</div>

<div className=' text-center'>
    <div className='border border-gray-400 rounded-sm p-1 cursor-pointer hover:border-gray-800'>
        <button  className=' text-gray-600 cursor-pointer' ><AddIcon></AddIcon> Add Files</button>
    </div>
</div>

 <div>
    <ul className='flex flex-col gap-2 text-gray-500 cursor-pointer border-b-2 border-gray-200 ' >
        <li className=' hover:bg-purple-50 rounded-md p-1' ><HomeOutlinedIcon></HomeOutlinedIcon>   <span>Home</span>  </li>
        <li className=' hover:bg-purple-50 rounded-md p-1'><ComputerIcon></ComputerIcon> <span>Computers</span> </li>
        <li className=' hover:bg-purple-50 rounded-md p-1'><NoteOutlinedIcon></NoteOutlinedIcon> <span>Notes</span> </li>
        <li className=' hover:bg-purple-50 rounded-md p-1'><DriveFolderUploadIcon></DriveFolderUploadIcon> <span>Drive</span> </li>
        <li className=' hover:bg-purple-50 rounded-md p-1'><DeleteOutlineOutlinedIcon></DeleteOutlineOutlinedIcon> <span>Trash</span> </li>

    </ul>

 </div>

 <div>
    <div className='h-2
     bg-gray-200 rounded-2xl'>

    </div>
    <p>00 KB of 100MB</p>
 </div>


    </div>
  )
}

export default Sidebar