import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { routes } from './routes';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {routes.map(route => (
          <Route 
            key={route.path}
            path={route.path}
            element={<route.component />}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;