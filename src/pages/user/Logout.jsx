import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';

import { loginState } from '../../recoils/login';

function Logout() {
  const setLoginUser = useSetRecoilState(loginState);
  const localStorage = window.localStorage;

  // recoild에 login시 저장해 놓았던 유저 정보를 기본값으로 초기화
  setLoginUser({ id: '', email: '' });

  // loginState에서 reload를 대비해 localStorage에 저장한 정보도 모두 초기화
  localStorage.removeItem('login');
  localStorage.removeItem('user');

  return (
    <Navigate to="/" replace={true}></Navigate>
  )
}

export default Logout