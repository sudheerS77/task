import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import { MdOutlineClose} from 'react-icons/md';


import 'react-accessible-accordion/dist/fancy-example.css';

const Sidebar = () => {
  return (
      <>
          <div className='w-3/12 h-screen'>
          <Accordion className='px-5'>
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='font-semibold text-center bg-gray-200 py-2'>
                        Related Category
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex flex-col items-center justify-center gap-3 px-5 py-2'>
                    <p>Paracetamol Tablet</p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Powder</p>
                          <p className='w-full px-4 text-gray-50 bg-blue-400 rounded-md flex items-center justify-between'>Aceclofenac
                          <MdOutlineClose />
                          </p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Syrup</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                          <AccordionItemButton>
                              Business Type
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex flex-col items-center justify-center gap-3 px-5 py-2'>
                    <p>Paracetamol Tablet</p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Powder</p>
                          <p className='w-full px-4 text-gray-50 bg-blue-400 rounded-md flex items-center justify-between'>Aceclofenac
                          <MdOutlineClose />
                          </p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Syrup</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                          <AccordionItemButton>
                              Strength
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex flex-col items-center justify-center gap-3 px-5 py-2'>
                    <p>Paracetamol Tablet</p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Powder</p>
                          <p className='w-full px-4 text-gray-50 bg-blue-400 rounded-md flex items-center justify-between'>Aceclofenac
                          <MdOutlineClose />
                          </p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Syrup</p>
                </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem>
                <AccordionItemHeading>
                          <AccordionItemButton>
                              Related Brand
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel className='flex flex-col items-center justify-center gap-3 px-5 py-2'>
                    <p>Paracetamol Tablet</p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Powder</p>
                          <p className='w-full px-4 text-gray-50 bg-blue-400 rounded-md flex items-center justify-between'>Aceclofenac
                          <MdOutlineClose />
                          </p>
                    <p>Paracetamol Syrup</p>
                    <p>Paracetamol Syrup</p>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        </div>
      </>
  )
}

export default Sidebar