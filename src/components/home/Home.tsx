import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import { PAGE } from '../../constants/page';

const Home = () => {
  return (
    <>
      <main className="flex flex-col items-center gap-10 text-center">
        <div className="flex justify-start">
          <img src={Logo} alt="prography logo" />
        </div>
        <h2 className="font-bold text-xl text-center  ">
          안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.
        </h2>
        <div className="flex flex-col gap-12 items-center">
          <p className="font-bold text-blue-500 text-lg">
            드디어 Prography 10기 모집이 시작되었습니다.
          </p>
          <p className="text-sm/6 font-normal whitespace-break-spaces text-center ">
            {`Product Owner / Design / iOS / AOS / Frontend(React) / Backend(Spring)\n총 6개의 파트를 모집합니다.`}
          </p>
          <section className="text-sm font-normal flex flex-col gap-4 items-center text-center">
            <p>✔️ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</p>
            <p>✔️ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</p>
            <p>✔️ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</p>
          </section>
          <section className="text-sm font-normal flex flex-col gap-4 items-center">
            <p className="font-bold text-blue-500 text-xl">
              "프로답게, 재미있게"
            </p>
            <p className="text-center">
              재미있는 작당을 함게 만들어갈 10기에 합류하세요.
            </p>
          </section>
          <section className="text-sm font-normal flex flex-col gap-4 items-center text-center">
            <p>
              📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요
              👇🏻
            </p>
            <p className="text-blue-500 font-semibold">
              <Link
                to={'https://prography-admin.notion.site/apply-prography10'}
              >
                프로그라피 10기 모집 자세히 알아보기
              </Link>
            </p>
            <p className="text-blue-500 font-semibold">
              <Link to={'https://prography.org/'}>🏠 공식 홈페이지</Link>
            </p>
            <p className="text-blue-500 font-semibold">
              <Link to={'https://www.instagram.com/prography_official/'}>
                🔗 인스타그램
              </Link>
            </p>
          </section>
        </div>

        <Link to={`/${PAGE.APPLY_FORM}`}>
          <button className="cursor-pointer rounded-md bg-blue-600 text-white  font-bold text-sm w-36 h-12">
            지원하기
          </button>
        </Link>
      </main>
    </>
  );
};
export default Home;
