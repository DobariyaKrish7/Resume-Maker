// import React from 'react';
// import {authStyles as styles} from '../assets/dummystyle';
// import { UserContext } from '../../context/UserContext';
// import { useNavigate } from 'react-router-dom';
// import { validateEmail } from '../utils/helper';
// import axiosInstance from '../utils/axiosInstance';
// import { API_PATHS } from '../utils/apiPath';
// import { Input } from './Inputs';

// const SignUp = ({setCurrentPage}) => {
    
//   const [fullName, setFullName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);
//   const { updateUser } = useContext(UserContext);
//   const navigate = useNavigate();

// const handleSignup = async (e) =>{
//     e.preventDefault();
//     if(!fullName)
//     {
//         setError('Please enter your full name');
//         return
//     }
//     if(!validateEmail(email))
//     {
//         setError('enter valid email')
//         return
//     }
//     if(!password)
//     {
//         setError('Please enter your password');
//         return 
//     }
//     setError(' ')
//     try {
//         const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER , {
//             name : fullName,
//             email : email,
//             password : password
//         }); 
//         const {token} = response.data;
//         if(token)
//         {
//             localStorage.setItem( 'token', token );
//             updateUser(response.data)
//             navigate('/dashboard');
//         }
        
//     } catch (error) {
//         setError(error.response?.data?.message || 'something went worng')
        
//     }
// }
//   return (
//     <div className={styles.signupContainer}>
//       <div className={styles.headerWrapper}>
//         <h3 className={styles.signupTitle}>Create Account</h3>
//         <p className={styles.signupSubtitle}>
//           Join thousands of professionals today
//         </p>
//       </div>

//       <form onSubmit={handleSignup} className={styles.signupForm}>
//         <Input value={fullName} onChange={({target}) => setFullName(target.value)}
//         label='Full Name'
//         placeholder='Krish D'
//         type='text' />

        
//         <Input value={email} onChange={({target}) => setFullName(target.value)}
//         label='Email'
//         placeholder='email@example.com'
//         type='email' />


//         <Input value={password} onChange={({target}) => setFullName(target.value)}
//         label='Password'
//         placeholder='kpatelok'
//         type='password' />

//         {error &&
//         <div className={styles.errorMessage}>
//             {error}
//         </div>
//         }
//         <button type='submit' className={styles.signupSubmit}>
//             Create Account
//         </button>

//         <p className={styles.switchText}>
//             already Account
//             <button onClick={() => setCurrentPage('login')} type='button' className={styles.signupSwitchButton}>
//                 sign in
//             </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

import React, { useState, useContext } from 'react';
import { authStyles as styles } from '../assets/dummystyle';
import { UserContext } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { validateEmail } from '../utils/helper';
import axiosInstance from '../utils/axiosInstance';
import { API_PATHS } from '../utils/apiPath';
import { Input } from './Inputs';

const SignUp = ({ setCurrentPage }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError('Please enter your full name');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email');
      return;
    }
    if (!password) {
      setError('Please enter your password');
      return;
    }

    setError(null);

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email: email,
        password: password,
      });

      const { token } = response.data;
      if (token) {
        localStorage.setItem('token', token);
        updateUser(response.data);
        navigate('/dashboard');
      }
    } catch (error) {
      setError(error.response?.data?.message || 'Something went wrong');
    }
  };

  return (
    <div className={styles.signupContainer}>
      <div className={styles.headerWrapper}>
        <h3 className={styles.signupTitle}>Create Account</h3>
        <p className={styles.signupSubtitle}>
          Join thousands of professionals today
        </p>
      </div>

      <form onSubmit={handleSignup} className={styles.signupForm}>
        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="Krish D"
          type="text"
        />

        <Input
          value={email}
          onChange={({ target }) => setEmail(target.value)}
          label="Email"
          placeholder="email@example.com"
          type="email"
        />

        <Input
          value={password}
          onChange={({ target }) => setPassword(target.value)}
          label="Password"
          placeholder="Enter your password"
          type="password"
        />

        {error && (
          <div className={styles.errorMessage}>
            {error}
          </div>
        )}

        <button type="submit" className={styles.signupSubmit}>
          Create Account
        </button>

        <p className={styles.switchText}>
          Already have an account?{' '}
          <button
            onClick={() => setCurrentPage('login')}
            type="button"
            className={styles.signupSwitchButton}
          >
            Sign in
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;

