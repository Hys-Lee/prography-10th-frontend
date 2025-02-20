import { ReactNode } from 'react';

interface ErrorCommentProps {
  children: ReactNode;
}
const ErrorComment = ({ children }: ErrorCommentProps) => {
  return <p style={{ color: 'red' }}>{children}</p>;
};

export default ErrorComment;
