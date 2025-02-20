import { createFunnelSteps, useFunnel } from '@use-funnel/react-router';
import { useFormContext } from 'react-hook-form';
import PersonalInfo from './steps/PersonalInfo';
import BasicInfo from './steps/BasicInfo';
import ApplyingType from './steps/ApplyingType';
import StepLayout from './steps/StepLayout';
import { ERROR_COMMNETS } from '../../constants/errorComments';
import { toast } from 'react-toastify';
import { FormField } from '../../assets/form-info/schema';
import defaultForm from '../../assets/form-info/defaultValues';

const steps = createFunnelSteps<FormField>()
  .extends('personalInfo')
  .extends('basicInfo', { requiredKeys: 'personalInfo' })
  .extends('applyingType', { requiredKeys: ['email', 'name', 'phoneNumber'] })
  .build();

const ApplyFunnel = () => {
  const formMethods = useFormContext();

  const { Render } = useFunnel({
    id: 'applyform',
    steps: steps,
    initial: {
      step: 'personalInfo',
      context: defaultForm,
    },
  });
  return (
    <>
      <Render
        personalInfo={({ history, index }) => (
          <StepLayout
            stepIndex={index}
            onNext={async () => {
              const isValid = await formMethods.trigger('personalInfo');
              if (isValid) {
                history.push('basicInfo', {
                  personalInfo: formMethods.getValues('personalInfo')!,
                });
              }
            }}
          >
            <PersonalInfo />
          </StepLayout>
        )}
        basicInfo={({ context, history, index }) => (
          <StepLayout
            stepIndex={index}
            onNext={async () => {
              const isFormValid = await formMethods.trigger([
                'name',
                'email',
                'phoneNumber',
              ]);
              if (isFormValid) {
                history.push('applyingType', (prev) => ({
                  ...prev,
                  name: formMethods.getValues('name')!,
                  email: formMethods.getValues('email')!,
                  phoneNumber: formMethods.getValues('phoneNumber')!,
                }));
              }
            }}
            onPrev={() => history.back()}
            preValidate={async () => {
              const isFormValid = await formMethods.trigger('personalInfo');
              const isFormEqualToContext =
                context.personalInfo === formMethods.getValues('personalInfo');
              if (!isFormValid || !isFormEqualToContext) {
                toast(ERROR_COMMNETS.INVALID_PROCESS);
                // alert('다시 작성하고 다음 버튼 클릭하세욧!');
                history.back();
                return;
              }
            }}
          >
            <BasicInfo />
          </StepLayout>
        )}
        applyingType={({ context, history, index }) => (
          <StepLayout
            isSubmit
            stepIndex={index}
            onPrev={() => history.back()}
            preValidate={async () => {
              const target = ['name', 'email', 'phoneNumber'];

              const isFormValid = await formMethods.trigger(
                target as (keyof FormField)[]
              );

              const isFormEqualToContext = target.reduce((acc, cur) => {
                return (
                  acc &&
                  context[cur as keyof FormField] ===
                    formMethods.getValues(cur as keyof FormField)
                );
              }, true);
              if (!isFormValid || !isFormEqualToContext) {
                toast(ERROR_COMMNETS.INVALID_PROCESS);
                // alert('다시 작성하세욧!');
                history.back();
                return;
              }
            }}
          >
            <ApplyingType />
          </StepLayout>
        )}
      />
    </>
  );
};
export default ApplyFunnel;
