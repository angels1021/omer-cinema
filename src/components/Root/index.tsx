import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import './style.css';


const Root = () => (
    <div className="app-main">
        <Header />
        <div className="container main-content">
            <Main />
        </div>
        <Footer />
    </div>
);

export default Root;