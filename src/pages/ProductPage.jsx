import { useParams } from "react-router-dom";

export default function ProductPage() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold">Product Page – ID: {id}</h1>
    </div>
  );
}
