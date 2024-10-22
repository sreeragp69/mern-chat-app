import  { useEffect, useState } from "react";
import toast from "react-hot-toast";

const useGetSingleUser = (id) => {
  const [loading, setLoading] = useState(false);
  const [singleUser, setSingleUser] = useState(null);

  useEffect(() => {
    if (!id) return;

    const getSingleUser = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/user/${id}`);
        const data = await res.json();

        if (data.error) {
          throw new Error(data.error);
        }
        setSingleUser(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };

    getSingleUser();
  }, [id]);

  return { loading, singleUser };
};

export default useGetSingleUser;
