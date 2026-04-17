import DrinkPage from "../components/DrinkPage";
import AddToCartButton from "../components/AddToCartButton";

export default function Page() {
  return (
    <>
      <DrinkPage
        nome="Obsessão"
        imagem="/obsessao.png"
        descricao1="Obsessão nasceu para dar forma ao que permanece no pensamento, ao que marca sem esforço e ao que deixa uma impressão tão forte que se torna impossível esquecer. É uma criação densa em emoção, presença e identidade."
        descricao2="Cada elemento desta bebida foi desenhado como uma homenagem à intensidade silenciosa, ao fascínio do mistério e à beleza do que não precisa de excessos para dominar o espaço. A sua imagem escura e sofisticada traduz profundidade, carácter e memória."
        descricao3="Obsessão é uma assinatura emocional forte — feita para quem reconhece valor no que se grava por dentro e nunca desaparece por completo."
      />

      <div style={floatingButtons}>
        <a href="/" style={backBtn}>
          ← Continuar a comprar
        </a>

        <AddToCartButton
          id="obsessao"
          nome="Obsessão"
          imagem="/obsessao.png"
        />
      </div>
    </>
  );
}

const floatingButtons: React.CSSProperties = {
  position: "fixed",
  bottom: "24px",
  right: "24px",
  zIndex: 100,
  display: "flex",
  gap: "12px",
  flexWrap: "wrap",
};

const backBtn: React.CSSProperties = {
  borderRadius: "999px",
  padding: "14px 22px",
  border: "1px solid rgba(200,171,120,0.18)",
  background: "rgba(20,14,10,0.45)",
  color: "#d4bea0",
  textDecoration: "none",
  fontFamily: "Arial, sans-serif",
  fontWeight: 700,
  display: "inline-flex",
  alignItems: "center",
};