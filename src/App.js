import Header from './components/Header';
import Header2 from './components/Header2';
import './App.css';
import Card from './components/Card';
import Nav from './components/Nav';
import Docs from './components/Docs';
import Tutorial from './components/Tutorial';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Header slogan="Learning React Js" />
      <Header2 slogan="React Js give you opportunity to access all of elements of page. You can create an interactive web site. React Js was used firstly in Facebook." />
      <div id="cards">
      <Card title="Props" subtitle="How to use props" details="Props means properties. You can pass values to elements with props" />
      <Card title="State" subtitle="How to use state" details="State is so important tool to update values. " />
      <Card title="Hooks" subtitle="How to use hooks" details="Hooks are so important tool too." />
      <Card title="Life Cycle" subtitle="How to use life cycle" details="Life cycle is so important tool too." />
      </div>
      <Docs />
      <Tutorial />
      <References />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
