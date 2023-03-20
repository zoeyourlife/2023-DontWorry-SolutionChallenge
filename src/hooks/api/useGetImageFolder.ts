import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";

function useGetImageFolder() {
  const [imageFolderData, setImageFolderData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getImageFolderData() {
    setIsLoading(true);
    const response = await instance.get(`/images`);
    setImageFolderData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getImageFolderData();
  }, []);

  return {
    imageFolderData,
    isLoading,
  };
}

export default useGetImageFolder;
