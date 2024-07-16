import img from './OurStoryPhotos/photos/background3.JPG'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Photos', href: '#Photos' },
    { name: 'Our Story', href: '#OurStory' },
  ]
  
export default function Page() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-white">
      <header id="top" className="absolute inset-x-0 top-0 z-50 text-white">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
         
          <div className="flex lg:flex-1 text-2xl">
          H+S
        </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 ">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
           
          </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#top" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <div className="flex lg:flex-1 text-2xl">
          H+S
        </div>
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setMobileMenuOpen(false)
                      }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
               
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
        className='bg-slate-900/50 absolute inset-0 -z-10 h-screen w-full '>
            
        </div>
      <img
          alt=""
          src={img}
          className="absolute inset-0 -z-20 h-screen w-full object-cover object-center"
        />
        {/* <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div> */}
        <div className="mx-auto  max-w-2xl z-20 h-[calc(100vh-80px)] flex flex-col justify-end   sm:mt-0">
          
          <div className="text-center sm:mb-[100px] mb-[100px]">
            <h1 className="text-4xl font-bold tracking-tight text-gray-300 sm:text-6xl">
         Halli and Samuel Valadez
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
              September 7th, 2024
            </p>
            <div className="mt-10 relative  flex items-center justify-center gap-x-6">
              <a
                href="https://www.amazon.com/wedding/share/samuelandhalli"
                className=" rounded-md  px-3.5 py-2.5 hover:scale-105 text-sm font-semibold text-white shadow-sm border-solid border backdrop-blur-none ease-in-out duration-300  hover:backdrop-blur-xl  border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Registry
              </a>
              <a
                href="https://account.venmo.com/u/Halli-Gubler-1?catchAll=u&catchAll=Halli-Gubler-1"
                className=" rounded-md  px-3.5 py-2.5 hover:scale-105 text-sm font-semibold text-white shadow-sm border-solid border backdrop-blur-none ease-in-out duration-300  hover:backdrop-blur-xl  border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                Venmo
              </a>
              <a
                href="http://ineedyouraddress.com/samuelandhalli/"
                className=" rounded-md  px-3.5 py-2.5 hover:scale-105  text-sm font-semibold text-white shadow-sm border-solid border backdrop-blur-none ease-in-out duration-300  hover:backdrop-blur-xl  border-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
              >
                I Need Your Address
              </a>
              
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        >
          {/* <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          /> */}
        </div>
      </div>
    </div>
  )
}
