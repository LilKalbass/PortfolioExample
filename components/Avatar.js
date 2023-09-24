import Image from "next/image"
const Avatar = () => {
  return (
      <div>
        <Image src ={ '/avatar.png'}
               alt = 'avatar_img'
               width = {740}
               height = {680}
               className = 'translate-z-0 w-full h-full'
        />
      </div>
  )
};

export default Avatar;
