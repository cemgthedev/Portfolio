import './styles/global.css'

import { Profile } from './profile/Profile';
import { MyProfile } from './profile/MyProfile';

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { HorizontalListing } from './components/HorizontalListing';

import { useState } from 'react';
import nextId from 'react-id-generator';

const options = [
  {
    href: '#home',
    label: 'Home'
  },
  {
    href: '#projetos',
    label: 'Projetos'
  },
  {
    href: '#formacao',
    label: 'Formação'
  },
  {
    href: '#stack',
    label: 'Stack'
  },
  {
    href: '#certificados',
    label: 'Certificados'
  },
  {
    href: '#habilidades',
    label: 'Habilidades'
  },
  {
    href: '#feedback',
    label: 'Feedback'
  },
  {
    href: '#contatos',
    label: 'Contatos'
  }
]

export function App() {
  const [profile, setProfile] = useState(MyProfile as Profile);

  return (
    <div className='fixed top-0 w-screen h-screen overflow-auto scroll-smooth scrollbar-hide'>
      <Header>
        {
          options.map(option => (
            <Label
              key={nextId()}
              link
              href={ option.href }
            >
              { option.label }
            </Label>
          ))
        }    
      </Header>

      <Card
        id='home'
        style='dark'
        padding='all'
        className='items-center'
      >
        <div
          className='w-[190px] min-w-[190px] relative flex flex-col items-center'
        >
          <img className='absolute top-12 z-[3]' src={profile.imageUrl} alt="" />
          <img
            className='opacity-60 z-[2]'
            src="/animations/Blob.svg" alt="" />
          <img
            className='blur-[6px] absolute z-[1]'
            src="/animations/Blob.svg" alt="" />
        </div>
        <div className='text-white'>
          {
            profile.bio.map(paragraph => (
              <Text key={nextId()}>
                { paragraph }
              </Text>
            ))
          }
        </div>
      </Card>

      <Card
        id='projetos'
        style='ligth'
        padding='all'
      >
        <Heading>Projetos</Heading>
      </Card>

      <Card
        className='items-center justify-center p-12'
        style='dark'
      >
        <Heading>Saiba Mais</Heading>
      </Card>
     
      <Card
        id='formacao'
        column
        padding='all'
      >
        <Heading>Formação</Heading>
        {
          profile.educational.map(item => (
            <div
              key={nextId()}
              className='w-full flex flex-col gap-1'
            >
              <Label size='lg'>{ item.institution }</Label>
              <Label size='md'>{ item.course }</Label>
              <Label size='sm'>{ item.period }</Label>
            </div>
          ))
        }
      </Card>

      <Card
        id='stack'
        column
        margin='all'
        padding='all'
        style='dark'
      >
        <Heading>Stack</Heading>
        <HorizontalListing
          idBox='stackBox'
          idScroll='stackScroll'
        >
          {
            profile.stack.map(item => (
              <figure
                key={nextId()}
                className='relative min-w-[96px] w-24 h-fit flex flex-col gap-2 items-center p-4'
              >
                <img
                  className='w-12 h-12 blur-md'
                src={ item.imageUrl } alt="" />
                <img
                  className='w-12 h-12 absolute top-4 opacity-75'
                src={ item.imageUrl } alt="" />
                <figcaption>{ item.label }</figcaption>
              </figure>
            ))
          }
        </HorizontalListing>
      </Card>

      <Card
        id='certificados'
        column
        padding='all'
      >
        <Heading>Certificados</Heading>
      </Card>

      <Card
        id='habilidades'
        column
        margin='all'
        padding='all'
        style='dark'
      >
        <Heading>Habilidades</Heading>
        <HorizontalListing
          idBox='habilidadesBox'
          idScroll='habilidadesScroll'
        >
          {
            profile.skills.map(item => (
              <div
                key={nextId()}
                className='bg-gradient-to-b
                           from-white/30
                           via-white/40
                           to-white/60
                           shadow-md
                           shadow-white/25
                           flex 
                           items-center
                           justify-center
                           h-[200px]
                           min-w-[200px]
                           rounded-full'
              >
                <Text size='lg'>{item.label}</Text>
              </div>
            ))
          }
        </HorizontalListing>
      </Card>

      <Card
        id='feedback'
        column
        padding='all'
        className='items-center justify-center'
      >
        <Heading
          className='w-full text-left'
        >
          Feedback
        </Heading>
        <Card
          column
          className='w-4/5'
        >
          <textarea 
            className='ring-2 
                     ring-neutral-900 
                     text-neutral-900
                     rounded-md 
                     p-4 
                     w-full 
                     h-24 
                     min-h-[128px] 
                     max-h-[96px]
                     scrollbar-hide
                     resize-none
                     focus:outline-none
                     focus:ring-cyan-500
                     hover:shadow-md
                     hover:shadow-black' 
            placeholder='Me envie seu feedback 😉'
            cols={30} 
            rows={5}>  
          </textarea>
          <Button
            className='bg-cyan-500 
                    hover:bg-cyan-300
                    text-white
                    rounded-md'
          >
            Enviar
          </Button>
        </Card>
      </Card>

      <Card
        column
        padding='all'
        margin='all'
        className='items-center 
                   justify-center
                   text-white
                   bg-gradient-to-br
                     
                  from-cyan-500/30
                  via-cyan-700/50
                  to-cyan-900/70
                     rounded-md
                      shadow-md
                      shadow-neutral-900/70'
      >
        <Heading>
          Agradecimentos
        </Heading>
        <Card
          padding='all'
          className='items-center 
                     justify-center'
        >
          <Text
            className='text-white'
          >Se você chegou até aqui obrigado pela atenção</Text>
          <img src="/ImageProfile.svg" alt="" />
        </Card>
      </Card>

      <Card
        column
        padding='all'
        style='dark'
        className='items-center'
      >
        <Card
          className='w-full items-center justify-center'
        >
          <hr className='bg-white h-[2px] w-full'/>
          <Card
            className='w-fit items-center justify-center'
          >
            {
              profile.contacts.map(item => (
                <a 
                  key = {nextId()}
                  href={item.siteUrl}
                  className="flex
                            items-center
                            justify-center
                            w-[36px] 
                            h-[36px]
                            rounded-md
                            bg-gradient-to-t
                            to-white/30
                            via-white/40
                            from-white/60
                            shadow-md
                            shadow-white/25
                            hover:to-cyan-200/40
                            hover:via-cyan-300/80
                            hover:from-cyan-500
                            hover:shadow-cyan-500

                            "
                >
                  <img src={item.imageUrl} alt="" className='opacity-80' />
                </a>
              ))
            }
          </Card>
          <hr className='bg-white h-[2px] w-full'/>
        </Card>
        <Heading>{ profile.portifolioName }</Heading>
        <Text
          className='italic'
        >
          "{ profile.portifolioLema }"
        </Text>
      </Card>

    </div>
  );
}