import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { getAvailableRoutes } from './routes';
import { Navbar } from './components/Navbar';

function App() {
  const availableRoutes = getAvailableRoutes();
  
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {availableRoutes.map(route => (
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