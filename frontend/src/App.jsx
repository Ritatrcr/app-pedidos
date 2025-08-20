import { useEffect, useState } from "react";

const API = import.meta.env.VITE_API_URL ;

export default function App() {
  const [nombre, setNombre] = useState("");
  const [pedido, setPedido] = useState("");
  const [orders, setOrders] = useState([]);

  const load = async () => {
    const res = await fetch(`${API}/orders`);
    const data = await res.json();
    setOrders(data);
  };

  useEffect(() => { load(); }, []);

  const submit = async (e) => {
    e.preventDefault();
    await fetch(`${API}/orders`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre, pedido })
    });
    setNombre(""); setPedido("");
    load();
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", fontFamily: "sans-serif" }}>
      <h1>Sistema de Pedidos</h1>

      <h2>Realizar pedido</h2>
      <form onSubmit={submit} style={{ display: "grid", gap: 8 }}>
        <input placeholder="Nombre" value={nombre} onChange={(e)=>setNombre(e.target.value)} required />
        <input placeholder="Pedido" value={pedido} onChange={(e)=>setPedido(e.target.value)} required />
        <button type="submit">Enviar</button>
      </form>

      <h2 style={{ marginTop: 24 }}>Ver pedidos</h2>
      <table border="1" cellPadding="6">
        <thead><tr><th>ID</th><th>Nombre</th><th>Pedido</th></tr></thead>
        <tbody>
          {orders.map(o => (
            <tr key={o.id}><td>{o.id}</td><td>{o.nombre}</td><td>{o.pedido}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

