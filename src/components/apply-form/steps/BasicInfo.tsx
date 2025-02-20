import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';
import TextInputStyle from '../style/TextInputStyle';
import SubHeader from '../common/SubHeader';

const BasicInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-7 pt-3">
        <SubHeader
          subHeaderContent="기본 정보"
          subDescriptionContent="연락 가능한 정보를 입력해주세요"
        />
        <div className="flex flex-col gap-6">
          <div className={TextInputStyle.container}>
            <label htmlFor="name" className={TextInputStyle.label}>
              <p>성함을 입력해주세요</p>
              <span className={TextInputStyle.labelStar}>*</span>
            </label>
            <input
              className={TextInputStyle.inputBox}
              id="name"
              placeholder="예시 : 홍길동"
              {...register('name')}
            />
            {errors.name && (
              <ErrorComment>{errors.name.message as string}</ErrorComment>
            )}
          </div>
          <div className={TextInputStyle.container}>
            <label className={TextInputStyle.label} htmlFor="email">
              <p>이메일 주소를 입력해주세요</p>
              <span className={TextInputStyle.labelStar}>*</span>
            </label>
            <input
              className={TextInputStyle.inputBox}
              id="email"
              placeholder="예시 : prography@gamil.com"
              {...register('email')}
            />
            {errors.email && (
              <ErrorComment>{errors.email.message as string}</ErrorComment>
            )}
          </div>
          <div className={TextInputStyle.container}>
            <label className={TextInputStyle.label} htmlFor="phoneNumber">
              <p>휴대폰 번호를 입력해주세요</p>
              <span className={TextInputStyle.labelStar}>*</span>
            </label>
            <input
              className={TextInputStyle.inputBox}
              id="phoneNumber"
              placeholder="예시 : 010-1234-5678"
              {...register('phoneNumber')}
            />
            {errors.phoneNumber && (
              <ErrorComment>
                {errors.phoneNumber.message as string}
              </ErrorComment>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default BasicInfo;
