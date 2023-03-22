import axios from "axios";
import { useEffect, useState } from "react";
import { API_BASED_URL } from "src/constants/apiUrl";
import { IGetMainDetailDataItem } from "src/remotes/mainDetail";

interface IGetMainById {
  data: IGetMainDetailDataItem;
}
interface IGetMainByIdProps {
  id: string | string[] | undefined;
}

function useGetMainById({ id }: IGetMainByIdProps) {
  const [post, setPost] = useState<IGetMainDetailDataItem | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function getMainById(id: string) {
      setIsLoading(true);
      const response = await axios.get<{}, IGetMainById>(
        `${API_BASED_URL}/main/detail/${id}`,
      );

      setPost(response.data);
      setIsLoading(false);
    }

    if (typeof id === "string") getMainById(id);
  }, [id, setPost]);

  return {
    post,
    isLoading,
  };
}

export default useGetMainById;
