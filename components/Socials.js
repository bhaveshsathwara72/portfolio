//next links
import Image from "next/image";
import Link from "next/link";

//social icon
import { 
  RiBehanceLine, 
  RiDribbbleLine, 
  RiFacebookLine, 
  RiInstagramLine, 
  RiPinterestLine, 
  RiYoutubeLine } from 'react-icons/ri';


const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={'https://www.freelancer.in/u/sathwarainfotech?sb=t'} 
      >
      <Image
          src={'/freelancer.png'}
          width={30}
          height={30}
          alt="Project Icon"
          className="w-[32px] md:w-[35px] h-auto rounded-lg p-2 hover:bg-accent transition-all duration-300"
        />
      </Link>
      <Link href={'https://www.fiverr.com/sathwara72?public_mode=true'} 
      >
        <Image
          src={'/fiverr.png'}
          width={30}
          height={30}
          alt="Project Icon"
          className="w-[32px] md:w-[35px] h-auto rounded-lg p-2 hover:bg-accent transition-all duration-300"
        />
      </Link>
      <Link href={'https://www.upwork.com/freelancers/~0166e789656f5244db?viewMode=1'} 
      >
          <Image
          src={'/upwork.png'}
          width={30}
          height={30}
          alt="Project Icon"
          className="w-[32px] md:w-[35px] h-auto rounded-lg p-2 hover:bg-accent transition-all duration-300"
        />
      </Link>
    </div>
  )
};

export default Socials;
