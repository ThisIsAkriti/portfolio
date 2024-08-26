import { motion } from "framer-motion"
const Stats = () => {
  return (
    <div className="lg:border-l lg:border-l-slate-400 pb-10 items-center flex justify-center md:px-6 pt-20 text-gray-300" name="about">
        <div>
            <div>
                <div className="grid grid-cols-10 gap-x-2 mx-4 md:mx-0">
                    
                    <motion.div
                    whileInView = {{opacity:1 , y:0}}
                    initial= {{opacity:0 , y:-100}}
                    transition={{duration:1.2}}  
                    className="bg-gray-800 p-4 col-span-3 rounded-md">
                        <a href="https://github.com/ThisIsAkriti">
                        <img className="size-10 " src="/githubWhiteBorder.png" alt="github" />
                        <div className="mt-1">
                        <p className="font-bold">Github</p>
                        <p className="font-semibold text-sm">@ThisIsAkriti</p>
                        </div>
                        </a>
                       
                    </motion.div>
                   

                    <motion.div
                     whileInView = {{opacity:1 , x:0}}
                     initial= {{opacity:0 , x:100}}
                     transition={{duration:1.2}} 
                     className="col-span-7 bg-gray-800 rounded-md px-3 pt-2">
                        <div className="flex items-center justify-center">
                            <img src="/gitStats.png" alt="GitStats" className="h-[88px] w-full"/>
                        </div>
                        <p className="font-semibold text-sm">My github status!</p>
                       
                    </motion.div>
                </div>
                <div className="grid grid-cols-2 gap-x-2 mx-4 my-1 md:mx-0">
                    <motion.div
                     whileInView = {{opacity:1 , x:0}}
                     initial= {{opacity:0 , x:-100}}
                     transition={{duration:1.2}} 
                     className="bg-blue-600 rounded-md flex flex-col  py-3">
                        <img src="/in.png" alt="Linkdin" className="size-8 ml-1" />
                        <p className=" text-xs mx-2 font-semibold"> I’m more of a silent observer than an active poster here😁!</p>
                    </motion.div>
                    <motion.div 
                     whileInView = {{opacity:1 , x:0}}
                     initial= {{opacity:0 , x:100}}
                     transition={{duration:1.2}} 
                     className="bg-gray-900 rounded-md flex items-center py-1">
                        <a href="https://x.com/Akriti06005">
                        <img src="/X.png" alt="Twitter" className="size-8 ml-1"/>
                        <div className="mx-2">
                        <p className="font-bold text-sm">akriti <span className="text-red-900">(acitve here)😊</span></p>
                        <p className="font-semibold text-xs">@Akrtiti06005</p>
                        </div>
                        </a>
                        
                    </motion.div>
                </div>
            </div>

            <motion.div 
                whileInView = {{opacity:1 , y:0}}
                initial= {{opacity:0 , y:100}}
                transition={{duration:1.2}} >

                <div className=" bg-gray-800 mx-4 px-2 py-2 rounded-md flex flex-col items-center justify-center md:mx-0">
                    <p className=" font-bold text-lg"># H A S H N O D E #</p>
                    <p className="text-sm">Let's share knowledge here!🎉</p>
                   
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Stats
