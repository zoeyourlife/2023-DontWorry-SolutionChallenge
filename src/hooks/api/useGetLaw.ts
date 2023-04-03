import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";
import { IGetLawData, IGetLawDataItem } from "src/remotes/law";

interface useGetLawByCountryProps {
  countryName: string | string[] | undefined;
}

function useGetLaw({ countryName }: useGetLawByCountryProps) {
  const [lawData, setLawData] = useState<IGetLawDataItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getLawData(name: string) {
    setIsLoading(true);
    const response = await instance.get<{}, IGetLawData>(`/law/${name}`);

    setLawData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    if (typeof countryName === "string") getLawData(countryName);
  }, [countryName, setLawData]);

  return {
    lawData,
    isLoading,
  };
}

export default useGetLaw;
