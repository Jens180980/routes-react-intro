import { NavLink } from 'react-router-dom'
import styles from './nav.module.scss'

export const Nav = (props) => {
  return (
    <nav className={styles.navWrapper}>
      <ul>
        {props && props.navItems && props.navItems.map((value, index) => {
          return (
            <li key={index}><NavLink to={value.path}>{value.name}</NavLink></li>
          )
        })}
      </ul>
    </nav>
  )
}
