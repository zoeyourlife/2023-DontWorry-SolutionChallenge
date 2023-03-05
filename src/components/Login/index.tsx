import {
  AdditionalUserInfo,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signInWithPopup,
  User,
  UserCredential,
} from "firebase/auth";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "src/constants/firebaseConfig";

function Login() {
  const router = useRouter();
  const [userData, setUserData] = useState<User | null>(null);

  const handleGoogleLogin = async () => {
    // provider 구글 설정
    const provider = new GoogleAuthProvider();
    // 자동 로그인 안되고 모달창 뜨게
    provider.setCustomParameters({
      prompt: "select_account",
    });
    await signInWithPopup(auth, provider) // 팝업 띄워서 로그인
      .then((data) => {
        setUserData(data.user); // user data 설정
        console.log(data); // console에 UserCredentialImpl 출력
        router.push("/Main");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 일단 없을 예정 (추후 얘기해보고)
  const handleGoogleLogout = async () => {
    await auth.signOut().then((data) => {
      console.log(data);
    });
  };

  return (
    <div>
      <h3>구글 로그인 테스트</h3>
      <button onClick={handleGoogleLogin}>
        {/* <Image
          src="/images/btn_google_signin_dark_normal_web@2x.png"
          alt="why?"
          width={250}
          height={100}
        /> */}
        로그인
      </button>
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
