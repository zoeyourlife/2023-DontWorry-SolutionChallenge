import { useRouter } from "next/router";
import { useEffect } from "react";

function Home() {
  const user =
    typeof window !== "undefined" ? sessionStorage.getItem("userId") : null;
  const router = useRouter();

  useEffect(() => {
    if (router.isReady && user === null) {
      router.replace(`/Signin`);
    } else {
      router.replace(`/DontWorry/About`);
    }
  }, [user, router, router.isReady]);

  return null;
}

export default Home;
