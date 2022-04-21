import { useRecoilState } from 'recoil';
import { login } from 'states';

const Profile = () => {
  const [isLogin] = useRecoilState(login);
  return (
    <div>
      {isLogin ? (
        <div>
          <h1>프로필</h1>
          어쩌구
        </div>
      ) : (
        <h2>로그인이 되어있지 않습니다.</h2>
      )}
    </div>
  );
};

export default Profile;
