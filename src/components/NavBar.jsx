import "./NavBar.css";

export default function NavBar({ onLogoClick, onSignIn, onSignUp }) {
  return (
    <header className="navbar">
      <span className="navbar-logo" onClick={onLogoClick} role="button" tabIndex={0}>
        BlueCart
      </span>
      <nav className="navbar-actions">
        <button className="navbar-ghost" onClick={onSignIn}>Sign in</button>
        <button className="navbar-accent" onClick={onSignUp}>Sign up</button>
      </nav>
      <button className="navbar-hamburger" aria-label="Menu">☰</button>
    </header>
  );
}