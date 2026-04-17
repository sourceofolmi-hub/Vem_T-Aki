import DrinkPage from "../components/DrinkPage";
import AddToCartButton from "../components/AddToCartButton";

export default function Page() {
  return (
    <>
      <DrinkPage
        nome="Orgasmo"
        imagem="/orgasmo.png"
        descricao1="Orgasmo nasceu como a tradução do auge emocional, do instante máximo em que tudo se concentra: intensidade, desejo, beleza e entrega. É uma criação feita para celebrar o ponto mais alto da experiência sensorial."
        descricao2="Cada detalhe desta bebida é uma homenagem à coragem de sentir por inteiro. A sua presença foi pensada para provocar impacto, mas também para tocar de forma íntima, revelando uma energia que é ao mesmo tempo vibrante, luxuosa e profundamente memorável."
        descricao3="Orgasmo é a marca do instante absoluto — aquele que se vive uma vez, mas permanece como memória viva muito depois de ter passado."
      />

      <div style={floatingButtons}>
        <a href="/" style={backBtn}>
          ← Continuar a comprar
        </a>

        <AddToCartButton id="orgasmo" nome="Orgasmo" imagem="/orgasmo.png" />
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