import React,{useContext} from 'react'
import { UserContext } from '../../context/UserContext';
import Navbar from './Navbar';


const DashboardLayout = ({activeMenu,children}) => {
    const {user} = useContext(UserContext);

  return (
    <div>DashboardLayout
        <Navbar activeMenu={activeMenu} user={user} />
        {user && <div className='conatiner mx-auto pt-4 pb-4'>{children}</div>}
    </div>
  )
}

export default DashboardLayout