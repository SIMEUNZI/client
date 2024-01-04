import React from 'react'

import Header from './../../components/Header';
import Footer from './../../components/Footer';


function SignUp() {
  return (
    <>
    <Header />
 <div className="container-fluid py-5">
      <div className="container py-5" style={{ marginTop: '50px' }}>
        <h1 className="mb-4 text-center">로그인</h1>
        <form action="#">
          <div className="row g-5">
            <div className="col-md-12 col-lg-12 col-xl-7 mx-auto">
              <div className="row">
                <div className="form-item w-100">
                  <label htmlFor="email" className="form-label my-3 fw-bold">
                    아이디
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-item">
                <label htmlFor="password" className="form-label my-3 fw-bold">
                  비밀번호
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>

              <div className="row g-4 text-center align-items-center justify-content-center pt-4">
                <button
                  type="submit"
                  className="btn border-secondary py-3 px-4 text-uppercase text-primary">
                  로그인 하기!
                </button>
              </div>

              <div className="row g-3 text-center justify-content-center mt-4">
                <div className="col-auto">
                  <a href="/signup" className="form-link fw-bold light-gray-text">
                    회원가입
                  </a>
                </div>
                <div className="col-auto">
                  <span className="mx-3"></span>
                  <a href="/forgot-username" className="form-link fw-bold light-gray-text">
                    아이디 찾기
                  </a>
                </div>
                <div className="col-auto">
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

    <Footer />
    </>
  )
}

export default SignUp