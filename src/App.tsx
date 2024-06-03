import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion'
import './App.css'
import { useRef } from 'react'

function App() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
  const containerRef = useRef()
  const {scrollYProgress} = useScroll({container:containerRef})
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,
    damping:10
  })
  return (
    <>
      <motion.h1
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ duration: .4 }}
        className='text-center mt-6 text-3xl font-bold'>Learning Framer motion</motion.h1>
      <div className='w-full flex flex-col justify-center items-center mt-4'>
        <p>Drag the box</p>
        <motion.div
          style={{
            x,
            opacity,
            height: 100,
            width: 100,
            background: 'red'
          }}
          drag = 'x'
          dragConstraints={{left:0, right:2, top:2, bottom:2}}
        />
      </div>
    
        <div className='w-[60%] mx-auto relative mt-10' >
          <motion.div style={{scaleX}} className='absolute -top-3 left-0 right-0 bg-fuchsia-900 h-2 origin-left z-50 w-full mx-auto'></motion.div>
          <div className='overflow-scroll h-96' ref={containerRef}>
          {Array.from({length:20}).map((_,i)=>(
            <p className='mt-2' key={i}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam, ratione asperiores. Obcaecati corporis ad vero! Quo animi dignissimos eaque aut! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, sed perferendis architecto accusantium earum consequuntur dolor! Odit placeat accusantium incidunt. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur, sunt?</p>
          ))}
          </div>
          <p></p>
        </div>
    </>

  )
}

export default App
 