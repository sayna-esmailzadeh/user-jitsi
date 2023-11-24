import Button from "components/UI/Button";
import useGetUsers from "hooks/useGetUsers";

const UsersPage = () => {
  const {
    computed: { tableHeaders },
    model: { isLoading, users },
    actions: { handleClickedGetApi },
  } = useGetUsers();
  return (
    <>
      <h1 className="text-3xl font-bold underline">Users List</h1>
      <table className="table-auto w-full my-10">
        <thead>
          <tr className="bg-gray-light/50 border-b border-gray-200 py-4 h-5">
            {tableHeaders.map((col) => (
              <th key={`user-table-${col}`}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map(({ firstName, lastName, country, image }) => (
            <tr key={`${firstName} ${lastName}`}>
              <td className="p-2 text-center">{firstName}</td>
              <td className="p-2 text-center">{lastName}</td>
              <td className="p-2 text-center">
                <picture className="flex justify-center">
                  <source media="(min-width:320px)" srcSet={image.thumbnail} />
                  <source media="(min-width:650px)" srcSet={image.medium} />
                  <img src={image.large} alt="Flowers" className="w-20 h-16" />
                </picture>
              </td>
              <td className="p-2 text-center">{country}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end">
        <Button
          size="sm"
          textColor="white"
          bgColor="primary"
          onClick={handleClickedGetApi}
        >
          Add New User
        </Button>
      </div>
      {isLoading && (
        <div className="w-full mx-auto text-center">Loading...</div>
      )}
    </>
  );
};

export default UsersPage;
