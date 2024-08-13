
import {CodeBracketIcon} from "@heroicons/react/24/outline"
import { EyeIcon } from "lucide-react"

const ProjectCard = ({title , description , img ,gitUrl , previewUrl }) => {
  return (
    <div className=" rounded-xl border-t border-t-gray-800 shadow-md shadow-gray-800 p-2 hover:shadow-none hover:border-gray-800 hover:border" >
      <div className="h-52 md:h-72 relative rounded-tr-xl rounded-tl-xl group" style={{background: `url(${img})` , backgroundSize: "cover"}}>

        <div className="overlay flex items-center justify-center absolute left-0 w-full h-full bg-black bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-x-2 rounded-tr-xl rounded-tl-xl">

          <a href={gitUrl} className="border-2 border-gray-300 rounded-full hover:border-white group/link" target="_blank" rel="noopener noreferrer">
          <CodeBracketIcon className="h-8 w-8 px-1 text-gray-300 m-2 cursor-pointer group-hover/link:text-white"/>
          </a>

          <a href={previewUrl} className="border-2 border-gray-300 rounded-full hover:border-white group/link" target="_blank" rel="noopener noreferrer">
          <EyeIcon className="h-8 w-8 px-1 text-gray-300 m-2 cursor-pointer group-hover/link:text-white"/>
          </a>

        </div>
      </div>
      <div className=" text-white mb-4 pt-4 px-4">
        <h1 className=" font-semibold text-xl mb-2">{title}</h1>
        <p className="text-sm line-clamp-2">{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
