import { useFormContext } from 'react-hook-form';
import ErrorComment from '../common/ErrorComment';

const PersonalInfo = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <div>
        <p>personalInfo</p>
        <fieldset>
          <div>
            <input
              type="radio"
              id="agree"
              value={'agree'}
              {...register('personalInfo')}
            />
            <label htmlFor="agree">찬성</label>
          </div>
          <div>
            <input
              type="radio"
              id="disagree"
              value={'disagree'}
              {...register('personalInfo')}
            />
            <label htmlFor="disagree">반대</label>
          </div>
        </fieldset>

        {errors.personalInfo && (
          <ErrorComment>{errors.personalInfo?.message as string}</ErrorComment>
        )}
      </div>
    </>
  );
};

export default PersonalInfo;
