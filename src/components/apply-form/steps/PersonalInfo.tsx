import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface PersonalInfoProps {
  onNext: () => void;
  context: object;
}

const PersonalInfo = ({ onNext, context }: PersonalInfoProps) => {
  const {
    register,
    formState: { errors },
    getValues,
    reset,
    setValue,
    trigger,
  } = useFormContext();

  console.log('PersonalInfo에서 폼: ', getValues());
  // useEffect(() => {
  //   console.log('context: ', context);
  //   // reset(context);

  //   Object.entries(context).forEach(([key, value]) => {
  //     setValue(key, value);
  //   });

  //   console.log('펄스널, 유즈이페트');
  // }, []);
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
          <p style={{ color: 'red' }}>
            {errors.personalInfo?.message as string}
          </p>
        )}
      </div>
      <div>
        <button
          type="button"
          onClick={async () => {
            const isValid = await trigger('personalInfo');
            if (isValid) onNext();
            // onNext();
          }}
        >
          다음
        </button>
      </div>
    </>
  );
};

export default PersonalInfo;
