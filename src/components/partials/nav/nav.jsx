
export const Nav = (props) => {
  return (
    <nav>
      <ul>
        {props && props.navItems && props.navItems.map((value, index) => {
          return (
            <li key={index}><a href={value.path}>{value.name}</a></li>
          )
        })}
      </ul>
    </nav>
  )
}
