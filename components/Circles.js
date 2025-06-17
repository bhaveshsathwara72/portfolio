// next image
import Image from "next/image";

const Circles = () => {
  return (
    <div 
      className="w-[200px] xl: h-[185pxpx] absolute right-5 -bottom-0 -rotate-12 animate-pulse duration-75 z-10 invisible md:visible">
      <Image src={'/rightside.png'} 
      alt= 'text'
      width={200} 
      height={200} 
      className="w-full  h-full" />
    </div>
  )
};

export default Circles;
