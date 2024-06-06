import { motion } from 'framer-motion'
import { Power4 } from 'gsap';
import React, { useState } from 'react';

function feature() {
    const [Hovering, setHovering] = useState(false);
    const [Hover, setHover] = useState(false)
  return (
    <div className='w-full py-[8vw] '>
        <div className='w-full px-20 border-b-[1px] border-zinc-500 pb-10'>
            <h1 className='text-6xl font-["neue"] tracking-tight'>Featured projects</h1>
        </div>

        <div className='cards w-full flex gap-8 mt-10 px-20'>
        

            <div onMouseEnter={()=> setHovering(true)} onMouseLeave={()=> setHovering(false)} className="card  w-1/2 h-[80vh] relative " >
                <h1 className='absolute flex overflow-hidden  z-[10] text-[9vw] font-["founders"] tracking-tight left-full -translate-x-1/2 top-[50%] -translate-y-1/2 text-[#CDEA68] '>
                {'FYDE'.split('').map((item,index) =>(
                <motion.span initial={{y:'100%'}} animate={ Hovering ? {y:'0%'} : {y:'100%'}} transition={{ease:[0.22, 1, 0.36, 1] , delay:index*0.06}}  className='inline-block '>{item}</motion.span>
                ))}
                </h1>
                <motion.div initial={{height:'100%'}} animate={Hovering ? {scale:0.95} : {scale:1}} transition={{ease:[0.12, 0, 0.39, 0] , duration:0.4}} className="w-full h-full bg-green-600  rounded-xl overflow-hidden">
                    <motion.img initial={{scale:1}} animate={Hovering ? {scale:1.1} : {scale:1}} transition={{ease:[0.12, 0, 0.39, 0] , duration:0.4}} src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt=""  className='w-full h-full bg-cover position-center'/>
                </motion.div>
            </div>


            <div onMouseEnter={()=> setHover(true)} onMouseLeave={()=>setHover(false)} className="card w-1/2 h-[80vh] relative " >
            <h1 className='absolute  z-[10] text-[9vw] font-["founders"] flex tracking-tight overflow-hidden right-full translate-x-1/4 top-1/2 -translate-y-1/2 text-[#CDEA68] '>
            {'VISE'.split('').map((item,index) =>(
                <motion.span initial={{y:'100%'}} animate={Hover ? {y:'0%'} : {y:'100%'}} transition={{ease:[0.22, 1, 0.36, 1] ,delay: index*0.06}} className='inline-block'>{item}</motion.span>
            ))}
            </h1>
                <motion.div initial={{height:'100%'}} animate={Hover ? {scale:0.95} : {scale:1}} transition={{ease:[0.12, 0, 0.39, 0] , duration:0.4}} className=" image-div w-full h-full  rounded-xl overflow-hidden">
                    <motion.img initial={{scale:1}} animate={Hover ? {scale:1.1} : {scale:1}} transition={{ease:[0.12, 0, 0.39, 0] , duration:0.4}} src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="Image" className='w-full h-full bg-cover' />
                </motion.div>
            </div>
            

        </div>
    </div>
  )
}

export default feature