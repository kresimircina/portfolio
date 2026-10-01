import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <About />
      <Projects />
      <Contact />
    </Layout>
  );
}

export default App;