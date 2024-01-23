import { useRouter } from "next/router";

const ClientProjectsPage = () => {

    const router = useRouter();

    console.log("router query in clientprojectspage",router.query);
  return (
    <div>
      <h1>The projects of given client</h1>
    </div>
  );
};

export default ClientProjectsPage;
