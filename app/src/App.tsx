import { TypeAnimation } from 'react-type-animation';

import './styles/global.css'

import { MyProfile } from './profile/MyProfile';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { useEffect, useState } from 'react';
import { Profile } from './profile/Profile';
import nextId from 'react-id-generator';

export function App() {
  const [profile, setProfile] = useState(MyProfile as Profile)

  return (
    <div 
      className='fixed top-0 w-screen h-screen bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 scrollbar-hide'
    >
      <Header/>
      <Banner>
        <div
            className='flex flex-col items-center text-2xl'
        >
          <span>
            Eu sou&nbsp;
          </span>
          <TypeAnimation
            sequence={[
              'Desenvolvedor Front End',
              2000,
              'Universitário',
              2000
            ]}
            speed={50}
            wrapper='span'
            repeat={Infinity}
            className='text-purple-500 uppercase'
          />
        </div>
        <div
            className='
                w-[260px]
                h-[260px]
                relative
            '
        >
            <img 
                src={profile.imageUrl} 
                alt="" 
                className='z-[3] absolute bottom-0'
            />
            <img 
                src="/assets/profile/banner/Blob.svg" 
                alt="" 
                className='z-[2] absolute top-0'
            />
            <img 
                src="/assets/profile/banner/Blob.svg" 
                alt="" 
                className='z-[1] absolute top-0 blur-sm'
            />
        </div>
        <figcaption
            className='
                w-[80vw]
                flex
                flex-col
                items-center
                justify-center
            '
        >
          {
            profile.bio.map((item) => (
              <p>{ item }</p>
            ))
          }
        </figcaption>
      </Banner>
    </div>
  );
}