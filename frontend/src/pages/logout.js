
import jsCookie from 'js-cookie';
import router from 'next/router';
import { useEffect } from 'react';

const Logout = () => {
  useEffect(()=>{
    jsCookie.remove('auth')
    router.push('/login')
  })
  return (
    <p>logout</p>
  )
}

export default Logout;
