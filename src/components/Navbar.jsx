import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {

  const styleNavbar = { backgroundColor: "#8190A5", paddingRight: "100px", paddingLeft: "100px" }
  const styleText = { color: "#FFFFFF", fontSize: "23px", marginRight: "10px" }
  const styleTitle = { color: "#FFFFFF", fontSize: "28px", margin: "10px" }
  const styleSelected = { color: "#111111", fontSize: "23px", marginRight: "10px", textDecoration: "underline" }

  const styleVerticalLine = {
    height: "80%",
    borderRight: "2px solid #FFFFFF",
    position: "absolute",
    right: "50%"
  }
  const navigate = useNavigate();
  const location = useLocation();
  const home = { text: "Home", path: "/" };
  const menuItems = [
    {
      text: "Proteínas",
      path: "/proteins",
    },
    {
      text: "Carboidratos",
      path: "/carbohydrate",
    },
    {
      text: "Gorduras",
      path: "/fat",
    },
  ];
  return (
    <div>
      <nav class="navbar is-transparent" style={styleNavbar} role="navigation" aria-label="main navigation">
        <div class="navbar-brand" style={{ "margin-right": "20px" }} onClick={() => {
          navigate(home.path);
        }}>
          <a>
            <img src={"frog.png"} width={98} height={98} />
          </a>
        </div>
        <div class="navbar-item">
          <div style={styleVerticalLine}></div>
        </div>

        <div class="navbar-start" onClick={() => {
          navigate(home.path);
        }}>
          <a class="navbar-item" style={styleTitle} >
            Home
          </a>
        </div>
        <div class="navbar-end">
          {menuItems.map((item) => (

            <div class="navbar-item"
              key={item.text}
              button
              onClick={() => {
                navigate(item.path);
              }}

            >
              <a class="navbar-item" style={location.pathname == item.path ? styleSelected : styleText}>
                {item.text}
              </a>
            </div>))
          }
        </div >
      </nav >
    </div >
  );
}

export default Navbar;
