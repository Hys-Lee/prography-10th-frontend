import { ToastContainer } from 'react-toastify';
import ApplyForm from '../components/apply-form/ApplyForm';

const ApplyFormPage = () => {
  return (
    <>
      <ApplyForm />
      <ToastContainer
        toastStyle={{ position: 'absolute', bottom: 0 }}
        position="bottom-left"
        theme="light"
        autoClose={2000}
        closeOnClick
      />
    </>
  );
};

export default ApplyFormPage;
