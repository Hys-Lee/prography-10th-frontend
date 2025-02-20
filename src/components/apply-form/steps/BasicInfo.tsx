import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';

const BasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <div>
          <label htmlFor="name">성함</label>
          <input id="name" placeholder="홍길동" {...register('name')} />
          {errors.name && (
            <ErrorComment>{errors.name.message as string}</ErrorComment>
          )}
        </div>
        <div>
          <label htmlFor="email">이멜</label>
          <input
            id="email"
            placeholder="prography@gamil.com"
            {...register('email')}
          />
          {errors.email && (
            <ErrorComment>{errors.email.message as string}</ErrorComment>
          )}
        </div>
        <div>
          <label htmlFor="phoneNumber">전번</label>
          <input
            id="phoneNumber"
            placeholder="010-1234-5678"
            {...register('phoneNumber')}
          />
          {errors.phoneNumber && (
            <ErrorComment>{errors.phoneNumber.message as string}</ErrorComment>
          )}
        </div>
      </div>
    </>
  );
};
export default BasicInfo;
