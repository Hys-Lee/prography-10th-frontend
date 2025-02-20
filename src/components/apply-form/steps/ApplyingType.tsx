import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';

const ApplyingType = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <p>지원 정보</p>
      </div>
      <div>
        <fieldset>
          <div>
            <input
              type="radio"
              id="frontend"
              value={'frontend'}
              {...register('applyingType')}
            />
            <label>프론트엔드</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('applyingType')}
              id="backend"
              value={'backend'}
            />
            <label>백엔드</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('applyingType')}
              id="design"
              value={'design'}
            />
            <label>디자인</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('applyingType')}
              id="ios"
              value={'ios'}
            />
            <label>iOS</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('applyingType')}
              id="android"
              value={'android'}
            />
            <label>안드로이드</label>
          </div>
          <div>
            <input
              type="radio"
              {...register('applyingType')}
              id="productOwner"
              value={'productOwner'}
            />
            <label>Product Owner</label>
          </div>
        </fieldset>
        {errors?.applyingType && (
          <ErrorComment>{errors.applyingType.message as string}</ErrorComment>
        )}
      </div>
    </>
  );
};

export default ApplyingType;
