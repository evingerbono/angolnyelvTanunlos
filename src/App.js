import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './Layout';
import Gepel from './pages/Gepel';
import Valaszto from './pages/Valaszto';
import NoPage from './pages/NoPage';
import Rendez from './pages/Rendez';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}  >
            <Route index element={<Valaszto />} />
            <Route path="gepel" element={<Gepel />} />
            <Route path="rendez" element={<Rendez />} />
            <Route path="valaszto" element={<Valaszto />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
