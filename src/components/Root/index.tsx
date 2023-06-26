import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import Menu from "./Menu";
import './style.css';


const Root = () => (
    <div className="container app-main">
        <Header />
        <div className="main-content">
            <Menu />
            <Main />
        </div>
        <Footer />
    </div>
);

export default Root;