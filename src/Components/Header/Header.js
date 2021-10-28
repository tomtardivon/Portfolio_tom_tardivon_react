import { header } from '../../portfolio'
import Navbar2 from '../Navbar2/Navbar2'
import './Header.css'

const Header = () => {
  const { homepage, title } = header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar2 />
    </header>
  )
}

export default Header
