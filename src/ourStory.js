// import {img} from './photos'
import img2 from './OurStoryPhotos/2.jpeg'
import img3 from './OurStoryPhotos/3.jpeg'
import img4 from './OurStoryPhotos/4.jpeg'
import img5 from './OurStoryPhotos/5.jpeg'

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
    {
      name: 'Minimal and thoughtful',
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc: `${img2}`,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: `${img2}`,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
      name: 'Minimal and thoughtful',
      description:
        'Our laptop sleeve is compact and precisely fits 13" devices. The zipper allows you to access the interior with ease, and the front pouch provides a convenient place for your charger cable.',
      imageSrc: `${img3}`,
      imageAlt: 'White canvas laptop sleeve with gray felt interior, silver zipper, and tan leather zipper pull.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: `${img4}`,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: `${img5}`,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
    {
      name: 'Refined details',
      description:
        'We design every detail with the best materials and finishes. This laptop sleeve features durable canvas with double-stitched construction, a felt interior, and a high quality zipper that hold up to daily use.',
      imageSrc: `${img5}`,
      imageAlt: 'Detail of zipper pull with tan leather and silver rivet.',
    },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function OurStory() {
    return (
      <div className="bg-slate-200">
        <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id='OurStory' className="text-3xl font-bold pt-10 tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            
          </div>
  
          <div className="mt-16 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-8 xl:col-start-9',
                    'mt-6 lg:col-span-5 lg:row-start-1 lg:mt-0 xl:col-span-4',
                  )}
                >
                  <h3 className="text-lg font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-sm text-gray-500">{feature.description}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-6 xl:col-start-5' : 'lg:col-start-1',
                    'flex-auto lg:col-span-7 lg:row-start-1 xl:col-span-8',
                  )}
                >
                  <div className="aspect-h-2 aspect-w-5 overflow-hidden rounded-lg bg-gray-100 ">
                    <img alt={feature.imageAlt} src={feature.imageSrc} className="object-cover object-center" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  