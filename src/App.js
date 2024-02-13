import React, { Component } from 'react';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';
import NotFound from './components/NotFound'
import Navigation from './components/Navigation';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPath: window.location.pathname
    };
  }

  componentDidMount() {
    window.onpopstate = () => {
      this.setState({ currentPath: window.location.pathname });
    };
    // 초기 페이지 설정
    const path = window.location.pathname;
    if (path === '/' || path === '/about') {
      this.setState({ currentPath: path });
    } else {
      this.setState({ currentPath: '/notfound' });
      window.history.pushState(null, '', '/notfound');
    }
  }

  render() {
    const { currentPath } = this.state;

    let content;
    switch (currentPath) {
      case '/maruon_web':
        content = <Home />;
        break;
      case '/about':
        content = <About />;
        break;
      default:
        content = <NotFound />;
        break;
    }

    return (
      <div>
        <Navigation />
        {content}
      </div>
    );
  }
}

export default App;