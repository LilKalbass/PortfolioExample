import Image from "next/image";
import Link from "next/link"

import {HiArrowRight} from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
      <div className = 'mx-auto xl:mx-0'>
        <Link className = 'relative w-[200px] h-[200px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group'
              href = {'/work'}
        >
          <Image className = 'animate-spin-slow w-full h-full max-w-[125px] max-h-[150px]'
                 src = {'/rounded-text.png'}
                 alt = 'rounded_text_img'
                 width = {135}
                 height = {150}
          />
          <HiArrowRight className = 'absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
        </Link>
      </div>
  )
};

export default ProjectsBtn;
