import React from 'react'
import Table from './components/Table'
import { FaArrowLeft } from "react-icons/fa";

const App = () => {
  return (
    <main className='p-6'>
   <header className='flex justify-between'>
    <div className='flex gap-4 items-center'>
      <div><FaArrowLeft/></div>
      <div>
        <h1 className='text-2xl font-bold'>Rules creation</h1>
        <div className='border border-black w-[300px]'></div>
      </div>
    </div>
    <button className='btn'>Publish Feed</button>
   </header>
      <Table/>
    </main>
  )
}

export default App