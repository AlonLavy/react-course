import Routing from "../../Routing/Routing/Routing";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import "./Layout.css";

function Layout(): JSX.Element {
  return (
    <div className="Layout">
      <header>
        <Header />
      </header>
      <aside>
        <Menu></Menu>
      </aside>
      <main>
        <Routing />
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}

export default Layout;
