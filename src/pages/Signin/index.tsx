import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState, useEffect } from "react";
import FormInput from "src/components/FormInput";
import Login from "src/components/Login";
import SubmitBtn from "src/components/SubmitBtn";
import { API_BASED_URL } from "src/constants/apiUrl";
import styled from "styled-components";

// interface SessionData {
//   Id: string;
//   Password: string;
// }

axios.defaults.withCredentials = true;

function Signin() {
  axios.defaults.withCredentials = true;
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios
          .post(`${API_BASED_URL}/login`, {
            userId: userId,
            password: password,
          })
          .then((res) => {
            console.log(res);
            console.log(res.data.userId);
            console.log(res.data);
            if (res.data.userId === undefined) {
              console.log("==========", res.data.msg);
              alert("입력하신 id가 일치 X");
            } else if (res.data.userId === null) {
              console.log("==========", "입력된 비밀번호 일치 X");
              alert("비밀번호 일치 X");
            } else if (res.data.userId === userId) {
              console.log("===========", "로그인 성공");
              // sessionStorage.setItem("userId", userId);
            }
            console.log(sessionStorage);
            router.push("/Main");
          });
        // Id, Pw 에러
      } catch (err) {
        console.log(err);
        alert("Incorrect Info Id or Pw");
      }
    },
    [userId, password, router]
  );

  return (
    <>
      <StyledTextDiv>
        <StyledPageTitleH1>Login</StyledPageTitleH1>
        <StyledPageIntroH3>Report & Report</StyledPageIntroH3>
      </StyledTextDiv>
      <StyledForm onSubmit={onSubmit}>
        <StyledInputDiv>
          <FormInput
            type="text"
            id="ID"
            value={userId}
            onChange={onChangeUserId}
          />
        </StyledInputDiv>
        <StyledInputDiv>
          <FormInput
            type="password"
            id="Password"
            value={password}
            onChange={onChangePassword}
          />
        </StyledInputDiv>
        <StyledInputTitleLabel>
          <input type="checkbox" />
          <StyledRemSpan>Remember account</StyledRemSpan>
        </StyledInputTitleLabel>
        <SubmitBtn type="submit" name="Login" />
      </StyledForm>
      <Login />

      <div>
        <StyledRemHr />
        <Link href="/Signup">
          <SubmitBtn type="submit" name="Create account" />
        </Link>
      </div>
    </>
  );
}

export default Signin;

const StyledTextDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
`;

const StyledPageTitleH1 = styled.h1`
  font-size: 3rem;
`;

const StyledPageIntroH3 = styled.h3`
  margin-top: 1rem;
  font-size: 1.2rem;
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 4rem;
`;

const StyledInputDiv = styled.div`
  margin-top: 4rem;
`;

const StyledInputTitleLabel = styled.label`
  padding: 1rem 0 1rem 3rem;
  color: ${({ theme }) => theme.color.grey100};
`;

const StyledRemHr = styled.hr`
  width: 70%;
  border: none;
  border-top: 1px solid ${({ theme }) => theme.color.grey500};
  text-align: center;
  margin: 0 auto;
  margin-top: 5rem;
  overflow: visible;
  transform: translateY(48px);
  ::after {
    content: "No account?";
    position: relative;
    top: -15px;
    background-color: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.white};
    padding: 0 10px;
  }
`;

const StyledRemSpan = styled.span`
  margin-left: 0.5rem;
`;
