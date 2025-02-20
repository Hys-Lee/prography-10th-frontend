import { Link } from 'react-router';

const Completion = () => {
  return (
    <>
      <div>
        <div>대충 완료 마크</div>
        <h3>지원이 완료되었습니다!</h3>
        <p>프로그라피 10기 지원해주셔서 감사합니다.</p>
        <p>서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.</p>
        <button>
          <Link to="/">홈으로 돌아가기</Link>
        </button>
      </div>
    </>
  );
};
export default Completion;
