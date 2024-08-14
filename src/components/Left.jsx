
const Left = () => {
  return (
    <div className="fixed lg:w-64 md:w-52 bg-black h-screen flex flex-col items-center justify-center">
    
    <img src="/pfp.webp" alt="profile" className=" h-40 -mt-20 mb-12"/>

    <div className=" flex flex-col items-start gap-y-3 font-semibold text-xl mb-20">
      <div className="flex justify-center items-center gap-x-3">
        <img className="w-10 size-10" src="/home.png" alt="icon_Home" />
        <p className=" cursor-pointer">HOME</p>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <img className="w-10 size-10"  src="/project.png" alt="icon_Project" />
        <p className=" cursor-pointer">PROJECTS</p>
      </div>
      <div className="flex justify-center items-center gap-x-3">
        <img className="w-10 size-9" src="/about_me.png" alt="icon_aboutMe" />
        <p className=" cursor-pointer">ABOUT ME</p>
      </div>
    </div>
    
    
      <div className="flex gap-x-2">
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-md active:shadow-none">
          <a href="https://x.com/Akriti06005">
            <img src="/twitter_white.png" alt="twitter_icon" />
          </a>
        </div>
        <div className="hover:border-t hover:shadow-md hover:shadow-pink-800 hover:border-pink-800 hover:rounded-full active:shadow-none">
          <a href="https://github.com/ThisIsAkriti">
            <img src="/github_white.png" alt="gitHub_icon" />
          </a>
        </div>
        
      </div>
    </div>
  )
}

export default Left;
