// next images
import Image from "next/image";


const Bulb = () => {
  return (
    <div className="absolute -left-28 -bottom-0 rotate-6 animate-pulse duration-75 z-10 w-[300px] xl:w-[280px] invisible md:visible">
      <Image 
       // src={'/side-1.png'} 
      src={'/bulb-1.png'} 
      width={260} 
      height={200}
      alt ='text'
      className="w-full h-full "/>      
    </div>

  );
};

export default Bulb;
//mix-blend-mode: multiply;