import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/layout';
import './App.scss';

function App() {
  return (
    <Routes>
      <Route path="/portfolio" element={<Layout />} />
    </Routes>
  );
}

export default App;
