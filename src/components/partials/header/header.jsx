import { Nav } from '../nav/nav.jsx'

const arrNav = [
  { name: 'Forside', path: '/'},
  { name: 'Om os', path: '/about'}
]

export const Header = (props) => {
  return (
    <Header>
      <h1>{props.pagetitle ? props.pagetitle : 'My New React App'}</h1>
      <Nav navItems={arrNav} />
    </Header>
  )
}
