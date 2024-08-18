import { motion } from "framer-motion"

const container = (delay)=> ({
  hidden:{x:100 , opacity:0},
  visible:{
    x:0,
    opacity:1, 
    transition:{duration:1 , delay:delay}
  }
})

const slideVariants = {
  initial:{
    x:0,
  },
  animate:{
    x:"-95%",
    transition:{
      duration:24,
      repeat:Infinity,
    }
  }
}
const HeroPage = () => {
  return (
    <>
    <div className="relative min-h-screen border-l border-l-slate-400">
      <div className="flex flex-col lg:justify-center pt-28 lg:pt-0 items-center h-screen">
        <div className=" w-[400px] sm:w-[500px] md:w-[580px] lg:w-4/5 text-gray-400 ">
          <div className="mb-4 sm:mb-0 flex justify-center sm:justify-end ">
            <img src="/pfp.webp" alt="pfp" className="h-44 flex lg:hidden w-fit  sm:-mb-32" />
          </div>
          <motion.p 
          variants = {container(0.8)}
          initial= 'hidden'
          animate = "visible"
          className="text-center sm:text-start lg:text-center lg:text-6xl md:text-5xl text-4xl font-semibold sm:mb-6 lg:mb-10 mb-4 ">&lt;Hello, I'm <span className=" text-pink-700 lg:text-6xl md:text-5xl text-4xl font-semibold">Akriti</span>!&gt;
          </motion.p>
          <motion.p
          variants = {container(1.5)}
          initial= 'hidden'
          animate = "visible" 
          className="lg:text-6xl md:text-5xl text-4xl  font-semibold sm:mb-6 lg:mb-10 mb-4 text-center sm:text-start lg:text-center ">&lt;<span className="   text-pink-800">Reactjs</span> Developer.&gt;</motion.p>
          <motion.p 
          variants = {container(2)}
          initial= 'hidden'
          animate = "visible" className="md:text-3xl sm:text-2xl text-xl lg:font-bold font-semibold ml-2 text-center sm:text-start lg:text-center ">Consistently Innovating, Crafting, and Advancing🌱
          </motion.p>
        </div>

        <div className=" w-full overflow-hidden" >
          <motion.div
          variants= {slideVariants} initial = "inital" animate = "animate" 
          className=" absolute whitespace-nowrap md:text-[40vh] text-[40vh] font-bold text-[#1e293b] opacity-30 -mt-32">
          Turning coffee into code and dreams into reality!
          </motion.div>
          </div>
        
      </div>
        
    </div>
    </>
  )
}

export default HeroPage
