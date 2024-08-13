import { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const ProjectData =[
  {
    id:1,
    title:"PixoSpark",
    description:"A dynamic, React Vite-powered platform that brings a quirky twist to video streaming. It delivers fresh, engaging content in real-time, making it YouTube’s fun and innovative cousin.",
    img:"/pixospark.png",
    tag:["All" , "Reactjs"],
    gitUrl:"https://github.com/ThisIsAkriti/PixoSpark",
    previewUrl:"https://pixo-spark-git-main-akritis-projects-4bba2b9f.vercel.app/"
  },
  {
    id:2,
    title:"OkieDokie Foodie",
    description:"A dynamic React-based application that seamlessly integrates live API to fetch real-time data, offering users the latest information on restaurant options.",
    img:"/okiedokie.png",
    tag:["All" , "Reactjs" , "Basic"],
    gitUrl:"https://github.com/ThisIsAkriti/React-js",
    previewUrl:"https://okiedokie-food.web.app/"
  },
  {
    id:3,
    title:"Fitpass",
    description:"An engaging multi-page fitness and gym application that offers a seamless user experience, promoting health and wellness through intuitive and visually appealing interfaces.",
    img:"/fitnessapp.png",
    tag:["All" , "Nextjs" ,"Basic"],
    gitUrl:"/https://github.com/ThisIsAkriti/my-next-app",
    previewUrl:"https://fitlifefitnessapp-git-main-akritis-projects-4bba2b9f.vercel.app/"
    
  },
  {
    id:4,
    title:"Movieflix",
    description:"A sleek, platform with an amazing UI that redefines your movie-watching experience. Utilizing the live TMDB API, MovieFlix delivers the latest data directly to your screen in real-time.",
    img:"/movieflix.png",
    tag:["All" , "Reactjs"],
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
    <div className="border-l border-l-gray-100 pb-10">
      <h1 className="text-center text-4xl font-semibold mb-8">My Projects</h1>
      <div className="flex flex-row justify-center md:gap-x-10 gap-x-4 mb-8 ">
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
        name="Reactjs"
        isSelect = {tag === "Reactjs"}
        />
        <ProjectTag 
        onClick = {handleTagChange}
        name="Nextjs"
        isSelect = {tag === "Nextjs"}
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12 mx-6">
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
