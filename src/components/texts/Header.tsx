import "./header.css";

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 text-center">
          <h3 className="animate-charcter">{children}</h3>
        </div>
      </div>
    </div>
  );
}

export default Header;
