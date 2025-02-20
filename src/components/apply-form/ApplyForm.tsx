import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ERROR_COMMNETS } from '../../constants/errorComments';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';
import { BounceDot } from 'basic-loading';
import Completion from './steps/Completion';
import ApplyFunnel from './ApplyFunnel';
import formSchema, { FormField } from '../../assets/form-info/schema';
import defaultForm from '../../assets/form-info/defaultValues';

const ApplyForm = () => {
  const formMethods = useForm({
    resolver: zodResolver<FormField>(formSchema),
    defaultValues: defaultForm,
  });

  const {
    isPending,
    isSuccess,
    mutate: submitData,
  } = useMutation({
    mutationFn: (data: FormField) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(data);
          resolve({ status: 200 });
        }, 2000);
      });
    },
    onError: () => toast(ERROR_COMMNETS.SUBMIT_FAILED),
  });

  if (isPending) {
    return <BounceDot option={{ size: 12 }} />;
  }

  if (isSuccess) {
    return <Completion />;
  }

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit((data) => submitData(data))}>
          <ApplyFunnel />
        </form>
      </FormProvider>
    </>
  );
};

export default ApplyForm;
