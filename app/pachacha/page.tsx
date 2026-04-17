import DrinkPage from "../components/DrinkPage";
import AddToCartButton from "../components/AddToCartButton";

export default function Page() {
  return (
    <>
      <DrinkPage
        nome="Pachacha"
        imagem="/pachacha.png"
        descricao1="Pachacha nasceu para celebrar a beleza da diferença. É uma criação que não procura seguir caminhos já feitos, mas afirmar uma identidade própria, livre, sensível e memorável. A sua presença carrega irreverência, mas também uma delicadeza rara, feita para tocar quem reconhece valor na autenticidade."
        descricao2="Nesta bebida vive uma homenagem à liberdade criativa, à coragem de ser única e à emoção de criar algo que não se confunde com mais nada. Cada detalhe foi pensado com amor, para que a sua imagem, a sua energia e a sua memória permanecessem muito para além do primeiro olhar."
        descricao3="Pachacha é, acima de tudo, uma celebração da alma que se revela sem medo — intensa, singular e profundamente inesquecível."
      />

      <div style={floatingButtons}>
        <a href="/" style={backBtn}>
          ← Continuar a comprar
        </a>

        <AddToCartButton id="pachacha" nome="Pachacha" imagem="/pachacha.png" />
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