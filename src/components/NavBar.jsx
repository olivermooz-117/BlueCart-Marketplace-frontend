import "./NavBar.css";

export default function NavBar({ onLogoClick }) {
  return (
    <header className="navbar">
      <span className="navbar-logo" onClick={onLogoClick} role="button" tabIndex={0}>
        BlueCart
      </span>
      <nav className="navbar-actions">
        <button className="navbar-ghost">Sign in</button>
        <button className="navbar-accent">Sign up</button>
      </nav>
      <button className="navbar-hamburger" aria-label="Menu">
        ☰
      </button>
    </header>
  );
}
