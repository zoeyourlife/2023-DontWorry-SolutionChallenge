import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "src/components/FormInput";
import SubmitBtn from "src/components/SubmitBtn";
import styled from "styled-components";

function Signup() {
  const router = useRouter();
  const [userId, setUserId] = useState<string>("");
  const [password, setPassWord] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => {
    setUserId(e.target.value);
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassWord(e.target.value);
  };

  const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // 추후 백엔드 서버 연결
    axios
      .post("http://35.247.84.165/index", {
        userId: userId,
        password: password,
        email: email,
      })
      .then(() => {
        router.push("/Signin/index");
      })
      .catch((err) => {
        console.log(err);
      });
  };
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
          <FormInput type="email" id="Email" value={email} />
        </StyledInputDiv>

        <StyledInputDiv>
          <FormInput type="text" id="ID" value={userId} />
        </StyledInputDiv>

        <StyledInputDiv>
          <FormInput type="password" id="Password" value={password} />
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
