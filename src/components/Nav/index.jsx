import React from 'react'
import './Nav.styles.sass'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/contact/', label: 'Say Hi!' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/resume/', label: 'Resume' },
  { href: '/blog/', label: 'Blog' },
  { href: 'https://github.com/ajdurancr/durancr-io', label: 'GitHub' },
].map((link) => ({ ...link, key: `nav-link-${link.href}-${link.label}` }))

const Nav = () => (
  <nav>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <a href={href}>{label}</a>
        </li>
      ))}
    </ul>
  </nav>
)

export default Nav
