import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";
import { IGetHelpData, IGetHelpDataItem } from "src/remotes/help";

interface UseGetHelpByCountryProps {
  countryName: string | string[] | undefined;
}

function useGetHelp({ countryName }: UseGetHelpByCountryProps) {
  const [helpData, setHelpData] = useState<IGetHelpDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getHelpData(name: string) {
    setIsLoading(true);
    const response = await instance.get<{}, IGetHelpData>(`/help/${name}`);

    setHelpData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (typeof countryName === "string") getHelpData(countryName);
  }, [countryName, setHelpData]);

  return {
    helpData,
    isLoading,
  };
}

export default useGetHelp;
