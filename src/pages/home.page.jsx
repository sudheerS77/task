import React from 'react'
import CardComponent from '../components/card.component'
import SearchComponent from '../components/search.component'
import Sidebar from '../components/sideBar.component'

const HomePage = () => {
  return (
    <div className='absolute w-full top-20'>
      <SearchComponent />
      <div className='flex items-start justify-center gap-4 w-full'>
        <Sidebar />
        <div className='w-10/12 flex flex-wrap items-center justify-center gap-10'>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        </div>
      </div>
    </div>
  )
}

export default HomePage