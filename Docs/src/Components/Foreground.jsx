import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

    const ref = useRef(null);

    const data = [
        { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eius.", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, },
        { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eius.", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" }, },
        { desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, eius.", filesize: ".9mb", close: true, tag: { isOpen: true, tagTitle: "Download Now", tagColor: "blue" }, },
    ]

  return (
    <div ref={ref} className='w-full h-full fixed z-[3] flex sm:gap-10 gap-3 p-5 flex-wrap'> 
        {data.map((item, index) => (
            <Card key={index} data={item} reference={ref} />
        ))}
    </div>
  )
}

export default Foreground