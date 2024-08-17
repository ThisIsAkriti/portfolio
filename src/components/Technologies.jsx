import {motion} from "framer-motion";
import { Youtube } from "lucide-react";

const iconVariants = (duration) => ({
  initial:{y:-10},
  animate:{
    y:[10 , -10],
    transition:{
      duration:duration,
      ease:'linear',
      repeat: Infinity,
      repeatType:"reverse",
    },
  },
})
const Technologies = () => {
  return (
    <div className="border-l border-l-slate-400 h-[550px] flex flex-col justify-center text-gray-400">
      <motion.p
      whileInView = {{opacity:1 , y:0}}
      initial= {{opacity:0 , y:-100}}
      transition={{duration:1.5}}
      className="text-center font-semibold md:text-6xl text-4xl pb-16">Technologies</motion.p>

      <motion.div 
      whileInView = {{opacity:1 , x:0}}
      initial= {{opacity:0 , x:-100}}
      transition={{duration:1}}
      > 
        
        <p className="flex items-center justify-center gap-12 flex-wrap  px-4"> 
          <motion.div
           variants={iconVariants(1.5)}
           initial= "initial"
           animate= "animate"
           className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="60" height="60"/> </a> 
          </motion.div>
          
          <motion.div
            variants={iconVariants(2)}
            initial= "initial"
            animate= "animate"

            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="60" height="60"/></a> 
          </motion.div>

          <motion.div
            variants={iconVariants(2.5)}
            initial= "initial"
            animate= "animate"

            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="60" height="60"/> </a> 
          </motion.div> 
          
          <motion.div
            variants={iconVariants(3)}
            initial= "initial"
            animate= "animate"

            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="60" height="60"/> </a>   
          </motion.div>

          <motion.div
            variants={iconVariants(3.5)}
            initial= "initial"
            animate= "animate"

            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 "> 
            <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="60" height="60"/> </a> 
            
          </motion.div>

          <motion.div
            variants={iconVariants(4)}
            initial= "initial"
            animate= "animate"
            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="60" height="60"/> </a> 

          </motion.div>

          <motion.div
            variants={iconVariants(4.5)}
            initial= "initial"
            animate= "animate"

            className="border-t shadow-md shadow-pink-800 border-pink-800 rounded-md px-2 py-2 ">
            <a href="https://nextjs.org/" target="_blank"  rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/nextjs/nextjs-icon.svg" alt="nextjs" width="60" height="60"/> </a> 
            
          </motion.div>

        </p>
        
      </motion.div>
    </div>
  )
}

export default Technologies
