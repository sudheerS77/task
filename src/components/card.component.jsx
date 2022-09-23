import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa';
const CardComponent = () => {
  return (
      <>
          <div className=''>
              <div className='w-80'>
              <div className='border border-gray-400 rounded-lg flex flex-col items-center justify-center gap-5 '>
                  <div className='w-80 h-44 rounded-md p-2'>
                          <img src="https://mumbaimirror.indiatimes.com/thumb/77076216.cms?resizemode=4&width=400"
                              alt=""
                      className='w-full h-full rounded-md'
                      />
                  </div>
                  <div className='flex flex-col items-center justify-center gap-3'>
                          <div className='flex flex-col items-center'>
                              <h5 className='text-md font-semibold'>Favipiravir 400mg (Fabiflu) Tablets</h5>
                              <h6 className='text-gray-300'>
                                  <span className='text-xl text-red-800'>RS 1,775</span>/ stripe</h6>
                          </div>
                      <div>
                      <p className='text-gray-900 text-md font-semibold'>Glenmark Pharmaceutical Limited</p>
                      <p className='text-md text-gray-500 font-light'>PARVAT PATIYA, SURAT, GUJRAT</p>
                      </div>
                  </div>
                      <div className='text-xl text-blue-600 font-bold py-5 border-b-8 w-full border-red-800 rounded-md'>
                          <div className='border-t border-gray-600 w-full flex items-center justify-center gap-5 pt-3'>
                          <span className=' border-t'><FaTelegramPlane /></span>
                          Contact Supplier
                          </div>
                  </div>
                  </div>
                  </div>
        </div>
      </>
  )
}

export default CardComponent