import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";
import { IGetHelpData, IGetHelpDataItem } from "src/remotes/help";

interface UseGetHelpByCountryProps {
  country: string | string[] | undefined;
}

function useGetHelp({ country }: UseGetHelpByCountryProps) {
  const [helpData, setHelpData] = useState<IGetHelpDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  async function getHelpData() {
    // async function getHelpData(name: string) {
    setIsLoading(true);
    // const response = await instance.get<{}, IGetHelpData>(`/help/${name}`);
    const response = await instance.get<{}, IGetHelpData>(`/help/japan`);
    setHelpData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getHelpData();
  }, []);
  // useEffect(() => {
  //   if (typeof country === "string") getHelpData(country);
  // }, [country, setHelpData]);

  return {
    helpData,
    isLoading,
  };
}

export default useGetHelp;
