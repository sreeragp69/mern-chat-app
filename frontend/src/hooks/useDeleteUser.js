import { useState } from "react"; 
import toast from "react-hot-toast";

const useDeleteUser = (id) => {
 
  
  const [loading, setLoading] = useState(false);
 
  let dltMessage = ""; 

  const deleteUser = async () => {
    setLoading(true); 

    try {
      const res = await fetch(`/api/user/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();
      console.log(data);

      if (res.ok) {
        dltMessage = data.message; 
        toast.success(dltMessage);
        
      }

      if (data.error) {
        throw new Error(data.error);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }

    return { loading, dltMessage }; 
  };

  return { deleteUser, loading }; 
};

export default useDeleteUser;
