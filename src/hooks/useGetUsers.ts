import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { UserPictureType, UserType } from "api/Users/index.types";
import { getUsersApi } from "api/Users";

type UsersType = {
  firstName: string;
  lastName: string;
  image: UserPictureType;
  country: string;
};

const useGetUsers = () => {
  const [users, setUsers] = useState<UsersType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getNewUser = useCallback(() => {
    setIsLoading(true);
    console.log("useCallback");
    axios.get(getUsersApi).then((response) => {
      const data: UserType[] = response.data.results;
      const result = data.map((user: UserType) => ({
        firstName: user.name.first,
        lastName: user.name.last,
        image: user.picture,
        country: user.location.country,
      }));
      setUsers((prevState) => [...prevState, ...result]);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    if (users.length === 0) {
      console.log("useEffect");
      getNewUser();
    }
  }, [getNewUser, users]);

  return {
    actions: {
      handleClickedGetApi() {
        getNewUser();
      },
    },
    computed: {
      get tableHeaders() {
        return ["First Name", "Last Name", "Image", "Country"];
      },
    },
    model: { users, isLoading },
  };
};

export default useGetUsers;
