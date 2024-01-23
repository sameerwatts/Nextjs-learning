import Link from "next/link";

const ClientsPage = () => {
  const clients = [
    { name: "Sameer", id: "sam" },
    { name: "Parul", id: "paru" },
  ];
  return (
    <div>
      <h1>The clients page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={`/clients/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
