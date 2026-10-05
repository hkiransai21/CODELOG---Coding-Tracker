import { NavLink } from 'react-router-dom';
const links = [['/dashboard', 'Dashboard'], ['/problems', 'Problems'], ['/add', 'Add problem']];
export default function Navbar() {
  return (
    <header className="topbar">
      <NavLink to="/dashboard" className="brand mono" aria-label="CODELOG home">codelog<span className="cursor">_</span></NavLink>
      <nav aria-label="Main"><ul>
        {links.map(([to, label]) => (<li key={to}><NavLink to={to} className={({ isActive }) => (isActive ? 'active' : '')}>{label}</NavLink></li>))}
      </ul></nav>
    </header>
  );
}
