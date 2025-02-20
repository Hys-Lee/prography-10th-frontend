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
      <div>
        <div>대충 단계: {stepIndex}</div>
        {children}
        {onPrev && (
          <button type="button" onClick={onPrev}>
            이전
          </button>
        )}
        {onNext && (
          <button type="button" onClick={onNext}>
            다음
          </button>
        )}
        {isSubmit && <button type="submit">제출</button>}
      </div>
    </>
  );
};

export default StepLayout;
