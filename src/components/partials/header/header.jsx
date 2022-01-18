import { Nav } from '../nav/nav.jsx'

const arrNav = [
  { name: 'Forside', path: '/'},
  { name: 'Om os', path: '/about'},
  { name: 'Produkter', path: '/products'},
  { name: 'Kontakter', path: '/contacts'}
]

export const Header = (props) => {
  return (
    <header>
      <h1>{props.pagetitle ? props.pagetitle : 'Routes React'}</h1>
      <Nav navItems={arrNav} />
    </header>
  )
}
