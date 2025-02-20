import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';
import RadioInputStyle from '../style/RadioInputStyle';
import SubHeader from '../common/SubHeader';

const ApplyingType = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div className="flex flex-col gap-6">
        <SubHeader
          subHeaderContent="지원 정보"
          subDescriptionContent="지원하고자 하는 분야를 선택해주세요"
        />

        <fieldset className="border-gray-200 border-1 rounded-md p-4 text-xs font-medium flex flex-col gap-1 hover:border-blue-500">
          <section className="flex flex-row items-center">
            <p>지원 분야를 선택해주세요</p>
            <span className="text-red-600 text-lg flex ">*</span>
          </section>
          <label
            htmlFor="frontend"
            className={`${RadioInputStyle.container} `}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <input
              className={`${RadioInputStyle.button} `}
              type="radio"
              id="frontend"
              value={'frontend'}
              {...register('applyingType')}
            />
            <p className={RadioInputStyle.text}>프론트엔드</p>
          </label>

          <label className={RadioInputStyle.container}>
            <input
              className={RadioInputStyle.button}
              type="radio"
              {...register('applyingType')}
              id="backend"
              value={'backend'}
            />
            <p className={RadioInputStyle.text}>백엔드</p>
          </label>
          <label className={RadioInputStyle.container}>
            <input
              className={RadioInputStyle.button}
              type="radio"
              {...register('applyingType')}
              id="design"
              value={'design'}
            />
            <p className={RadioInputStyle.text}>디자인</p>
          </label>
          <label className={RadioInputStyle.container}>
            <input
              className={RadioInputStyle.button}
              type="radio"
              {...register('applyingType')}
              id="ios"
              value={'ios'}
            />
            <p className={RadioInputStyle.text}>iOS</p>
          </label>
          <label className={RadioInputStyle.container}>
            <input
              className={RadioInputStyle.button}
              type="radio"
              {...register('applyingType')}
              id="android"
              value={'android'}
            />
            <p className={RadioInputStyle.text}>안드로이드</p>
          </label>
          <label className={RadioInputStyle.container}>
            <input
              className={RadioInputStyle.button}
              type="radio"
              {...register('applyingType')}
              id="productOwner"
              value={'productOwner'}
            />
            <p className={RadioInputStyle.text}>Product Owner</p>
          </label>
          {errors?.applyingType && (
            <ErrorComment>{errors.applyingType.message as string}</ErrorComment>
          )}
        </fieldset>
      </div>
    </>
  );
};

export default ApplyingType;
