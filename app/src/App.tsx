import './styles/global.css'

import { MyProfile } from './profile/MyProfile';

export function App() {
  return (
    <h1 className='text-red-600 text-2xl'>{JSON.stringify(MyProfile)}</h1>
  );
}