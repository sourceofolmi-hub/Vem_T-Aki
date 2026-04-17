"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../components/CartContext";

export default function Page() {
  const router = useRouter();
  const { items, totalItems, clearCart } = useCart();

  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [morada, setMorada] = useState("");
  const [observacoes, setObservacoes] = useState("");
  const [loading, setLoading] = useState(false);

  const resumo = useMemo(() => {
    return items.map((item) => `- ${item.nome} x${item.quantidade}`).join("\n");
  }, [items]);

  const validar = () => {
    if (items.length === 0) {
      alert("O carrinho está vazio.");
      return false;
    }

    if (!nome.trim() || !telefone.trim() || !morada.trim()) {
      alert("Preencha nome, telefone e morada.");
      return false;
    }

    return true;
  };

  const enviarEncomenda = async () => {
    if (!validar()) return;

    try {
      setLoading(true);

      const res = await fetch("/api/encomenda", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nome,
          telefone,
          morada,
          observacoes,
          items,
          total: totalItems,
        }),
      });

      if (!res.ok) {
        throw new Error("Erro ao enviar");
      }

      clearCart();
      setNome("");
      setTelefone("");
      setMorada("");
      setObservacoes("");

      router.push("/sucesso");
    } catch (error) {
      console.error(error);
      alert("Não foi possível enviar a encomenda.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url("/fundo-luxo.png") center/cover no-repeat',
        color: "#f2ede5",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
        <a
          href="/carrinho"
          style={{
            display: "inline-flex",
            alignItems: "center",
            marginBottom: "18px",
            borderRadius: "999px",
            padding: "12px 18px",
            border: "1px solid rgba(200,171,120,0.18)",
            background: "rgba(20,14,10,0.45)",
            color: "#d4bea0",
            textDecoration: "none",
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
          }}
        >
          ← Voltar ao carrinho
        </a>

        <div
          style={{
            color: "#c8ab78",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            fontSize: "12px",
            marginBottom: "14px",
            fontFamily: "Arial, sans-serif",
          }}
        >
          Encomenda
        </div>

        <h1
          style={{
            fontSize: "48px",
            margin: "0 0 24px",
            color: "#dbc39a",
            fontFamily: 'Georgia, "Times New Roman", serif',
          }}
        >
          Finalizar encomenda
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: "24px",
          }}
        >
          <div
            style={{
              borderRadius: "24px",
              padding: "24px",
              background: "rgba(12,12,12,0.5)",
              border: "1px solid rgba(200,171,120,0.12)",
            }}
          >
            <h2 style={subTitle}>Os seus dados</h2>

            <div style={fieldWrap}>
              <label style={labelStyle}>Nome</label>
              <input
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={fieldWrap}>
              <label style={labelStyle}>Telefone</label>
              <input
                value={telefone}
                onChange={(e) => setTelefone(e.target.value)}
                style={inputStyle}
              />
            </div>

            <div style={fieldWrap}>
              <label style={labelStyle}>Morada</label>
              <textarea
                value={morada}
                onChange={(e) => setMorada(e.target.value)}
                style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
              />
            </div>

            <div style={fieldWrap}>
              <label style={labelStyle}>Observações</label>
              <textarea
                value={observacoes}
                onChange={(e) => setObservacoes(e.target.value)}
                style={{ ...inputStyle, minHeight: "110px", resize: "vertical" }}
              />
            </div>
          </div>

          <div
            style={{
              borderRadius: "24px",
              padding: "24px",
              background: "rgba(12,12,12,0.5)",
              border: "1px solid rgba(200,171,120,0.12)",
            }}
          >
            <h2 style={subTitle}>Resumo da encomenda</h2>

            {items.length === 0 ? (
              <p style={textStyle}>O carrinho está vazio.</p>
            ) : (
              <>
                <div style={{ display: "grid", gap: "12px", marginBottom: "18px" }}>
                  {items.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: "12px",
                        paddingBottom: "10px",
                        borderBottom: "1px solid rgba(200,171,120,0.08)",
                      }}
                    >
                      <span style={textStyle}>{item.nome}</span>
                      <span style={textStyle}>x{item.quantidade}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    marginBottom: "20px",
                    color: "#dbc39a",
                    fontSize: "20px",
                    fontFamily: 'Georgia, "Times New Roman", serif',
                  }}
                >
                  Total de unidades: {totalItems}
                </div>

                <pre
                  style={{
                    whiteSpace: "pre-wrap",
                    margin: "0 0 20px",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "14px",
                    lineHeight: 1.8,
                    color: "rgba(242,237,229,0.66)",
                    background: "rgba(255,255,255,0.02)",
                    padding: "14px",
                    borderRadius: "16px",
                    border: "1px solid rgba(200,171,120,0.08)",
                  }}
                >
                  {resumo}
                </pre>
              </>
            )}

            <div style={{ display: "grid", gap: "12px" }}>
              <button
                onClick={enviarEncomenda}
                style={primaryBtn}
                disabled={loading}
              >
                {loading ? "A enviar..." : "Comprar"}
              </button>

              <button onClick={clearCart} style={dangerBtn}>
                Limpar carrinho
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const subTitle: React.CSSProperties = {
  fontSize: "30px",
  margin: "0 0 18px",
  color: "#dbc39a",
  fontFamily: 'Georgia, "Times New Roman", serif',
};

const fieldWrap: React.CSSProperties = {
  display: "grid",
  gap: "8px",
  marginBottom: "16px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  color: "rgba(242,237,229,0.76)",
  fontSize: "14px",
};

const inputStyle: React.CSSProperties = {
  width: "100%",
  borderRadius: "16px",
  border: "1px solid rgba(200,171,120,0.14)",
  background: "rgba(255,255,255,0.04)",
  color: "#f2ede5",
  padding: "14px 16px",
  fontFamily: "Arial, sans-serif",
  fontSize: "15px",
  outline: "none",
};

const textStyle: React.CSSProperties = {
  fontFamily: "Arial, sans-serif",
  color: "rgba(242,237,229,0.76)",
  fontSize: "15px",
};

const primaryBtn: React.CSSProperties = {
  borderRadius: "999px",
  padding: "14px 22px",
  border: "1px solid rgba(200,171,120,0.18)",
  background: "linear-gradient(180deg, #dbc39a, #b48f54)",
  color: "#120d08",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
};

const dangerBtn: React.CSSProperties = {
  borderRadius: "999px",
  padding: "14px 22px",
  border: "1px solid rgba(150,100,100,0.22)",
  background: "rgba(40,10,10,0.35)",
  color: "#f0dcdc",
  fontWeight: 700,
  cursor: "pointer",
  fontFamily: "Arial, sans-serif",
};