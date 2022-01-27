import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Person from './components/Person';
import RandomUsers from './Pages/RandomUsers';
import PersonDetails from './components/PersonDetails';
import NotFound from './Pages/NotFound';
import { useFetch } from './custom_hooks/useFetch';
import Landing from './Pages/Landing';
import Gender from './Pages/Gender';

function App() {

  const {data, loading, getData} = useFetch('https://randomuser.me/api?results=20');

  return (
    
    <Router>
      <div>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/random-users' element={<RandomUsers data={data} loading={loading} getData={getData} />} />
          {/* <Route path='/person/:id' element={<PersonDetails/>} /> */}
          <Route path='/:gender' element={<Gender data={data} loading={loading} /> } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
