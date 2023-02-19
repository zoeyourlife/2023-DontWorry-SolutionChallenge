import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useCallback, useState } from "react";
import FormInput from "src/components/FormInput";
import SubmitBtn from "src/components/SubmitBtn";
import styled from "styled-components";

function Signup() {
  // id, pw, email check
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  // error message state
  const [userIdMessage, setUserIdMessage] = useState<string>("");
  const [passwordMessage, setPasswordMessage] = useState<string>("");
  const [emailMessage, setEmailMessage] = useState<string>("");

  // validity test
  const [isUserId, setIsUserId] = useState<boolean>(false);
  const [isPassword, setIsPassword] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);

  // const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
  //   setUserId(e.target.value);
  // };

  const onChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(e.target.value);
      if (e.target.value.length < 2 || e.target.value.length > 5) {
        setUserIdMessage("2글자 이상 5글자 미만으로 입력해주세요");
        setIsUserId(false);
      } else {
        setUserIdMessage("올바른 아이디 형식입니다.");
        setIsUserId(true);
      }
    },
    []
  );

  // const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
  //   setPassWord(e.target.value);
  // };

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassWord(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요"
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("안전한 비밀번호입니다.");
        setIsPassword(true);
      }
    },
    []
  );

  // const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
  //   setEmail(e.target.value);
  // };

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEmail(emailCurrent);

      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("이메일 형식이 틀림");
        setIsEmail(false);
      } else {
        setEmailMessage("올바른 이메일 형식입니다.");
        setIsEmail(true);
      }
    },
    []
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios
          .post("http://35.247.84.165/signup", {
            userId: userId,
            password: password,
            email: email,
          })
          .then((res) => {
            console.log("response:", res);
            if (res.status === 200) {
              router.push("/Signin/index");
            }
          });
      } catch (err) {
        console.error(err);
      }
    },
    [email, userId, password, router]
  );
  return (
    <>
      <StyledTextDiv>
        <StyledPageTitleH1>DontWorry</StyledPageTitleH1>
        <StyledPageIntroH3>
          we are on <StyledPageIntroSpan>your</StyledPageIntroSpan> side
        </StyledPageIntroH3>
      </StyledTextDiv>
      <StyledForm onSubmit={onSubmit}>
        <StyledInputDiv>
          <FormInput
            type="email"
            id="Email"
            value={email}
            onChange={onChangeEmail}
          />
        </StyledInputDiv>

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
            onChagne={onChangePassword}
          />
        </StyledInputDiv>

        <StyledButtonDiv>
          <Link href="/">
            <SubmitBtn type="button" name="Back" />
          </Link>
          <SubmitBtn type="submit" name="Submit" />
        </StyledButtonDiv>
      </StyledForm>
    </>
  );
}

export default Signup;

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

const StyledPageIntroSpan = styled.span`
  color: ${({ theme }) => theme.color.blueGreen};
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
  padding: 1rem 0 1rem 2rem;
  color: ${({ theme }) => theme.color.grey100};
`;

const StyledButtonDiv = styled.div`
  margin-top: 1rem;
`;

// String userId
// String password
// String email
