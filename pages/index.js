import ProjectsBtn from "../components/ProjectsBtn";
import ParticlesContainer from "../components/ParticlesContainer";
import Avatar from "../components/Avatar";

import {motion} from "framer-motion";
import {fadeIn} from "../variants";

const Home = () => {
  return (
      <div className = 'bg-primary/60 h-full'>
        <div className = 'w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
            <div className = 'text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
                <motion.h1 className = 'h1'
                    variants = {fadeIn('down', 0.2)}
                    initial = 'hidden'
                    animate = 'show'
                    exit = 'hidden'
                >
                    Transforming Ideas <br/> Into{''} <span className = 'text-accent'>Digital Reality</span>
                </motion.h1>
                <motion.p className = 'max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-20'
                          variants = {fadeIn('down', 0.3)}
                          initial = 'hidden'
                          animate = 'show'
                          exit = 'hidden'
                >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Animi aspernatur autem consequuntur deserunt eveniet laborum odio quia quis repellendus voluptas!
                </motion.p>
                <div className = 'flex justify-center xl:hidden relative z-10'>
                    <ProjectsBtn/>
                </div>
                <motion.div variants = {fadeIn('down', 0.4)}
                            initial = 'hidden'
                            animate = 'show'
                            exit = 'hidden'
                            className = 'hidden xl:flex'
                >
                    <ProjectsBtn/>
                </motion.div>
            </div>
        </div>
        <div className = 'w-[1300px] h-full absolute right-0 bottom-0'>
            <div className = 'bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0'></div>
            <ParticlesContainer/>
            <motion.div className = 'w-full h-full max-w-[740px] max-h-[680px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]'
                        variants = {fadeIn('up', 0.5)}
                        initial = 'hidden'
                        animate = 'show'
                        exit = 'hidden'
                        transition ={{duration: 1, ease: 'easeInOut'}}
            >
                <Avatar/>
            </motion.div>
        </div>
      </div>
  )
};

export default Home;
