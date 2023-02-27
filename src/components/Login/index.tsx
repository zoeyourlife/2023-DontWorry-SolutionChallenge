import {
  AdditionalUserInfo,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "src/constants/firebaseConfig";

function Login() {
  const [userData, setUserData] = useState<User | null>(null);

  const handleGoogleLogin = async() => {
    // provider 구글 설정
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: 'select_account'
    })
    await signInWithPopup(auth, provider) // 팝업 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const handleGoogleLogout = async() =>{
    await auth.signOut()
    .then((data)=>{
      console.log(data);
    })
  }

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>로그인</button>
      <h4>로그인하면 아래에 이름 나타남</h4>
      <div>
        {userData
          ? "당신의 이름은:" + userData.displayName
          : "로그인 버튼 클릭:)"}
      </div>
      <button onClick={handleGoogleLogout}>로그아웃</button>
    </div>
  );
}

export default Login;
