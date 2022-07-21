import { About, Footer, Header, Work } from './containers';
import { Navbar } from './components';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Work />
    <Footer />
  </div>
);

export default App;