import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  } from '@headlessui/react'
 
  function importAll(r) {
    let images = [];
    r.keys().forEach(item => { 
      images.push(r(item)); 
    });
    return images;
  }
  
  const images = importAll(require.context('./marriagePhotos', false, /\.(JPG|jpeg)$/));
  

 export default function Photos(){
    return (
        <div id='Photos' className='bg-white pt-7 mt-5 h-[100vh]'>
            <h2 className="text-3xl mb-5 font-bold tracking-tight text-gray-900 sm:text-4xl ">Photos</h2>
 <TabGroup className="flex flex-col-reverse justify-between h-[90vh] ">
 {/* Image selector */}
 <div className="mx-auto mt-5 w-full max-w-2xl h-[15vh] overscroll-x-none sm:block lg:max-w-none">
   <TabList  className="mx-auto  grid grid-rows-1 max-w-7xl overflow-auto grid-flow-col w-[90vw]">
    {images.map((image) => (
       <Tab
        key={images.indexOf(image)}
         
         className="group relative flex h-24 w-24 cursor-pointer    "
       >
         <span className="sr-only">{image}</span> 
         <span className="absolute  inset-0 overflow-hidden p-0.5">
            <img alt="halli" src={image} className="h-full w-full object-cover object-center focus:border focus:border-black focus:border-solid" /> 
         </span>
         <span
           aria-hidden="true"
           className=" absolute inset-0 "
         /> 
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
         className="sm:h-[75vh] w-[97vw] mx-auto sm:w-full object-contain object-center rounded-lg sm:rounded-lg"
       />
     </TabPanel>
   ))}
 </TabPanels>
</TabGroup>
</div>
    )
 }