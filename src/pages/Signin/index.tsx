import axios from "axios";
import { useRouter } from "next/router";
import { ChangeEvent, useCallback, useState } from "react";
import { API_BASE_URL } from "src/constants/apiUrl";

function Signin() {
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
          .post(`${API_BASE_URL}/login`, {
            Id: userId,
            password: password,
          })
          .then((res) => {
            console.log(res.data);
            router.push("/Main");
          });
        // Id, Pw 에러
      } catch (err) {
        console.log(err);
        alert("Incorrect Info Id or Pw");
      }

      return (
        <>
          <div>
            <h1>Login</h1>
            <h3>Report & Report</h3>
          </div>
          <form onSubmit={onSubmit}>
            <div>
              <input type="text" />
            </div>
            <div>
              <input type="password" />
            </div>
            <input type="checkbox" />
            store? Account
            <button>Login</button>
          </form>

          <div>
            <h3>No account?</h3>
            <button>create account</button>
          </div>
        </>
      );
    },
    [userId, password, router]
  );
}

export default Signin;
