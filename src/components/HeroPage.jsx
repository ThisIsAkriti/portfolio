import { motion } from "framer-motion"
import { Link } from "react-scroll"
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
    <div className="relative border-l border-l-slate-400 md:min-h-screen h-[700px] xl:text-7xl lg:text-7xl md:text-6xl text-4xl md:mt-0 -mt-10" name="home">

      <div className=" pt-20 flex text-gray-300 md:gap-x-6 gap-x-2 justify-center lg:hidden">
        <motion.div className="flex justify-center items-center gap-x-1 pr-2 border-b border-b-slate-600 hover:border-b-pink-600 "
         variants = {container(0.6)}
         initial= 'hidden'
         animate = "visible"
        >
          <img className="size-6" src="/home.png" alt="icon_Home" />
          <Link to="home"><p className=" cursor-pointer md:text-lg text-sm font-semibold ">HOME</p></Link>
        </motion.div>

        <motion.div className="flex justify-center items-center gap-x-1 pr-2 border-b border-b-slate-600 hover:border-b-pink-600 "
          variants = {container(1.2)}
          initial= 'hidden'
          animate = "visible"
        >
          <img className="size-6"  src="/project.png" alt="icon_Project" />
          <Link to="projects"><p className=" cursor-pointer md:text-lg text-sm font-semibold">PROJECTS</p></Link>
        </motion.div>

        <motion.div className="flex justify-center items-center gap-x-1 pr-2 border-b border-b-slate-600 hover:border-b-pink-600 "
        variants = {container(1.5)}
        initial= 'hidden'
        animate = "visible"
        >
          <img className="size-6" src="/about_me.png" alt="icon_aboutMe" />
          <Link to="about"><p className=" cursor-pointer md:text-lg text-sm font-semibold">ABOUT ME</p></Link>
        </motion.div>

        <div className="border-b border-b-slate-600 hover:border-b-pink-600 p-1 h-fit">
          <Link to="contact">
            <img src="/contact.png" alt="contact" className="size-8" />
          </Link>
        </div>
        
      </div>

      <div className="flex flex-col justify-center -mt-16 md:-mt-32 lg:mt-0 items-center h-full">

        <div className=" w-[400px] sm:w-[600px] md:w-[760px] 2xl:w-[1400px] lg:w-[726px] pr-8 mx-auto text-gray-200 z-20">
          <div className="mb-4 sm:mb-0 flex justify-center sm:justify-end ">
            <img src="/pfp.webp" alt="pfp" className="h-44 flex lg:hidden w-fit  sm:-mb-32" />
          </div>
          
          <motion.p 
          variants = {container(0.8)}
          initial= 'hidden'
          animate = "visible"
          className="text-center sm:text-start lg:text-center font-semibold sm:mb-6  lg:mb-10 mb-4 2xl:text-9xl ">&lt;Hello, I'm <span className=" text-pink-700 font-semibold">Akriti</span>!&gt;
          </motion.p>
          
          <motion.p
          variants = {container(1.5)}
          initial= 'hidden'
          animate = "visible" 
          className=" font-semibold sm:mb-6 lg:mb-10 mb-4 text-center sm:text-start lg:text-center 2xl:text-9xl">&lt;<span className="   text-pink-800">Reactjs</span> Developer.&gt;</motion.p>
          
          <motion.p 
          variants = {container(2)}
          initial= 'hidden'
          animate = "visible" className=" lg:font-bold font-semibold ml-2 text-center sm:text-start lg:text-center 2xl:text-8xl xl:text-6xl lg:text-5xl md:text-4xl text-3xl ">Consistently Innovating, Crafting, and Advancing🌱
          </motion.p>
        </div>

        <div className=" w-full overflow-hidden  whitespace-nowrap" >
          <motion.div
          variants= {slideVariants} initial = "inital" animate = "animate" 
          className=" absolute md:text-[40vh] text-[30vh] font-bold text-[#1e293b] opacity-40 md:-mt-32 z-10">
          TURNING COFFEE INTO CODE AND DREAMS INTO REALITY!
          </motion.div>
          </div>
        
      </div>


        
    </div>
    </>
  )
}

export default HeroPage
