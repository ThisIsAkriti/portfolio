import { motion } from "framer-motion"
import { Link } from "react-scroll"

const container = (delay)=> ({
  hidden:{x:-100 , opacity:0},
  visible:{
    x:0,
    opacity:1, 
    transition:{duration:0.5 , delay:delay}
  }
})

const Left = () => {
  return (
    <div className="fixed lg:w-64 md:w-52 2xl:w-[20%] h-screen flex flex-col items-center justify-center text-gray-200 z-30">
    
      <motion.img
        variants = {container(0.3)}
        initial= 'hidden'
        animate = "visible"
       src="/pfp.webp" alt="profile" className=" h-40 2xl:h-[200px] -mt-4 mb-16"
      />

      <div className=" flex flex-col items-start gap-y-3 2xl:gap-y-4 font-semibold text-xl mb-16 2xl:text-4xl">
        <motion.div className="flex justify-center items-center gap-x-3"
         variants = {container(0.6)}
         initial= 'hidden'
         animate = "visible"
        >
          <img className="w-10 size-10 2xl:size-16" src="/home.png" alt="icon_Home" />
          <Link to="home"><p className=" cursor-pointer">HOME</p></Link>
        </motion.div>

        <motion.div className="flex justify-center items-center gap-x-3"
          variants = {container(1.2)}
          initial= 'hidden'
          animate = "visible"
        >
          <img className="w-10 size-10 2xl:size-16"  src="/project.png" alt="icon_Project" />
          <Link to="projects"><p className=" cursor-pointer">PROJECTS</p></Link>
        </motion.div>

        <motion.div className="flex justify-center items-center gap-x-3"
        variants = {container(1.5)}
        initial= 'hidden'
        animate = "visible"
        >
          <img className="w-10 size-9  2xl:size-16" src="/about_me.png" alt="icon_aboutMe" />
          <Link to="about"><p className=" cursor-pointer">ABOUT ME</p></Link>
        </motion.div>
      </div>
      
      
      <div className="flex flex-col" 
      >

        <motion.div
        variants = {container(1.8)}
        initial= 'hidden'
        animate = "visible"
        className="flex mb-4 gap-x-4 2xl:gap-x-10">
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-md active:shadow-none p-1">
          <Link to="technologies">
            <img src="/techStack.png" alt="techStack" className="size-10 2xl:size-20" />
          </Link>
        </div>
        
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-md active:shadow-none p-1 h-fit">
          <Link to="contact">
            <img src="/contact.png" alt="contact" className="size-10  2xl:size-20" />
          </Link>
        </div>
        </motion.div>
       
       
        <motion.div className="flex gap-x-4 2xl:gap-x-10"  
        variants = {container(2)}
        initial= 'hidden'
        animate = "visible">
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-md active:shadow-none">
          <a href="https://x.com/Akriti06005">
            <img src="/twitter_white.png" alt="twitter_icon" className=" 2xl:size-20" />
          </a>
        </div>
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-full active:shadow-none">
          <a href="https://github.com/ThisIsAkriti">
            <img src="/github_white.png" alt="gitHub_icon" className=" 2xl:size-20"  />
          </a>
        </div>
        </motion.div>
       
        
      </div>
    </div>
  )
}

export default Left;
