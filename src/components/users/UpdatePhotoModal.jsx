import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { useForm } from "react-hook-form";

function UpdatePhotoModal(props) {
  const { show, handleClose, id } = props;

  const { register, handleSubmit, setValue, formState: { errors } } = useForm({
    defaultValues: {
      current: '',
    }
  });

  const onSubmit = async (data) => {
    console.log(data);
    try {
      const formData = new FormData();
      const files = document.querySelector('input[name="current"]').files;
      formData.append('profile', files[0]);
      formData.append('id', id);

      // eslint-disable-next-line no-unused-vars
      const resp = await axios({
        method: 'POST',
        url: 'http://localhost:8000/products/photo/' + id,
        headers: { "Content-type": "multipart/form-data" },
        data: formData
      })
    } catch (error) {
      console.error(error)
    }
    handleClose();
  };
  const closeEvent = () => {
    setValue('current', '', { shouldValidate: false, shouldTouch: false, shouldDirty: false });
    handleClose();
  }

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>이미지 변경</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* <div className="form-group mb-3">
            <label className="form-label">이미지 선택</label>
            <input type="file" name="current" accept="image/*" {...register("current", {
              required: { value: true, message: '파일을 선택해 주세요' },
            })}
            />
            {errors.current && <p className="errorMsg">{errors.current.message}</p>}
          </div> */}
          <Form.Group className="mb-3" controlId="current">
            <Form.Label>이미지</Form.Label>
            <Form.Control type="file" name="current" accept="image/*" {...register("current", {
              required: { value: true, message: '파일을 선택해 주세요' },
            })}
            />
            {errors.current && <p className="errorMsg">{errors.current.message}</p>}
          </Form.Group>
          <hr />
          <Button variant="outline-secondary" type="submit">Submit</Button>{' '}
          <Button variant="outline-secondary" onClick={closeEvent}>Close</Button>
        </form>
      </Modal.Body>
    </Modal>
  );
}

export default UpdatePhotoModal;

UpdatePhotoModal.defaultValues = {
  id: 0
};
