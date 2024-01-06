import React from 'react'



function SignUp() {
  return (
    <>
    <div class="container-fluid py-5">
            <div class="container py-5" style={{ marginTop: '100px' }}>
                <h1 class="mb-4 text-center">회원가입</h1>
                <form action="#">
                    <div class="row g-5">
                        <div class="col-md-12 col-lg-12 col-xl-7 mx-auto">
                            <div class="row">
                                  <div class="form-item w-100">
                                      <label class="form-label my-3 fw-bold">아이디(이메일)<sup>*</sup></label>
                                      <input type="email" class="form-control" placeholder="이메일 형식으로 입력하시오"/>
                                  </div>
                            <div class="form-item">
                                <label class="form-label my-3 fw-bold">닉네임<sup>*</sup></label>
                                <input type="text" class="form-control" />
                            </div>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3 fw-bold">생년월일 <sup>*</sup></label>
                                <input type="date" class="form-control"/>
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3 fw-bold">전화번호<sup>*</sup></label>
                                <input type="tel" class="form-control" />
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3 fw-bold">비밀번호<sup>*</sup></label>
                                <input type="password" class="form-control" />
                            </div>
                            <div class="form-item">
                                <label class="form-label my-3 fw-bold">비밀번호 확인<sup>*</sup></label>
                                <input type="password" class="form-control" />
                            </div>

                            <div class="row g-4 text-center align-items-center justify-content-center pt-4">
                                <button type="button" class="btn border-secondary py-3 px-4 text-uppercase w-100 text-primary">회원가입 하기!</button>
                            </div>
                            
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp