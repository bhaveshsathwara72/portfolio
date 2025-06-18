// next image
import Image from "next/image";

//next Link
import Link from "next/link";

// components
import Socials from '../components/Socials';


const Header = () => {
  return (
    <header className='absolute z-30 w-full flex items-center px-16 xl:px-0 xl: h-[90px]'>
      <div className='container mx-auto '>
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 px-8 ">
          {/* logo */}
          <Link href={'/'}>
          <div className="md:text-3xl text-lg font-bold">
            Bhavesh <span className="text-accent">Sathwara.</span>
          </div>
            {/* <Image src={'/logo.svg'} 
            width={220} 
            height={48}
            alt='text' 
            priority={true} /> */}
          </Link>
          {/* socials */}
            <Socials />
        </div>
      </div>
    </header>
  )
};

export default Header;
