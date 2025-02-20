import { Link } from 'react-router';

const Completion = () => {
  return (
    <>
      <div className="bg-white w-full h-82 rounded-md flex flex-col items-center gap-5 p-12 shadow-sm">
        <div className="rounded-full bg-blue-600 text-white w-16 h-16 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fill-rule="nonzero"
              stroke="none"
              stroke-width="1"
              stroke-linecap="butt"
              stroke-linejoin="miter"
              stroke-miterlimit="10"
              stroke-dasharray=""
              stroke-dashoffset="0"
              font-family="none"
              font-weight="none"
              font-size="none"
              text-anchor="none"
              // style="mix-blend-mode: normal"
            >
              <g transform="scale(5.12,5.12)">
                <path d="M41.9375,8.625c-0.66406,0.02344 -1.27344,0.375 -1.625,0.9375l-18.8125,28.78125l-12.1875,-10.53125c-0.52344,-0.54297 -1.30859,-0.74609 -2.03125,-0.51953c-0.71875,0.22266 -1.25391,0.83203 -1.37891,1.57422c-0.125,0.74609 0.17578,1.49609 0.78516,1.94531l13.9375,12.0625c0.4375,0.37109 1.01563,0.53516 1.58203,0.45313c0.57031,-0.08594 1.07422,-0.41016 1.38672,-0.89062l20.09375,-30.6875c0.42969,-0.62891 0.46484,-1.44141 0.09375,-2.10547c-0.37109,-0.66016 -1.08594,-1.05469 -1.84375,-1.01953z"></path>
              </g>
            </g>
          </svg>
        </div>
        <h3 className="text-xl font-medium">지원이 완료되었습니다!</h3>
        <section className="flex flex-col gap-2 justify-center items-center text-center">
          <p className="text-xs font-medium text-gray-500">
            프로그라피 10기 지원해주셔서 감사합니다.
          </p>
          <p className="text-xs font-medium text-gray-500 ">
            서류 심사 결과는 입력하신 이메일로 안내드릴 예정입니다.
          </p>
        </section>
        <Link to="/">
          <button className="bg-blue-500 w-36 h-10 text-xs text-white font-medium rounded-lg">
            홈으로 돌아가기
          </button>
        </Link>
      </div>
    </>
  );
};
export default Completion;
