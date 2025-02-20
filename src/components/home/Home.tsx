import { Link } from 'react-router';
import Logo from '../../assets/logo.png';
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
        <div>
          <p>드디어 Prography 10기 모집이 시작되었습니다.</p>
        </div>
        <button className="rounded-md bg-blue-500 text-white p-3" type="button">
          <Link to={`/${PAGE.APPLY_FORM}`} replace={false}>
            지원하기
          </Link>
        </button>
      </main>
    </>
  );
};
export default Home;
