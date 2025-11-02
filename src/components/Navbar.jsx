
export default function Navbar() {
return (
<nav className="navbar">
<div className="navbar-inner">
<div className="brand">
<div className="udemy-logo">Udemy</div>
<div className="search">
<input placeholder="Search for anything" />
</div>
</div>
<div className="actions">
<button className="link">Plans & Pricing</button>
<button className="link">Teach on Udemy</button>
<button className="btn-outline">Log in</button>
<button className="btn-primary">Sign up</button>
</div>
</div>
</nav>
);
}
