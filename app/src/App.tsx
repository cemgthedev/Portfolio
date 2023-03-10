import { TypeAnimation } from 'react-type-animation';

import './styles/global.css'

import { Profile } from './profile/Profile';
import { MyProfile } from './profile/MyProfile';

import { Header } from './components/Header';
import { Banner } from './components/Banner';
import { Card } from './components/Card';

import { useState } from 'react';

export function App() {
  const [profile, setProfile] = useState(MyProfile as Profile)

  return (
    <div 
      className='fixed top-0 w-screen h-screen bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 overflow-auto scroll-smooth scrollbar-hide select-none'
    >
      <Header/>
      <Banner
          id="home"
      >
        <div
            className='font-inter text-2xl font-semibold flex flex-col items-center'
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
                flex
                justify-center
                min-w-[250px]
                min-h-[250px]
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
                font-inter
                text-md
                w-[80vw]
                text-center
            '
        >
          {
            profile.bio.map((item) => (
              <p>{ item }</p>
            ))
          }
        </figcaption>
      </Banner>
      <Card
          id="projetos"
          className='
              flex
              flex-col
              items-center
              justify-start
          '
      >
        <h1
            className="font-inter text-xl font-semibold text-white"
        >
          Projetos
        </h1>
      </Card>
      <Card
          id="formacao"
          className='
              flex
              flex-col
              items-center
              justify-start
          '
      >
        <h1
            className="font-inter text-xl font-semibold text-white"
        >
          Formação
        </h1>
      </Card>
      <Card
          id="stack"
          className='
              flex
              flex-col
              items-center
              justify-center
          '
      >
        <h1
            className="font-inter text-xl font-semibold text-white"
        >
          Stack
        </h1>
      </Card>
      <Card
          id="certificados"
          className='
              flex
              flex-col
              items-center
              justify-start
          '
      >
        <h1
            className="font-inter text-xl font-semibold text-white"
        >
          Certificados
        </h1>
      </Card>
      <Card
          id="habilidades"
          className='
              flex
              flex-col
              items-center
              justify-center
          '
      >
        <h1
            className="font-inter text-xl font-semibold text-white"
        >
          Habilidades
        </h1>
      </Card>
      <Card
          id="feedback"
          className='
              flex
              flex-col
              items-center
              justify-center
          '
      >
        <form 
            action=""
            className='ring-2 ring-white px-8 py-4 rounded-md flex flex-col items-center'    
        >
          <label htmlFor="textarea"
              className='
                  font-inter
                  text-xl
                  text-white
              '
          >
              Feedback
          </label>
          <textarea 
              name="message" 
              id="textarea" 
              required 
              className='bg-white/0 resize-none ring-2 ring-white'
          />
        </form>
      </Card>
    </div>
  );
}