import { ReactNode, useEffect } from 'react';

interface StepLayoutProps {
  stepIndex: number;
  preValidate?: () => void;
  onNext?: () => void;
  onPrev?: () => void;
  isSubmit?: boolean;
  children: ReactNode;
}

const StepLayout = ({
  stepIndex,
  preValidate,
  onNext,
  onPrev,
  isSubmit = false,
  children,
}: StepLayoutProps) => {
  useEffect(() => {
    if (preValidate) preValidate();
  }, []);
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center gap-6">
        <div className="flex justify-center items-center w-full h-16 bg-white rounded-md gap-1 p-5">
          <div
            className={`text-sm w-6 h-6 rounded-full flex justify-center items-center ${
              stepIndex >= 0
                ? 'text-white bg-blue-600'
                : 'text-black bg-neutral-200'
            }  `}
            style={{ fontSize: '12px' }}
          >
            1
          </div>
          <div
            className={`h-1 grow-1  ${
              stepIndex >= 1 ? ' bg-blue-600' : ' bg-neutral-200'
            }`}
          ></div>
          <div
            className={`text-sm w-6 h-6 rounded-full flex justify-center items-center  ${
              stepIndex >= 1
                ? 'text-white bg-blue-600'
                : 'text-black bg-neutral-200'
            } `}
            style={{ fontSize: '12px' }}
          >
            2
          </div>
          <div
            className={`h-1 grow-1  ${
              stepIndex >= 2 ? ' bg-blue-600' : ' bg-neutral-200'
            }`}
          ></div>
          <div
            className={`text-sm w-6 h-6 rounded-full flex justify-center items-center ${
              stepIndex >= 2
                ? 'text-white bg-blue-600'
                : 'text-black bg-neutral-200'
            }`}
            style={{ fontSize: '12px' }}
          >
            3
          </div>
        </div>
        <div className="bg-white w-full rounded-md p-5">{children}</div>
        <div className="flex justify-between items-center w-full h-16 bg-white rounded-md gap-1 p-5">
          {
            <button
              className={` w-16 h-7 rounded-sm text-xs font-bold ${
                onPrev
                  ? 'bg-blue-600 text-white cursor-pointer'
                  : 'text-gray-600 bg-neutral-200'
              } `}
              type="button"
              onClick={onPrev}
              disabled={onPrev ? false : true}
            >
              뒤로
            </button>
          }
          {onNext && (
            <button
              type="button"
              className={`cursor-pointer bg-blue-600 w-16 h-7 rounded-sm text-xs font-bold text-white  `}
              onClick={onNext}
            >
              다음
            </button>
          )}
          {isSubmit && (
            <button
              type="submit"
              className={`cursor-pointer bg-blue-600 w-16 h-7 rounded-sm text-xs font-bold text-white  `}
            >
              제출
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default StepLayout;
