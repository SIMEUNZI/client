import React, { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useForm } from 'react-hook-form'
import { useDaumPostcodePopup } from 'react-daum-postcode';
import { postcodeScriptUrl } from 'react-daum-postcode/lib/loadPostcode';
import { useRecoilValue } from 'recoil';

import { userState } from '@recoils/users';

import UpdatePhotoModal from '../../components/users/UpdatePhotoModal'
import SubIntroSingle from '../../components/SubIntroSingle';

function UserUpdate() {

  /*
  const [user, setUser] = useState({
    id: '', name: '', email: '', cellphone: '', zip: '', address: '', addressDetail: '', createdAt: '', updatedAt: ''
  });
  const getUser = useCallback(async (id) => {
    try {
      const resp = await axios.get('http://localhost:8000/users/' + id);
      setUser(resp.data.user);
    } catch (error) {
      console.error(error.message);
    }
  }, []);

  useEffect(() => {
    getUser(id)
  }, [getUser, id]);
  */

  const navigate = useNavigate();
  const user = useRecoilValue(userState);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      email: user?.email,
      name: user?.name,
      phone: {
        one: user?.cellphone?.split('-')[0],
        two: user?.cellphone?.split('-')[1],
        three: user?.cellphone?.split('-')[2]
      },
      address: {
        postcode: user?.zip,
        main: user?.address,
        detail: user?.addressDetail
      }
    },
    mode: 'onBlur'
  });

  const daum = useDaumPostcodePopup(postcodeScriptUrl);
  const handleComplete = (data) => {
    let address = '';
    let extraAddress = '';

    if (data.userSelectedType === 'R') address = data.roadAddress;
    else address = data.jibunAddress;

    if (data.userSelectedType === 'R') {
      if (data.bname !== '' && /[동|로|가]$/g.test(data.bname)) extraAddress += data.bname;
      // 건물명이 있고, 공동주택일 경우 추가한다.
      if (data.buildingName !== '' && data.apartment === 'Y') {
        extraAddress += (extraAddress !== '' ? ', ' + data.buildingName : data.buildingName);
      }
      // 표시할 참고항목이 있을 경우, 괄호까지 추가한 최종 문자열을 만든다.
      if (extraAddress !== '') extraAddress = ' (' + extraAddress + ')';

      setValue('address.postcode', data.zonecode, { shouldValidate: true, shouldTouch: true, shouldDirty: true })
      setValue('address.main', address, { shouldValidate: true, shouldTouch: true, shouldDirty: true })
      setValue('address.extra', extraAddress, { shouldValidate: true, shouldTouch: true, shouldDirty: true });
      // 커서를 상세주소 필드로 이동한다.
      document.getElementById("addressDetail").focus();
    }
  }
  const getAddress = () => {
    daum({ onComplete: handleComplete })
  }

  const submitEvent = useCallback(async (data) => {
    // console.log(data);
    const sendData = {
      id: user.id,
      data: {
        cellphone: `${data?.phone?.one}-${data?.phone?.two}-${data?.phone?.three}`,
        zip: data?.address.postcode,
        address: data?.address?.main,
        addressDetail: data?.address?.detail
      }
    }
    try {
      // eslint-disable-next-line no-unused-vars
      const resp = await axios({
        method: 'PUT',
        url: 'http://localhost:8000/products/',
        data: sendData
      })
      navigate('/login');
    } catch (error) {
      console.error(error)
    }
  }, [navigate, user.id]);

  const errorEvent = (error) => console.error(error)

  return (
    <main id="main">
      {/* ======= Intro Single ======= */}
      <SubIntroSingle title="사용자 수정" sub="User Update" pathName="update user"></SubIntroSingle>

      {/*  ======= Property Grid =======  */}
      <section className="property-grid grid">
        <div className="container">
          <div className="row">

            <div className="col-sm-12">
              <form className="row" onSubmit={handleSubmit(submitEvent, errorEvent)}>

                <div className="col-sm-12 mb-3">
                  <label htmlFor="email" className="form-label">
                    이메일: <span style={{ color: 'orange' }}>{errors.email?.message}</span>
                  </label>
                  <input type="text" className="form-control" id="email" name="email" {...register('email')} disabled />
                </div>

                <div className="col-sm-12 mb-3">
                  <label htmlFor="password" className="form-label">
                    패스워드: <span style={{ color: 'orange' }}>{errors.password?.message}</span>
                  </label>
                  <button type="button" className="btn btn-sm" onClick={() => handleShow(true)}>비밀번호 변경</button>
                </div>
                <div className="col-sm-12 mb-3">
                  <label htmlFor="name" className="form-label">
                    이름:
                  </label>
                  <input type="text" className="form-control" id="name" {...register('name')} disabled />
                </div>

                <div className="col-sm-12 form-group mb-3">
                  <div className="row">
                    <label htmlFor="phone" className="form-label">전화번호: </label>
                    <div className="col-sm">
                      <input type="text" className="form-control" id="phone" {...register('phone.one')} />
                    </div>
                    <div className="col-sm-5">
                      <input type="text" className="form-control" {...register('phone.two')} />
                    </div>
                    <div className="col-sm-5">
                      <input type="text" className="form-control" {...register('phone.three')} />
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 form-group mb-3">
                  <div className="row">
                    <label htmlFor="address" className="form-label">
                      주소: <span style={{ color: 'orange' }}>{errors.address?.main?.message}</span>
                    </label>
                    <div className="col-sm-2 mb-1">
                      <input type="text" className="form-control" id="postcode" readOnly {...register('address.postcode')} />
                    </div>
                    <div className="col-sm-10 input-group mb-2">
                      <input type="text" className="form-control" id="address" readOnly {...register('address.main', {
                        required: { value: true, message: '주소는 필수 입력 사항입니다' },
                      })} />
                      <button type="button" className="btn btn-outline-secondary" onClick={getAddress}>주소찾기</button>
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control" id="addressDetail" {...register('address.detail')} placeholder="상세 주소를 입력해 주세요" />
                    </div>
                    <div className="col-6">
                      <input type="text" className="form-control" id="addressExtra" readOnly {...register('address.extra')} />
                    </div>
                  </div>
                </div>

                <div className="col-sm-12 text-end">
                  <button type="submit" className="btn btn-outline-secondary" style={{ paddingTop: '10px' }}>SEND</button>{' '}
                  <button type="reset" className="btn btn-outline-secondary" style={{ paddingTop: '10px' }}>RESET</button>{' '}
                  <button type="button" className="btn btn-outline-secondary" style={{ paddingTop: '10px' }} onClick={() => navigate('/userList')}>LIST</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <UpdatePhotoModal show={show} handleClose={handleClose} id={user.id}></UpdatePhotoModal>
    </main>
  )
}
export default UserUpdate;

UserUpdate.defaultProps = {
  sub: ''
};
