import { createFunnelSteps, useFunnel } from '@use-funnel/react-router';
import { FormProvider, useForm } from 'react-hook-form';
import PersonalInfo from './steps/PersonalInfo';
import BasicInfo from './steps/BasicInfo';
import ApplyingType from './steps/ApplyingType';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import _ from 'lodash';

const formSchema = z.object({
  personalInfo: z
    // .preprocess((value) => {
    //   if (value === undefined || value === null) return false;
    //   return value === 'agree';
    // }, z.boolean())
    .enum(['agree', 'disagree'], { message: '선택은 하셔야죠' })
    .refine(
      (value) => (value === 'agree' ? true : false),
      '찬성하셔야만 합니다'
    ),
  name: z
    .string({ message: '이름 안적었음' })
    .optional()
    // .nonempty()
    .refine(
      (value) => typeof value === 'string' && value.length > 0,
      '이름 적으라고'
    ),
  email: z
    .string({ message: '이메일 안적었어여' })
    .nonempty({ message: '입력하셔야만 합니다' })
    .email('이메일 형식으로다가')
    .optional()
    .refine((value) => value !== undefined, '입력 하셔야 한다구요 이메일'),
  phoneNumber: z
    .string({ message: '전번 적으셔야해요' })
    .nonempty({ message: '입력하셔야만 해요' })
    .regex(/^\d{3}-\d{4}-\d{4}$/, '형식 맞추셈')
    .optional(),
  applyingType: z
    .enum(['frontend', 'backend', 'design', 'ios', 'android', 'productOwner'])
    .optional(),
});

// type FormState = {
//   personalInfo?: boolean;
//   name?: string;
//   email?: string;
//   phoneNumber?: string;
//   applyingType?:
//     | 'frontend'
//     | 'backend'
//     | 'design'
//     | 'ios'
//     | 'android'
//     | 'productOwner';
// };

export type FormField = Partial<z.infer<typeof formSchema>>;
// export type FormField = z.infer<typeof formSchema>;

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
  const {
    formState: { errors },
  } = formMethods;
  const onSubmit = (data: unknown) => console.log(data);
  //

  //test
  console.log('여기서에러: ', errors);

  return (
    <>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <funnel.Render
            personalInfo={({ context, history }) => (
              <PersonalInfo
                context={context}
                onNext={() => {
                  console.log('다음 실행은 하는거지?');
                  history.push('basicInfo', {
                    personalInfo: 'agree',
                  });
                }}
              />
            )}
            basicInfo={({ context, history, historySteps, index }) => (
              <BasicInfo
                context={context}
                prevValidate={async () => {
                  const isValid = await formMethods.trigger('personalInfo');
                  const isEqual =
                    context.personalInfo ===
                    formMethods.getValues('personalInfo');
                  if (!isValid || !isEqual) {
                    console.log(
                      'isValid, isDifferent: ',
                      isValid,
                      isEqual,
                      context,
                      formMethods.getValues()
                    );
                    alert('다시 작성하고 다음 버튼 클릭하세욧!');
                    history.back();
                    return;
                  }
                  // formMethods.reset(context);
                }}
                onPrev={() => {
                  history.back();
                }}
                onNext={async () => {
                  const isValid = await formMethods.trigger([
                    'name',
                    'email',
                    'phoneNumber',
                  ]);
                  if (isValid) {
                    history.push('applyingType', (prev) => ({
                      ...prev,
                      name: formMethods.getValues('name')!,
                      email: formMethods.getValues('email')!,
                      phoneNumber: formMethods.getValues('phoneNumber')!,
                    }));
                  }
                }}
              />
            )}
            applyingType={({ context, history }) => (
              <ApplyingType
                context={context}
                onPrev={() => history.back()}
                prevValidate={async () => {
                  const target = ['name', 'email', 'phoneNumber'];
                  const isValid = await formMethods.trigger(
                    target as (keyof FormField)[]
                  );

                  const isEqual = target.reduce((acc, cur) => {
                    return (
                      acc &&
                      context[cur as keyof FormField] ===
                        formMethods.getValues(cur as keyof FormField)
                    );
                  }, true);
                  if (!isValid || !isEqual) {
                    // alert('다시 작성하세욧!');
                    history.back();
                    return;
                  }
                  // formMethods.reset(context);
                }}
              />
            )}
          />
        </form>
      </FormProvider>
    </>
  );
};

export default ApplyForm;
