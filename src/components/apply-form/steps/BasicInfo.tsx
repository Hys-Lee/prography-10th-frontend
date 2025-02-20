import { useFormContext } from 'react-hook-form';
// import { PersonalInfoProps } from './PersonalInfo';
import { useEffect } from 'react';
interface BasicInfoProps {
  context: object;
  onNext: () => void;
  onPrev: () => void;
  prevValidate: () => Promise<void>;
}
const BasicInfo = ({
  context,
  onPrev,
  onNext,
  prevValidate,
}: BasicInfoProps) => {
  const {
    register,
    getValues,
    reset,
    formState: { errors },
  } = useFormContext();

  useEffect(() => {
    // reset(
    //   context
    //   // name: getValues('name'),
    //   // email: getValues('email'),
    //   // phoneNumber: getValues('phoneNumber'),
    // );
    prevValidate();
    // reset(context);
    console.log('베이직 이펙트');
  }, []);

  console.log('베이직에서 폼: ', getValues());

  return (
    <>
      <div>
        <div>
          <label htmlFor="name">성함</label>
          <input id="name" placeholder="홍길동" {...register('name')} />
          {errors.name && <p>{errors.name.message as string}</p>}
        </div>
        <div>
          <label htmlFor="email">이멜</label>
          <input
            id="email"
            placeholder="prography@gamil.com"
            {...register('email')}
          />
          {errors.email && <p>{errors.email.message as string}</p>}
        </div>
        <div>
          <label htmlFor="phoneNumber">전번</label>
          <input
            id="phoneNumber"
            placeholder="010-1234-5678"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && <p>{errors.phoneNumber.message as string}</p>}
        </div>
      </div>
      <div>
        <button
          onClick={() => {
            onPrev();
          }}
        >
          이전
        </button>
        <button onClick={onNext}>다음</button>
      </div>
    </>
  );
};
export default BasicInfo;
