import useFetch from "./useFetch";

const UserApi = () => {
  let data = useFetch("https://jsonplaceholder.typicode.com/users");
  return (
    <div>
      <ul>
        {data.map((ele) => (
          <div key={ele.id}>
            <li>{ele?.name}</li>
            <li>{ele?.email}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default UserApi;
