import './styles/global.css'

import { MyProfile } from './profile/MyProfile';

import { Header } from './components/Header';
import { Card } from './components/Card';
import { Label } from './components/Label';

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
    <body className='flex flex-col gap-4'>
      <div>
        <Header>
          {
            options.map(option => (
              <Label
                link
                href={ option.href }
              >
                { option.label }
              </Label>
            ))
          }    
        </Header>
        <Card
          style='dark'
        >
          <div
            className='w-48 relative flex flex-col items-center'
          >
            <img className='absolute top-4' src={MyProfile.imageUrl} alt="" />
            <img
              src="/animations/Blob.svg" alt="" />
          </div>
        </Card>
      </div>
    </body>
  );
}