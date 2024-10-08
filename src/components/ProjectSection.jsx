import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"
import { motion } from "framer-motion"

const ProjectData =[
  {
    id:1,
    title:"PixoSpark",
    description:"A dynamic, React Vite-powered platform that brings a quirky twist to video streaming. It delivers fresh, engaging content in real-time, making it YouTube’s fun and innovative cousin.",
    img:"/pixospark.png",
    tag:["All" , ".Reactjs"],
    gitUrl:"https://github.com/ThisIsAkriti/PixoSpark",
    previewUrl:"https://pixo-spark-git-main-akritis-projects-4bba2b9f.vercel.app/"
  },
  {
    id:2,
    title:"Random_Password Generator",
    description:"A dynamic React-based password Generator! Something fun!",
    img:"/passwordGen.png",
    tag:["All" , ".Reactjs" , "Basic"],
    gitUrl:"https://github.com/ThisIsAkriti/password_generator",
    previewUrl:"https://password-generator-lilac-eight.vercel.app/"
  },
  {
    id:3,
    title:"Fitpass",
    description:"An engaging multi-page fitness and gym application that offers a seamless user experience, promoting health and wellness through intuitive and visually appealing interfaces.",
    img:"/fitnessapp.png",
    tag:["All" , ".Nextjs" ,"Basic"],
    gitUrl:"/https://github.com/ThisIsAkriti/my-next-app",
    previewUrl:"https://fitlifefitnessapp-git-main-akritis-projects-4bba2b9f.vercel.app/"
    
  },
  {
    id:4,
    title:"Movieflix",
    description:"A sleek, platform with an amazing UI that redefines your movie-watching experience. Utilizing the live TMDB API, MovieFlix delivers the latest data directly to your screen in real-time.",
    img:"/movieflix.png",
    tag:["All" , ".Reactjs"],
    gitUrl:"https://github.com/ThisIsAkriti/MovieMates",
    previewUrl:"https://movie-mates.vercel.app/"
  },
]

const ProjectSection = () => {
  const [tag , setTag] = useState("All")
  const handleTagChange = (newTag) => {

    setTag(newTag)

  }

  const filterProject = ProjectData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <div className=" border-l border-l-slate-400 py-10 text-gray-200 px-4 2xl:px-0" name="projects">
      <motion.h1
      whileInView = {{opacity:1 , y:0}}
      initial= {{opacity:0 , y:-100}}
      transition={{duration:1}} 
      className="text-center text-4xl font-semibold mb-8">My Projects</motion.h1>


      <motion.div
       whileInView = {{opacity:1 , x:0}}
       initial= {{opacity:0 , x:-100}}
       transition={{duration:1}} 
       className="flex flex-row justify-center md:gap-x-10 gap-x-4 mb-8 text-semibold ">
        <ProjectTag 
        onClick = {handleTagChange}
        name="All"
        isSelect = {tag === "All"}
        />
        <ProjectTag 
        onClick = {handleTagChange}
        name="Basic"
        isSelect = {tag === "Basic"}
        />
        <ProjectTag 
        onClick = {handleTagChange}
        name=".Reactjs"
        isSelect = {tag === ".Reactjs"}
        />
        <ProjectTag 
        onClick = {handleTagChange}
        name=".Nextjs"
        isSelect = {tag === ".Nextjs"}
        />
      </motion.div>


      <div className="grid md:grid-cols-2 2xl:w-[1200px] 2xl:gap-x-20 mx-auto gap-x-10">
      {filterProject.map((project)=>(
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          img={project.img}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          tags={project}
        />
      ))}
      </div>
      
    </div>
  )
}

export default ProjectSection
