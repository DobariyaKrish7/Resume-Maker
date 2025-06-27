// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import Landingpage from './pages/Landingpage.jsx'
// import UserProvider from '../context/UserContext.jsx'
// import Dashboard from './pages/Dashboard.jsx'

// const App = () => {
//   return (
//     <UserProvider>
//       <Routes>
//         <Route path='/' element={<Landingpage />} /> {/* ✅ Capitalized usage */}
//         <Route path='/' element={<Dashboard/>} />
//       </Routes>
//     </UserProvider>
//   )
// }

// export default App

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Landingpage from './pages/Landingpage.jsx';
import UserProvider from '../context/UserContext.jsx';
import Dashboard from './pages/Dashboard.jsx';
import EditResume from './componets/EditResume.jsx';
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <UserProvider>
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/resume/:resumeId' element={<EditResume/>}/>
      </Routes>

      <Toaster toastOptions={{
        className:"",
        style: {
          fontSize:"13px"
        }
      }}>

      </Toaster>
    </UserProvider>
  );
};

export default App;

