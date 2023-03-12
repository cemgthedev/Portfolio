import './styles/global.css'

import { Header } from './components/Header';

export function App() {
  return (
    <div 
      className='w-screen h-screen bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600 scrollbar-hide'
    >
      <Header/>
    </div>
  );
}