import { useRouter } from "next/router";

const ClientProjectsPage = () => {
  const router = useRouter();

  function loadProjectHandler() {
    // load data...
    // router.push("/clients/sam/projectA");
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "sam", clientprojectid: "projectA" },
    });
  }

  console.log("router query in clientprojectspage", router.query);
  return (
    <div>
      <h1>The projects of given client</h1>
      <button onClick={loadProjectHandler}>Load project A</button>
    </div>
  );
};

export default ClientProjectsPage;
