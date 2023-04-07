import { motion,AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import state from "../store";
import { CustomButton } from "../components";
import { 
    headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation } from "../config/motion";


const Home = () => { 
    const snap=useSnapshot(state);
    
    
  return (
    <AnimatePresence>
        {snap.intro && (
            <motion.section className="home" {...slideAnimation('left')}>
                <motion.header className=" inline-flex gap-2" {...slideAnimation('down')}>
                    <img  
                    src="./github.png"
                    alt="logo"
                    className="w-8 h-8  object-contain"
                    />
                    <a href="https://github.com/GodoyMS/shirt-ai-generator" target="_blank" className="text-gray-500 text-base rounded-md bg-slate-200 p-2 hover:bg-slate-300 cursor-pointer">Star it on Github</a>


                </motion.header>
                <motion.div className="home-content"
                {...headContainerAnimation}>
                    <motion.div {...headTextAnimation}>
                        <h2 className="head-text">
                            3D SHIRT DESING <br className="xl:block hidden"/>
                            GENERATOR
                        </h2>

                    </motion.div>
                    <motion.div
                     {...headContentAnimation} 
                     className="flex flex-col gap-5"
                    >
                            <p className="max-w-md font-normal text-gray-600 text-base">
                                        Create a 3D shirt and customize it as you want. <strong>Powered by OpenAI image generator API.</strong>{" "}
                        </p>                        <CustomButton 
                            type="filled"
                            title="Playground"
                            handleClick={()=>state.intro=false}
                            customStyles="w-fit px-4 py-2.5 font-bold text-sm"

                        
                        />
                    </motion.div>

                </motion.div>
                <motion.div className=" inline-flex gap-2 w-full text-gray-500" {...slideAnimation('up')}>
                    Developed by<a className="text-slate-800" href={"https://www.linkedin.com/in/godoy-liam-solorzano/"} target="_blank">Godoy Muñoz</a> 

                </motion.div>
            </motion.section>
        )}
    </AnimatePresence>
  )
}

export default Home