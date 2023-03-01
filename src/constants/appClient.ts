import axios from "axios";
import { API_BASED_URL } from "./apiUrl";

// axios의 .create() 내장 함수 이용해서 통신할 때 필요한 쿼리나, 헤더, 바디 등등 여러 데이터 함께 보낼 수 있음
// 추후 모듈화 과정 때 사용.
export const instance = axios.create({
  baseURL: `${API_BASED_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});
