import './styles/global.css'

import { MyProfile } from './profile/MyProfile';

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Label } from './components/Label';
import { Text } from './components/Text';
import { Heading } from './components/Heading';
import { HorizontalListing } from './components/HorizontalListing';
import { Range } from './components/Range';

const options = [
  {
    href: '#home',
    label: 'Home'
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
    href: '#habilidades',
    label: 'Habilidades'
  },
  {
    href: '#projetos',
    label: 'Projetos'
  },
  {
    href: '#contatos',
    label: 'Contatos'
  }
]

export function App() {
  return (
    <div className='fixed top-0 w-screen h-screen overflow-auto scroll-smooth scrollbar-hide'>
      <Header>
        {
          options.map(option => (
            <Label
              key={option.href}
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
        className='text-white shadow-sm shadow-black items-center'
      >
        <div
          className='w-[190px] min-w-[190px] relative flex flex-col items-center'
        >
          <img className='absolute bottom-0' src={MyProfile.imageUrl} alt="" />
          <img
            src="/animations/Blob.svg" alt="" />
        </div>
        <div className='text-white'>
          {
            MyProfile.bio.map(paragraph => (
              <Text key={paragraph}>
                { paragraph }
              </Text>
            ))
          }
        </div>
      </Card>
     
      <Card
        id='formacao'
        column
      >
        <Heading>Formação</Heading>
        {
          MyProfile.educational.map(item => (
            <div
              key={item.institution}
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
        margin
        style='dark'
        className='text-white shadow-sm shadow-black'
      >
        <Heading>Stack</Heading>
        <HorizontalListing
        >
          {
            MyProfile.stack.map(item => (
              <figure
                key={item.imageUrl}
                className='relative min-w-[96px] w-24 flex flex-col gap-1 items-center'
              >
                <img
                  className='w-12 h-12 absolute top-1'
                src={ item.imageUrl } alt="" />
                <img
                  className='w-14 h-14 opacity-0 hover:opacity-20'
                src={ item.imageUrl } alt="" />
                <figcaption
                  className='hover:text-cyan-500'
                >{ item.label }</figcaption>
              </figure>
            ))
          }
        </HorizontalListing>
      </Card>

      <Card
        id='habilidades'
        column
      >
        <Heading>Habilidades</Heading>
        {
          MyProfile.skills.map(item => (
            <Card
            key={item.label}
            >
              <label
                className=' font-medium text-[20px] flex items-end w-48 h-14'
              >{ item.label }</label>
              <div
                className='flex flex-col gap-1 w-full'
              >
                <Label>{ item.level }</Label>
                <Range percentageRange={ item.percentageRange } />
              </div>
            </Card>
          ))
        }
      </Card>

      <Card
        id='projetos'
        margin
        style='dark'
        className='text-white shadow-sm shadow-black'
      >
        <Heading>Projetos</Heading>
      </Card>
    </div>
  );
}