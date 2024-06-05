import { GetUserQuery, GetUserQueryVariables } from "@/API";
import { GET_USER_QUERY } from "../../../Apollo/queries";
import { useAppSelector } from "@/store";
import { useQuery } from "@apollo/client";

const useAccountScreen = () => {
  const {
    user: { id },
  } = useAppSelector(state => state.user);
  console.log({ id });
  const { data } = useQuery<GetUserQuery, GetUserQueryVariables>(
    GET_USER_QUERY,
    {
      variables: {
        id: String(id),
      },
    },
  );

  console.log({ data });
  return {
    data,
    id,
  };
};

export default useAccountScreen;
