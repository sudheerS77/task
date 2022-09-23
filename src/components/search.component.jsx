import React from 'react'
import { MdSearch, MdOutlineClose} from 'react-icons/md';

const SearchComponent = () => {
  return (
      <div>
          <div className='px-20 py-10 flex flex-col items-start gap-5'>
      <div className='flex items-center justy-around border border-gray-400 w-1/3 rounded-md'>
        <span className='px-2'>
        <MdSearch className='w-6 h-6' />
        </span>
        <input
          type="text"
          placeholder='Paracetamol'
          className='w-full h-10' />
        <span className='bg-blue-400 px-4 h-10 flex items-center text-xl text-gray-50'>Search</span>
      </div>
      <div className='flex items-center justify-center gap-5'>
        <h5 className='text-lg font-semibold text-gray-700'>Paracetamol   <span className='text-md font-light text-gray-600'>(128 Products)</span></h5>
        <span className='bg-blue-200 px-2 py-0.5 rounded-md'>
          Aceclofenac
        </span>
        <span className='bg-blue-200 px-2 py-0.5 rounded-md'>
          500mg
        </span>
        <span className='text-sm text-red-700 font-medium'>Remove all</span>
      </div>
    </div>
    </div>
  )
}

export default SearchComponent