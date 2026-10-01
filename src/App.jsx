import Layout from './components/Layout';
import Sidebar from './components/Sidebar';
import About from './components/About';

function App() {
  return (
    <Layout sidebar={<Sidebar />}>
      <About />
    </Layout>
  );
}

export default App;