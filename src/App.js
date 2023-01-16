import './index.css';
import Nav from './components/Nav.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';
import Books from './pages/Books';
import { books } from './data';
import BookInfo from './pages/BookInfo';

function App() {
  return (
    <Router>
      <div className="App">
          <Nav />
          <Route path='/' exact component={Home} />
          <Route path='/books' render={() => <Books books={books} />} />
          <Route path='/books/1' render={() => <BookInfo books={books} />} />
          <Footer/>
      </div>
      </Router>
  );
}

export default App;