import Nav from './nav';
import Header from './header';
import Page from './page'
import OurStory from './ourStory';
import Photos from './photos';
import './App.css';

function App() {
  return (
    <div className="App">
      <Page />
      <Photos />
      <OurStory />
      {/* <Nav />
      <Header /> */}
    </div>
  );
}

export default App;
