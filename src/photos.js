import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from '@headlessui/react'
  import img1 from './OurStoryPhotos/1.jpeg'
import img2 from './OurStoryPhotos/2.jpeg'
import img3 from './OurStoryPhotos/3.jpeg'
import img4 from './OurStoryPhotos/4.jpeg'
import img5 from './OurStoryPhotos/5.jpeg'

const images = [img1, img2, img3, img4, img5,img1, img2, img3, img4, img5, img1, img2, img3, img4, img5, img1, img2, img3, img4, img5,  img2, img3, img4, img5, img1, img2, img3, img4, img5]
 
 export default function Photos(){
    return (
        <div id='Photos' className='bg-white pt-20'>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-20">Photos</h2>
 <TabGroup className="flex flex-col-reverse h-screen ">
 {/* Image selector */}
 <div className="mx-auto mt-4 w-full max-w-2xl h-[20vh] overscroll-x-none sm:block lg:max-w-none">
   <TabList className="mx-auto grid grid-rows-1 max-w-7xl overflow-auto grid-flow-col w-screen">
     {images.map((image) => (
       <Tab
         key={images.indexOf(image)}
         className="group relative flex h-24 w-24 cursor-pointer  hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
       >
         {/* <span className="sr-only">{image}</span> */}
         <span className="absolute  inset-0 overflow-hidden m-0.5">
           <img alt="halli" src={image} className="h-full w-full object-cover object-center" />
         </span>
         {/* <span
           aria-hidden="true"
           className="pointer-events-none absolute inset-0 rounded-md ring-2 ring-transparent ring-offset-2 group-data-[selected]:ring-indigo-500"
         /> */}
       </Tab>
     ))}
   </TabList>
 </div>

 <TabPanels className="aspect-h-1 m-auto aspect-w-1">
   {images.map((image) => (
     <TabPanel key={images.indexOf(image)}>
       <img
         alt={image.alt}
         src={image}
         className="h-[80vh] w-full object-cover object-center sm:rounded-lg"
       />
     </TabPanel>
   ))}
 </TabPanels>
</TabGroup>
</div>
    )
 }