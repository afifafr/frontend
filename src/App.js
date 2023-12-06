import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Public from './components/public';
import Users from './features/Users';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<Public />} />
          <Route path='/users' >
            <Route index element={<Users/>}/>
          </Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
