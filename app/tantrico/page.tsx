import DrinkPage from "../components/DrinkPage";
import AddToCartButton from "../components/AddToCartButton";

export default function Page() {
  return (
    <>
      <DrinkPage
        nome="Tântrico"
        imagem="/tantrico.png"
        descricao1="Tântrico nasceu da procura por uma ligação mais profunda entre presença, energia e memória. É uma criação que convida ao tempo, à contemplação e à experiência sentida de forma lenta, intensa e inteira."
        descricao2="Nesta bebida existe uma homenagem ao mistério, ao encontro entre emoção e sensorialidade, e à beleza das camadas que só se revelam a quem sabe olhar com atenção. Cada detalhe foi pensado para transmitir profundidade, exotismo e uma elegância silenciosa."
        descricao3="Tântrico é uma experiência que não se apressa. Revela-se com subtileza, permanece com intensidade e deixa uma marca que se sente muito para além do instante."
      />

      <div style={floatingButtons}>
        <a href="/" style={backBtn}>
          ← Continuar a comprar
        </a>

        <AddToCartButton id="tantrico" nome="Tântrico" imagem="/tantrico.png" />
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