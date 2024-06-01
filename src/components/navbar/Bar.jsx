import logo from "../../assets/logo.png"

function Bar() {
  return (
    <>
      <div className="hero-section border border-info">
      <div className="col-md-6">
              <h1 className="display-4 font-weight-bold">Discover your next Hike</h1>
              <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
            </div>
      <div className=" fullscreen-bg">
              <img src="https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Hiking Image" className="img-fluid" />
            </div>

      </div>
    </>
  );
}

export default Bar;
