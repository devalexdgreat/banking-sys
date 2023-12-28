import Image from 'next/image';
import heroPic from '@/public/heroicon.png';
import fastIcon from '@/public/speed.png';
import safeIcon from '@/public/encr.png';
import hideIcon from '@/public/atm.png';
import featIcon from '@/public/features.png';
import Link from 'next/link';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-white">
      <Navbar />
      <div className='w-full'>
        <div className='w-11/12 mx-auto'>
          <div className='w-full flex flex-col md:flex-row gap-12 h-auto md:h-screen pt-32 md:pt-0'>
            <div className='flex items-center h-full w-full md:w-8/12'>
              <div className='w-full'>
                <div className='flex flex-col gap-2 text-3xl md:text-5xl font-extrabold w-full md:w-11/12'>
                  <span>Unmatched security, seamless banking.</span>
                  <span>Your financial confidence, our top priority.</span>
                </div>
                <div className='w-full gap-8 flex mt-10 mb-10'>
                  <div className='flex gap-2 items-center'>
                    <span className='text-3xl text-blue-600 font-bold'>12+</span>
                    <span className='text-sm'>Trusted <br/>Partners</span>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <span className='text-3xl text-blue-600 font-bold'>200K+</span>
                    <span className='text-sm'>Active <br/>Users</span>
                  </div>
                </div>
                <Link href={"/Register"} className="bg-blue-500 px-6 py-4 text-white rounded-full">
                  Get Started
                </Link>
              </div>
            </div>
            <div className='flex items-end md:h-full w-full md:w-4/12'>
              <div className='h-5/6 w-full'>
                <Image src={heroPic} alt='' className='h-[300px] md:h-full md:w-full object-cover object-top' />
              </div>
            </div>
          </div>
        </div>


      <div className='w-full bg-gray-200 py-32' id="about">
        <div className='w-11/12 mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-3xl font-bold'>Effortless Banking Experience</h1>
          </div>
        </div>
        <div className='w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-12'>
          <div className='flex flex-col gap-2 bg-white rounded-md p-4 shadow items-start'>
            <div>
              <Image src={safeIcon} className='h-8 w-9' alt='' />
            </div>
            <div>
              <h1 className='text-blue-500 font-bold mb-1'>Guaranteed Safety</h1>
              <p className='text-sm'>No need to worry user data security is very safe.</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 bg-white rounded-md p-4 shadow items-start'>
            <div>
              <Image src={fastIcon} className='h-8 w-8' alt='' />
            </div>
            <div>
              <h1 className='text-blue-500 font-bold mb-1'>Realtime Protection</h1>
              <p className='text-sm'>No need to worry user data security is very safe.</p>
            </div>
          </div>
          <div className='flex flex-col gap-2 bg-white rounded-md p-4 shadow items-start'>
            <div>
              <Image src={hideIcon} className='h-8 w-8' alt='' />
            </div>
            <div>
              <h1 className='text-blue-500 font-bold mb-1'>Keeping Secrecy</h1>
              <p className='text-sm'>No need to worry user data security is very safe.</p>
            </div>
          </div>
        </div>
        
      </div>


      <div className='w-full bg-white py-16' id='features'>
        <div className='w-11/12 mx-auto flex flex-col md:flex-row'>
          <div className='w-full md:w-6/12 flex justify-center'>
            <Image src={featIcon} alt='' className='h-[460px] w-[235px]' />
          </div>
          <div className='w-full md:w-6/12 flex items-center mt-24 md:mt-0'>
            <div className='flex flex-col gap-5 w-full text-center md:text-left items-center md:items-start'>
              <h1 className='text-3xl font-bold'>Anywhere, Anytime Banking</h1>
              <span className='text-lg w-11/12'>
                Today I am sharing one of my latest design exploration 
                that is banking website project - Swift Edge.
              </span>
              <Link href={"/Register"} className="bg-blue-500 px-6 py-4 text-white rounded-full md:w-3/12">
                  Get Started
              </Link>
            </div>
            
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </main>
  )
}
