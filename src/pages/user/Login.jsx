import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { loginState } from '../../recoils/login';
import { useSetRecoilState } from 'recoil';
import axios from 'axios';
import AlertModal from '../../common/AlertModal';
import SubIntroSingle from '../../components/SubIntroSingle';


function Login() {

  const navigate = useNavigate();

  // Modal
  const [modalShow, setModalShow] = useState(false);

  // recoil
  const setLoginUser = useSetRecoilState(loginState);

  const [data, setData] = useState({ email: '', password: '' });
  const changeData = useCallback((evt) => {
    setData((data) => ({ ...data, [evt.target.name]: evt.target.value }));
  }, []);

  const login = useCallback(async (evt) => {
    evt.preventDefault();
    const resp = await axios.post('http://localhost:8000/users/login', data);
    console.log(resp);
    if (resp.data.status === 200) {

      setLoginUser(resp.data.status);
      navigate('/');
      setModalShow(false); // 모달 숨기기
      return;
    } else {
      setModalShow(true);
      setData({ email: '', password: '' })
    }
  }, [data, setLoginUser, navigate]);

  return (
    <>
      {/* ======= Modal ======= */}
      <AlertModal show={modalShow} onHide={() => setModalShow(false)} title="알림" message={'아이디 / 패스워드를 확인해 주세요'} />

      {/* ======= Intro Single ======= */}
      <SubIntroSingle title="We Do Great Design For Creative Folks" pathName="Login"></SubIntroSingle>

      <div className="container-fluid py-5">
        <div className="container py-5" style={{ marginTop: '200px' }}>
          <h1 className="mb-4 text-center">로그인</h1>
          <form onSubmit={login}>
            <div className="row g-5">
              <div className="col-md-12 col-lg-12 col-xl-7 mx-auto">
                <div className="row">
                  <div className="form-item w-100">
                    <label htmlFor="email" className="form-label my-3 fw-bold">
                      {/* 아이디 */}
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={data.email}
                      onChange={changeData}
                      placeholder="아이디(이메일)"
                    />
                  </div>
                </div>
                <div className="form-item">
                  <label htmlFor="password" className="form-label my-3 fw-bold">
                    {/* 비밀번호 */}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    value={data.password}
                    onChange={changeData}
                    placeholder="비밀번호"
                    />
                </div>

                <div className="row g-4 text-center align-items-center justify-content-center pt-4"style={{ marginTop: '5px' }}>
                  <button
                    type="submit"
                    className="btn border-secondary py-3 px-4 text-uppercase text-primary">
                    로그인 하기!
                  </button>

                </div>

                <div className="row g-3 text-center justify-content-center mt-5">
                  <div className="col-auto" style={{ marginTop: '50px' }}>
                    <a href="signup" className="form-link fw-bold light-gray-text">
                      회원가입
                    </a>
                  </div>
                  <div className="col-auto" style={{ marginTop: '50px' }}>
                    <span className="mx-3"></span>
                    <a href="/forgot-username" className="form-link fw-bold light-gray-text">
                      아이디 찾기
                    </a>
                  </div>
                  <div className="col-auto" style={{ marginTop: '50px' }}>
                    <span className="mx-3"></span>
                    <a href="/forgot-password" className="form-link fw-bold light-gray-text">
                      비밀번호 찾기
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
