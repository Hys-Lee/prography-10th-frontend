import { ReactNode, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

const StepLayout = ({
  context,
  onNext,
  onPrev,
  children,
}: {
  context: object;
  onNext?: () => Promise<void>;
  onPrev?: () => void;
  children: ReactNode;
}) => {
  const { setValue, getValues } = useFormContext();
  // test
  console.log('컨텍스트: ', context, getValues());

  // useEffect(() => {
  //   const formContent = getValues();
  //   Object.entries(formContent).forEach(([key, value]) => {
  //     const updatedValue = key in Object.keys(context) ? value : undefined;
  //     setValue(key, updatedValue);
  //   });
  // }, []);

  const [state, setState] = useState(0);
  return (
    <>
      <div>
        <div>대충 단계</div>
        {children}
        {onPrev && (
          <button
            type="button"
            onClick={() => {
              onPrev();
            }}
          >
            이전
          </button>
        )}
        {onNext && (
          <button
            type="button"
            onClick={async () => {
              await onNext();
            }}
          >
            다음
          </button>
        )}
      </div>
      <button
        type="button"
        onClick={() => {
          setState((prev) => prev + 1);
          console.log('스텝에서 값들: ', getValues());
        }}
      >{`리렌더링 버튼: ${state}`}</button>
    </>
  );
};

export default StepLayout;
