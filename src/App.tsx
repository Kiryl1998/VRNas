import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import AppRoutes from './components/Routes/Routes';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </>
  );
}

export default App;
