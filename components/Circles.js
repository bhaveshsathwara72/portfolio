// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div 
      className="absolute right-0 -bottom-0 -rotate-0 animate-pulse duration-75 z-10 w-[150px] xl:w-[200px] invisible md:visible">
      <Image src={'/right-1.png'} 
      alt= 'text'
      width={200} 
      height={200} 
      className="w-full  h-full" />
    </div>
  )
};

export default Circles;