import React from 'react'
import { FaRegFileAlt } from 'react-icons/fa'
import { IoClose } from 'react-icons/io5'
import { LuDownload } from 'react-icons/lu'
import { motion } from 'framer-motion'

const Card = ({data, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='sm:w-50 sm:h-62 w-35 h-41 rounded-2xl bg-zinc-900/90 text-white p-5 relative overflow-hidden flex-shrink-0 cursor-grab'>
        <FaRegFileAlt/>
        <p className='text-[0.5rem] sm:text-xs mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex justify-between items-center p-5 mb-8'>
                <h5 className='sm:text-xs text-[0.7rem]'>{data.filesize}</h5>
                <span className='flex items-center justify-center rounded-full bg-zinc-600 text-white sm:p-2 p-1'>
                {data.close ? <IoClose size={12}/> : <LuDownload size={12}/>}
                
                </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-2 ${data.tag.tagColor  === "blue" ? 'bg-blue-600' : "bg-green-600"} absolute bottom-0 flex justify-center items-center ${data.tag.tagColor  === "blue" ? 'hover:bg-blue-700' : "hover:bg-green-700"} transition-all duration-200 cursor-pointer`}>
                <h3 className='font-semibold text-sm'>{data.tag.tagTitle}</h3>
            </div>
            )}
        </div>
    </motion.div>
  )
}

export default Card