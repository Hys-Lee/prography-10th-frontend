import { createFunnelSteps, useFunnel } from '@use-funnel/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalInfo from './steps/PersonalInfo';
import BasicInfo from './steps/BasicInfo';
import ApplyingType from './steps/ApplyingType';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import StepLayout from './steps/StepLayout';
import { ERROR_COMMNETS } from '../../constants/errorComments';
import { toast } from 'react-toastify';

const formSchema = z.object({
  personalInfo: z
    .enum(['agree', 'disagree'], { message: ERROR_COMMNETS.NON_CHECK })
    .refine(
      (value) => (value === 'agree' ? true : false),
      ERROR_COMMNETS.SHOULD_AGREE
    ),
  name: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    // .optional()
    .refine(
      (value) => typeof value === 'string' && value.length > 0,
      ERROR_COMMNETS.EMPTY_STRING
    ),
  email: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    .nonempty({ message: ERROR_COMMNETS.EMPTY_STRING })
    .email(ERROR_COMMNETS.INVALID_TYPE)
    // .optional()
    .refine((value) => value !== undefined, ERROR_COMMNETS.EMPTY_STRING),
  phoneNumber: z
    .string({ message: ERROR_COMMNETS.EMPTY_STRING })
    .nonempty({ message: ERROR_COMMNETS.EMPTY_STRING })
    .regex(/^\d{3}-\d{4}-\d{4}$/, ERROR_COMMNETS.INVALID_TYPE)
    // .optional()
    .refine((value) => value !== undefined, ERROR_COMMNETS.EMPTY_STRING),
  applyingType: z.enum(
    ['frontend', 'backend', 'design', 'ios', 'android', 'productOwner'],
    { message: ERROR_COMMNETS.NON_CHECK }
  ),
});

export type FormField = Partial<z.infer<typeof formSchema>>;

const defaultForm: FormField = {
  personalInfo: undefined,
  name: undefined,
  email: undefined,
  phoneNumber: undefined,
  applyingType: undefined,
};
const steps = createFunnelSteps<FormField>()
  .extends('personalInfo')
  .extends('basicInfo', { requiredKeys: 'personalInfo' })
  .extends('applyingType', { requiredKeys: ['email', 'name', 'phoneNumber'] })
  .build();

const ApplyForm = () => {
  const funnel = useFunnel({
    id: 'applyform',
    steps: steps,
    initial: {
      step: 'personalInfo',
      context: defaultForm,
    },
  });

  const formMethods = useForm({
    resolver: zodResolver<FormField>(formSchema),
    defaultValues: defaultForm,
  });

  const onSubmit = (data: unknown) => console.log(data);
  // const onSubmitFailed = () => toast(ERROR_COMMNETS.SUBMIT_FAILED); // post 동작에 사용

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <funnel.Render
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
                    context.personalInfo ===
                    formMethods.getValues('personalInfo');
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
        </form>
      </FormProvider>
    </>
  );
};

export default ApplyForm;
