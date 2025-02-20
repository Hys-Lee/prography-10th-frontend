import { ToastContainer } from 'react-toastify';
import ApplyForm from '../components/apply-form/ApplyForm';
import PaygeLayout from '../components/Layout';

const ApplyFormPage = () => {
  return (
    <PaygeLayout>
      <ApplyForm />
      <ToastContainer
        toastStyle={{ position: 'absolute', bottom: 0 }}
        position="bottom-left"
        theme="light"
        autoClose={2000}
        closeOnClick
      />
    </PaygeLayout>
  );
};

export default ApplyFormPage;
