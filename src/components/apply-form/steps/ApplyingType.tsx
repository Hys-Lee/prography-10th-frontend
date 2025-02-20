import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

interface ApplyingTypeProps {
  onPrev: () => void;
  prevValidate: () => Promise<void>;
  context: object;
}

const ApplyingType = ({ context, onPrev, prevValidate }: ApplyingTypeProps) => {
  const { register, getValues, reset } = useFormContext();
  // useEffect(() => {
  //   reset({ ...context, applyingType: getValues('applyingType') });

  //   const getPrevValidation = async () => await prevValidate();
  //   if (!getPrevValidation) {
  //     onPrev();
  //   }
  // }, []);

  useEffect(() => {
    prevValidate();
    // reset(context);
  }, []);

  console.log('어플랑에서 폼: ', getValues());

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
      </div>
      <div>
        <button type="button" onClick={onPrev}>
          이전
        </button>
      </div>
    </>
  );
};

export default ApplyingType;
