import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';
import SubHeader from '../common/SubHeader';
import RadioInputStyle from '../style/RadioInputStyle';

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-6">
        <SubHeader
          subHeaderContent="개인정보 수집 동의"
          subDescriptionContent="프로그라피 10기 지원을 위한 개인정보 수집에 대한 동의가 필요합니다"
        />
        <fieldset className="border-gray-200 border-1 rounded-md p-4 text-xs font-medium flex flex-col gap-1 hover:border-blue-500">
          <div className="flex flex-col justify-between gap-2">
            <section>
              <p>수집 목적: Prography 10기 리쿠르팅 과정 및 결과 안내</p>
              <p>수집 항목: 이름, 이메일, 핸드폰번호, 학교 정보 및 직장 정보</p>
              <p>보유 및 이용 기간: 리쿠르팅 과정 종료일(3월 7일) 이후 파기</p>
            </section>
            <section className="flex flex-row items-center">
              <p>개인정보 수집여부 동의 여부를 체크해주세요.</p>
              <span className="text-red-600 text-lg flex ">*</span>
            </section>
          </div>
          <div className="flex flex-col gap-3">
            <label className={RadioInputStyle.container} htmlFor="agree">
              <input
                type="radio"
                id="agree"
                value={'agree'}
                className={RadioInputStyle.button}
                {...register('personalInfo')}
              />
              <p className={RadioInputStyle.text}>
                개인정보 수집 여부에 동의합니다
              </p>
            </label>

            <label className={RadioInputStyle.container} htmlFor="disagree">
              <input
                type="radio"
                id="disagree"
                value={'disagree'}
                className={RadioInputStyle.button}
                {...register('personalInfo')}
              />
              <p className={RadioInputStyle.text}>
                개인정보 수집 여부에 동의하지 않습니다
              </p>
            </label>
          </div>
          {errors.personalInfo && (
            <ErrorComment>
              {errors.personalInfo?.message as string}
            </ErrorComment>
          )}
        </fieldset>
      </div>
    </>
  );
};

export default PersonalInfo;
