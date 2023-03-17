import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";
import { IGetMainData, IGetMainDataItem } from "src/remotes/main";

function useGetMain() {
  const [mainData, setMainData] = useState<IGetMainDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getMainData() {
    setIsLoading(true);
    const response = await instance.get<{}, IGetMainData>(`/main`);
    setMainData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getMainData();
  }, []);

  return {
    mainData,
    isLoading,
  };
}

export default useGetMain;
