import { motion, useMotionValue, useTransform } from 'framer-motion'
import './App.css'

function App() {
  const x = useMotionValue(0)
  const opacity = useTransform(x, [-100, 0, 100], [0, 1, 0])
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

    </>

  )
}

export default App
