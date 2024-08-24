
import {CodeBracketIcon} from "@heroicons/react/24/outline"
import { EyeIcon } from "lucide-react"
import { motion } from "framer-motion"
const ProjectCard = ({title , description , img ,gitUrl , previewUrl }) => {
  return (
    <motion.div
      whileInView = {{opacity:1 , y:0}}
      initial= {{opacity:0 , y:-100}}
      transition={{duration:1}} 
      className="mx-auto border-b border-b-slate-600 hover:border-b-pink-600 my-6 2xl:my-20 min-w-[200px] max-w-[1200px] 2xl:h-[800px] 2xl:flex 2xl:flex-wrap 2xl:flex-col" >
      <div className="h-[200px] md:h-[200px] 2xl:h-[500px] relative rounded-tr-xl rounded-tl-xl group rounded-sm" style={{background: `url(${img})` , backgroundSize: "cover"}}>

        <div className="overlay flex items-center justify-center absolute left-0 w-full h-full hidden group-hover:flex bg-black group-hover:bg-opacity-80 transition-all duration-500 gap-x-2 rounded-tr-xl rounded-tl-xl">

          <a href={gitUrl} className="border-2 border-gray-300 rounded-full hover:border-pink-500 group/link" target="_blank" rel="noopener noreferrer">
          <CodeBracketIcon className="h-8 w-8 px-1 text-gray-300 m-2 cursor-pointer group-hover/link:text-pink-500"/>
          </a>

          <a href={previewUrl} className="border-2 border-gray-300 rounded-full hover:border-pink-500 group/link" target="_blank" rel="noopener noreferrer">
          <EyeIcon className="h-8 w-8 px-1 text-gray-300 m-2 cursor-pointer group-hover/link:text-pink-500"/>
          </a>

        </div>
      </div>
      <div className=" text-white mb-4 pt-4 2xl:pt-10 px-4">
        <h1 className=" font-semibold text-xl 2xl:text-5xl mb-2 cursor-pointer">{title}</h1>
        <p className="text-sm cursor-pointer 2xl:text-4xl pb-6">{description}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard
