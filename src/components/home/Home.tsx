import { Link } from 'react-router';
import Logo from '../../assets/images/logo.png';
import { PAGE } from '../../constants/page';

const Home = () => {
  return (
    <>
      <main>
        <div className="flex  justify-start">
          <img src={Logo} />
        </div>
        <h2>
          안녕하세요. 새로운 가치를 만들어가는 IT커뮤니티, Prography 입니다.
        </h2>
        <section>
          <p>드디어 Prography 10기 모집이 시작되었습니다.</p>
          <p>
            Product Owner / Design / iOS / AOS / Frontend(React) /
            Backend(Spring) 총 6개의 파트를 모집합니다.
          </p>
          <p>✔️ 새로운 가치를 만들어내는데 가슴이 두근거리신다면,</p>
          <p>✔️ 열정적인 IT인들과 함께 사이드 프로젝트를 하고 싶으시다면,</p>
          <p>✔️ 탁월한 동료들과 짜릿한 성취감을 느껴보고 싶으시다면,</p>
          <p>"프로답게, 재미있게"</p>
          <p>재미있는 작당을 함게 만들어갈 10기에 합류하세요.</p>
          <p>
            📌 자세한 정보는 아래 페이지에 담아뒀으니, 지원 전 꼭 확인해주세요
            👇🏻
          </p>
          <Link to={'https://prography-admin.notion.site/apply-prography10'}>
            프로그라피 10기 모집 자세히 알아보기
          </Link>
          <Link to={'https://prography.org/'}>🏠 공식 홈페이지</Link>
          <Link to={'https://www.instagram.com/prography_official/'}>
            🔗 인스타그램
          </Link>
        </section>
        <button className="rounded-md bg-blue-500 text-white p-3">
          <Link to={`/${PAGE.APPLY_FORM}`}>지원하기</Link>
        </button>
      </main>
    </>
  );
};
export default Home;
