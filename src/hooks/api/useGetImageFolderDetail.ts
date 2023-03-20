import { useEffect, useState } from "react";
import { instance } from "src/constants/appClient";

function useGetImageFolderDetail(folderDate: string) {
  const [imageFolderDetailData, setImageFolderData] = useState([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function getImageFolderData(folderDate: string) {
    setIsLoading(true);
    const response = await instance.get(`/images/${folderDate}`);
    setImageFolderData(response.data);
    setIsLoading(false);
  }

  useEffect(() => {
    getImageFolderData(folderDate);
  }, []);

  return {
    imageFolderDetailData,
    isLoading,
  };
}

export default useGetImageFolderDetail;
