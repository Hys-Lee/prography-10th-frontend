import { ReactNode } from 'react';

interface PageLayoutProps {
  children: ReactNode;
}
const PaygeLayout = ({ children }: PageLayoutProps) => {
  return (
    <div className="p-8 bg-neutral-200 min-w-96 min-h-dvh flex justify-center items-center">
      <div className="p-12 bg-neutral-100 rounded-2xl flex justify-center items-center w-full min-w-96 h-full">
        {children}
      </div>
    </div>
  );
};
export default PaygeLayout;
