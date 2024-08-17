import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';
import { motion } from "framer-motion";
const Contact = () => {

    const [success , setSuccess] = useState(false);
    const [error , setError] = useState(false);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        setSuccess(false);
        setError(false)
        emailjs
        .sendForm(import.meta.env.VITE_id, import.meta.env.VITE_TemplateId , form.current, {
            publicKey: import.meta.env.VITE_publicKEY 
        })
        .then(
            () => {
            setSuccess(true);
            form.current.reset()
            },
            () => {
            setError(true)
            },
        );
    };

  return (
    <form ref={form} onSubmit={sendEmail} action="#">
        <div className="border-l border-l-blue-300 h-[740px] text-gray-400">

            <div className="flex flex-col justify-center h-full">
                <motion.h1
                 whileInView = {{opacity:1 , y:0}}
                 initial= {{opacity:0 , y:-100}}
                 transition={{duration:1}} 
                 className="font-bold md:text-4xl text-2xl pt-10 md:mb-14 mb-10 text-center ">&lt;Let’s Spark Some Ideas Together!✨&gt;</motion.h1>
                <div className=" md:grid md:grid-cols-5 place-items-center flex flex-col">

                    <div className="flex flex-col col-span-2 justify-center">
                        <motion.h1
                         whileInView = {{opacity:1 , x:0}}
                         initial= {{opacity:0 , x:-100}}
                         transition={{duration:0.5}} 
                         className="md:text-4xl text-3xl font-semibold mb-2 text-center">Get In Touch!</motion.h1>
                        <motion.p
                         whileInView = {{opacity:1 , x:0}}
                         initial= {{opacity:0 , x:-100}}
                         transition={{duration:1}} 
                         className="text-center text-sm md:text-md font-semibold md:w-64 w-[360px]">Whether you have a question, a project idea, or just want to say hi, I’m all ears!🐰🐰 </motion.p>
                    </div>
                    <div className="flex justify-center col-span-3">
                        <div className=" flex flex-col justify-center md:w-[550px] w-[420px]">
                            <motion.div
                             whileInView = {{opacity:1 , x:0}}
                             initial= {{opacity:0 , x:100}}
                             transition={{duration:0.5}} 
                             className="mx-8 my-4 mt-10 border border-pink-800 rounded-md p-1 ">
                                <input type="name"
                                name="from_name" placeholder="Name" 
                                autoComplete="off"
                                required
                                className="outline-none text-pink-900 p-4 w-full rounded-md bg-transparent" />
                            </motion.div>
                            <motion.div
                             whileInView = {{opacity:1 , x:0}}
                             initial= {{opacity:0 , x:100}}
                             transition={{duration:0.8}} 
                             className="mx-8 my-4 border border-pink-800 rounded-md p-1 ">
                                <input
                                name="email" type="email" placeholder="Email" 
                                autoComplete="off"
                                required
                                className="outline-none text-pink-900 p-4 w-full rounded-md bg-transparent" />
                            </motion.div>
                            <motion.div
                             whileInView = {{opacity:1 , x:0}}
                             initial= {{opacity:0 , x:100}}
                             transition={{duration:1}}  className="mx-8 my-4 border  border-pink-800 rounded-md p-1 ">
                                <textarea
                                name="message"
                                type="text" placeholder="Got something to say?" 
                                autoComplete="off"
                                required
                                className="outline-none text-pink-900 p-4 w-full rounded-md bg-transparent" rows={3} />
                            </motion.div>

                            <motion.div
                             whileInView = {{opacity:1 , y:0}}
                             initial= {{opacity:0 , y:100}}
                             transition={{duration:1.2}}  className="mx-8 my-4 border-t shadow-md shadow-pink-900  active:shadow-none active:border hover:opacity-80 border-pink-800 rounded-md">
                                <button className="outline-none text-pink-900 p-4 w-full font-semibold text-xl " >Send</button>
                            </motion.div>
                            {success && <span className="text-green-700 text-center font-semibold">Your message has been sent Successfully!✅</span>}
                            {error && <span className="text-red-700 text-center font-semibold">Something went wrong❗</span>}
                        </div>
                    </div>

                </div>
            </div>

        </div>
    </form>
   
  )
}

export default Contact
