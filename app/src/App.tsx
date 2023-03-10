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
import { Carousel } from './components/Carousel';

import emailjs from '@emailjs/browser';
import { EmailJsIds } from './EmailJsIds';

import { useState } from 'react';
import nextId from 'react-id-generator';

const options = [
  {
    href: "#home",
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

  function sendMessage(e: any) {
    e.preventDefault();

    emailjs.sendForm(EmailJsIds.YOUR_SERVICE_ID, EmailJsIds.YOUR_TEMPLATE_ID, e.target, EmailJsIds.YOUR_PUBLIC_KEY)
      .then(() => {
        window.alert('Obrigado pelo seu feedback 😉')
      }, () => {
        window.alert('Não foi possível enviar feedback. Contate diretamente 😉');
    });

    e.target.reset();
  }

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
        column
        className='items-center justify-start h-screen'
      >
        <div
          className='w-[300px] relative flex flex-col items-center'
        >
          <img className='absolute bottom-0 z-[3]' src={profile.imageUrl} alt="" />
          <img
            className='opacity-60 z-[2]'
            src="/profile/banner/Blob.svg" alt="" />
          <img
            className='blur-[6px] absolute top-0 z-[1]'
            src="/profile/banner/Blob.svg" alt="" />
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
        margin='all'
        column
      >
        <Heading>Projetos</Heading>
        {
          profile.projects.map(item => (
            <Card
              key={nextId()}
              column
              padding='all'
              className='items-center justify-center w-fit m-auto rounded-md bg-neutral-100 ring-1 ring-black hover:shadow-sm hover:shadow-black'
            >
              <Heading size='sm'>{ item.label }</Heading>
              <figure
                className='flex flex-col gap-4 h-fit w-fit'
              >
                <img src={item.imageUrl} alt="" />
                <figcaption>
                  <Label>{ item.description }</Label>
                </figcaption>
              </figure>
              <div
                className='flex gap-4 w-full'
              >
                <a 
                  href={ item.githubProjectUrl }
                  target='_blank'
                  className="bg-violet-700 text-white flex-1 p-2 flex items-center justify-center hover:bg-violet-500"
                >
                  Código Fonte
                </a>
                <a 
                  href={ item.siteProjectUrl }
                  target='_blank'
                  className="bg-cyan-700 text-white flex-1 p-2 flex items-center justify-center hover:bg-cyan-500"
                >
                  Visite o Site
                </a>
              </div>
            </Card>
          ))
        }
      </Card>

      <Card
        className='items-center justify-center h-screen'
        style='dark'
      >
        <Heading>Saiba Mais</Heading>
      </Card>
     
      <Card
        id='formacao'
        column
        margin='all'
        className='h-screen'
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
        padding='all'
        style='dark'
        className='h-screen items-center justify-center'
      >
        <Heading>Stack</Heading>
        <Card
          wrap
          className='items-center justify-center'
        >
          {
            profile.stack.map(item => (
              <figure
                key={nextId()}
                className='relative min-w-[96px] w-24 h-fit flex flex-col gap-2 items-center p-4'
              >
                <img
                  className='w-12 h-12 blur-md animate-pulse'
                src={ item.imageUrl } alt="" />
                <img
                  className='w-12 h-12 absolute top-4 opacity-75'
                src={ item.imageUrl } alt="" />
                <figcaption>{ item.label }</figcaption>
              </figure>
            ))
          }
        </Card>
      </Card>

      <Card
        id='certificados'
        column
        margin='all'
        className='h-screen'
      >
        <Heading>Certificados</Heading>
        <Carousel
          numberOfChildren = {profile.certificates.length}
        >
          {
            profile.certificates.map(item => (
              <figure 
                key={nextId()}
                id={nextId()}
                className="carousel-item
                           flex 
                           flex-col 
                           items-center 
                           justify-between 
                           flex-none
                           w-full
                           h-full
                           text-white
                           bg-gradient-to-br
                         from-cyan-500/30
                         via-cyan-700/50
                         to-cyan-900/70"
              >
                <img className='p-2' src={item.imageUrl} alt="..."/>
                <figcaption
                  className='flex flex-col w-full p-2'
                >
                <Label size='lg'>Instituição: { item.institution }</Label>
                {
                  item.trail &&
                  <Label>Trilha: { item.trail }</Label>
                }
                {
                  item.label &&
                  <Label size='sm'>Curso: { item.label }</Label>
                }
                <a 
                  href={item.imageUrl} 
                  target='_blank'
                  className="flex-1 
                             p-2 
                             flex 
                             items-center 
                             justify-center
                             bg-gradient-to-b
                          from-neutral-500/20
                          via-neutral-700/30
                          to-black/40
                          hover:from-violet-500/20
                          hover:via-violet-700/30
                          hover:to-black/40"
                >
                  Vizualizar Certificado
                </a>
                </figcaption>
              </figure>
            ))
          }
        </Carousel>
      </Card>

      <Card
        id='habilidades'
        column
        padding='all'
        style='dark'
        className='h-screen items-center justify-center'
      >
        <Heading>Habilidades</Heading>
        <Card
        id='stack'
        wrap
        className='items-center justify-center'
        >
          {
            profile.skills.map(item => (
              <figure
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
                           w-[200px]
                           rounded-full
                           relative
                           overflow-hidden
                           '
              >
                <img 
                  src={item.imageUrl} 
                  alt="" 
                  className="absolute bottom-0 z-[1] blur-sm"  
                />
                <img 
                  src={item.imageUrl} 
                  alt="" 
                  className="absolute bottom-0 z-[2]"  
                />
                <figcaption
                  className='z-[3]'
                >
                  <Text size='lg'>{item.label}</Text>
                </figcaption>
              </figure>
            ))
          }
        </Card>
      </Card>

      <Card
        id='feedback'
        column
        margin='all'
        className='h-screen items-center justify-center'
      >
        <Heading
          className='w-full text-left'
        >
          Feedback
        </Heading>
        <Card
          column
          className='w-[80vw]'
        >
          <form
            onSubmit={sendMessage}
          >
            <textarea 
              required
              name="message"
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
                      transition
                      focus:outline-none
                      focus:ring-cyan-500
                      hover:shadow-md
                      hover:shadow-black' 
              placeholder='Me envie seu feedback 😉'
              cols={30} 
              rows={5}>  
            </textarea>
            <Button
              onSubmit
              className='bg-cyan-500 
                      hover:bg-cyan-300
                      text-white
                      rounded-md'
            >
              Enviar
            </Button>
          </form>
        </Card>
      </Card>

      <Card
        column
        padding='all'
        className='h-screen
                   items-center 
                   justify-center
                   text-white
                   bg-gradient-to-br
                 from-cyan-500/30
                 via-cyan-700/50
                 to-cyan-900/70'
      >
        <Heading>
          Agradecimentos
        </Heading>
        <Card
          className='items-center 
                     justify-center'
        >
          <Text
            className='text-white'
          >Se você chegou até aqui obrigado pela atenção</Text>
          <img src="/profile/ImageProfile.svg" alt="" />
        </Card>
      </Card>

      <Card
        id='contatos'
        column
        padding='all'
        style='dark'
        className='h-screen items-center justify-center'
      >
        <Card
          className='w-full items-center justify-center'
        >
          <hr className='bg-white h-[2px] flex-1'/>
          <div
            className='w-fit flex items-center justify-center gap-4'
          >
            {
              profile.contacts.map(item => (
                <a 
                  key = {nextId()}
                  href={item.siteUrl}
                  target='_blank'
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
          </div>
          <hr className='bg-white h-[2px] flex-1'/>
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