// next image 
import Image from "next/image";


const TopLeftImg = () => {
  return (

    <div className="absolute left-0 top-0  z-10 w-[120px] xl:w-[200px]  click-disable" >
      <Image src='/sortimage-1.png' width={230} height={300} alt='text' />
    </div>
  );
};

export default TopLeftImg;
