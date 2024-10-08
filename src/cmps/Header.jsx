import { NavLink } from 'react-router-dom'
import logo from '../assets/imgs/logo-vito.png';

const links = [
   { name: 'Home', link: '/' },
   { name: 'Banks', link: '/banks' },
]

export const Header = () => {
   return (
      <header className='header'>
         <img className='logo' src={logo} alt="company logo" />
         <nav className='nav'>
            {
               links.map(link =>
                  <NavLink
                     to={link.link}
                     className='link'
                     key={link.name}
                  >
                     {link.name}
                  </NavLink>
               )
            }
         </nav>
      </header>
   )
}
