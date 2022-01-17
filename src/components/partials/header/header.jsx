import { Nav } from '../nav/nav.jsx'

const arrNav = [
  { name: 'Forside', path: '/'},
  { name: 'Om os', path: '/about'}
]

export const Header = (props) => {
  return (
    <header>
      <h1>Test</h1>
      <Nav navItems={arrNav} />
    </header>
  )
}
