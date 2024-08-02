import img from './OurStoryPhotos/1.jpeg'
import firstDates from './OurStoryPhotos/firstDates.jpeg'
import img3 from './OurStoryPhotos/3.jpeg'
import iLoveYou from './OurStoryPhotos/iLoveYou.jpg'
import proposed from './OurStoryPhotos/Proposed.jpeg'

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
      name: 'How we met',
      hallis:
        `Halli's perspective: One day I went to church with Kaylee AKA "the matchmaker". Immediately my eyes were drawn to the most handsome man alive, AKA Samuel Valadez. But he had a girlfriend RIP. Luckily for me, a few months later he was single. I went to a ward party with Kaylee again, and low and behold Sam asked for my number AHHHH! 
       
        `, 
        sams: ` Sam's perspective: I saw a hottie and asked for her number.`,
      imageSrc: `${img}`,
      imageAlt: 'how we met',
    },
    {
      name: 'First Dates',
      hallis:
        'For our first date we went repelling at cougar cliffs where we were later engaged, but the first months of dating were full of a lot of fun adventures and chocolate.',
      imageSrc: `${firstDates}`,
      imageAlt: 'First Dates',
    },
    {
      name: 'Made it official',
      hallis:
        'After some time we decided we best make it official and decided we wanted to be boyfriend and girlfriend on Nov. 3rd, 2023. After we celebrated by jumping in the freezing cold Ivins Reservior.',
        sams:'',
      imageSrc: `${img3}`,
      imageAlt: 'Made it official',
    },
    {
      name: '"I Love You"',
      hallis:
        `Halli's Perspective: I took the initiative in professing my love for Sam first. We had hiked Angel's Landing early one morning and spent the whole day together afterwards and I remember thinking 'I just love him'. So that night, I super bravely told Sam 'I think I'm starting to fall in love with you.' 
        `,
        sams:`Sam's Perspective: After spending months with Halli and realizing I never wanted to spend a minute without her I decided I need to tell her. So I took her on a date under the christmas lights and confidently told her 'I love you' no 'starting', 'thinking', or 'falling', just knowing.`,
      imageSrc: `${iLoveYou}`,
      imageAlt: 'I love you',
    },
    {
      name: 'Proposed',
      hallis:
        `Halli's perspective: Sam picked me up to go to his good friend 'Carson's reception. 15 minutes later he pulls out a blindfold, and that's when I knew it was the day! I put on the blindfold, we drove a little farther. and Sam gave me a piggyback ride for what seemed like forever. When I took off the blindfold Sam was on one knee and I just couldn't stop smiling all night... or week... OR MONTH!`,
        sams: `Sam's perspective: I became confident that I wanted to spend the rest of my life with Halli. I knew she wanted to be surprised and so I had her convinced that we were going to a reception but to her surprise we weren't going to a reception, but instead we were going to where we had our first date to ask her if she will marry me!`,
      imageSrc: `${proposed}`,
      imageAlt: 'Proposed',
    },
   
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function OurStory() {
    return (
      <div className="bg-slate-200 ">
        <div className="mx-auto max-w-2xl px-4 pb-24 sm:px-6 sm:pb-32 lg:max-w-7xl lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 id='OurStory' className="text-3xl font-bold pt-10 tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
            
          </div>
  
          <div className="sm:mt-16 mt-8 space-y-16">
            {features.map((feature, featureIdx) => (
              <div
                key={feature.name}
                className="flex flex-col-reverse lg:grid lg:grid-cols-12 lg:items-center lg:gap-x-8"
              >
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-1' : 'lg:col-start-6 xl:col-start-9',
                    'mt-6 lg:col-span-7 lg:row-start-1 lg:mt-0 xl:col-span-7',
                  )}
                >
                  <h3 className="text-xl font-medium text-gray-900">{feature.name}</h3>
                  <p className="mt-2 text-md text-gray-500">{feature.hallis}</p>
                  <p className="mt-2 text-md text-gray-500">{feature.sams}</p>
                </div>
                <div
                  className={classNames(
                    featureIdx % 2 === 0 ? 'lg:col-start-8 xl:col-start-8' : 'lg:col-start-1',
                    'flex-auto lg:col-span-5 lg:row-start-1 xl:col-span-5',
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
  