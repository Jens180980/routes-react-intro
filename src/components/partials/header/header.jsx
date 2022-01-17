import { Nav } from '../nav/nav.jsx'

const arrNav = [
  { name: 'Forside', path: '/'},
  { name: 'Om os', path: '/about'}
]

export const Header = (props) => {
  return (
    <header>
      <h1>{props.pagetitle ? props.pagetitle : 'Routes React'}</h1>
      <Nav navItems={arrNav} />
    </header>
  )
}
