import axios from "axios";
import { useRouter } from "next/router";
import React, { useCallback, useState } from "react";
import FormInput from "src/components/FormInput";
import BackBtnNav from "src/components/Nav/BackBtnNav";
import SubmitBtn from "src/components/SubmitBtn";
import { API_BASED_URL } from "src/constants/apiUrl";
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

  const onChangeUserId = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setUserId(e.target.value);
      if (e.target.value.length < 6 || e.target.value.length > 20) {
        setUserIdMessage(
          "Please enter more than 6 characters and less than 20.",
        );
        setIsUserId(false);
      } else {
        setUserIdMessage("This is a valid ID format.");
        setIsUserId(true);
      }
    },
    [],
  );

  const onChangePassword = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const passwordRegex =
        /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
      const passwordCurrent = e.target.value;
      setPassWord(passwordCurrent);

      if (!passwordRegex.test(passwordCurrent)) {
        setPasswordMessage(
          "Please enter at least 8 digits in combination of numbers + alphabet + special characters.",
        );
        setIsPassword(false);
      } else {
        setPasswordMessage("It's a safe password.");
        setIsPassword(true);
      }
    },
    [],
  );

  const onChangeEmail = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
      const emailCurrent = e.target.value;
      setEmail(emailCurrent);

      if (!emailRegex.test(emailCurrent)) {
        setEmailMessage("Not correct, Try again");
        setIsEmail(false);
      } else {
        setEmailMessage("It's the correct email format.");
        setIsEmail(true);
      }
    },
    [],
  );

  const onSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await axios
          .post(`${API_BASED_URL}/signup`, {
            userId: userId,
            password: password,
            email: email,
          })
          .then((res) => {
            console.log("response:", res);
            if (res.status === 200) {
              console.log("회원가입 완료");
              // 모달창 구현시 사용할 기능
              // setPopup({
              //   open: true,
              //   title: "Confirm",
              //   message: "Join Success!",
              // })
              router.push("/Signin");
            } // ID 중복 가입시? 이 부분도 고려예정.
          });
      } catch (err) {
        console.error(err);
      }
    },
    [email, userId, password, router],
  );
  return (
    <>
      <BackBtnNav />
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
          {email.length > 0 && (
            <StyledValidityDiv
              className={`message ${isEmail ? "success" : "error"}`}
            >
              {emailMessage}
            </StyledValidityDiv>
          )}
        </StyledInputDiv>

        <StyledInputDiv>
          <FormInput
            type="text"
            id="ID"
            value={userId}
            onChange={onChangeUserId}
          />
          {userId.length > 0 && (
            <StyledValidityDiv
              className={`message ${isUserId ? "success" : "error"}`}
            >
              {userIdMessage}
            </StyledValidityDiv>
          )}
        </StyledInputDiv>

        <StyledInputDiv>
          <FormInput
            type="password"
            id="Password"
            value={password}
            onChange={onChangePassword}
          />
          {password.length > 0 && (
            <StyledValidityDiv
              className={`message ${isPassword ? "success" : "error"}`}
            >
              {passwordMessage}
            </StyledValidityDiv>
          )}
        </StyledInputDiv>

        <StyledButtonDiv>
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
  padding-bottom: 5.5rem;
`;

const StyledInputDiv = styled.div`
  margin-top: 4rem;
`;

const StyledInputTitleLabel = styled.label`
  padding: 1rem 0 1rem 2rem;
  color: ${({ theme }) => theme.color.grey100};
`;

const StyledButtonDiv = styled.div`
  margin-top: 4rem;
`;

const StyledValidityDiv = styled.div`
  display: flex;
  margin: 0.5rem 0 0 3.4rem;
  color: ${({ theme }) => theme.color.white};
`;
