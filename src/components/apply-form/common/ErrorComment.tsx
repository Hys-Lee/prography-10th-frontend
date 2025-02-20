import { ReactNode } from 'react';

interface ErrorCommentProps {
  children: ReactNode;
}
const ErrorComment = ({ children }: ErrorCommentProps) => {
  return <p className="text-red-500 text-xs">{children}</p>;
};

export default ErrorComment;
