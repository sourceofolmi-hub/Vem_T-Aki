import DrinkPage from "../components/DrinkPage";
import AddToCartButton from "../components/AddToCartButton";

export default function Page() {
  return (
    <>
      <DrinkPage
        nome="Clímax"
        imagem="/climax.png"
        descricao1="Clímax nasceu da vontade de traduzir o momento em que tudo se eleva: a emoção, a presença, a intensidade e a memória. É uma criação feita para representar o auge, o ponto em que o instante deixa de ser passageiro e se torna inesquecível."
        descricao2="Cada detalhe desta bebida foi construído como uma homenagem à força do sentir. A sua imagem intensa, a sua presença vibrante e a sua assinatura visual carregam a intenção de provocar impacto e de despertar uma ligação imediata com quem a contempla."
        descricao3="Clímax é a expressão da intensidade vivida por inteiro — uma criação para quem sabe reconhecer a beleza dos momentos que ficam gravados para sempre."
      />

      <div
        style={{
          position: "fixed",
          bottom: "24px",
          right: "24px",
          zIndex: 100,
          display: "flex",
          gap: "12px",
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
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
          }}
        >
          ← Continuar a comprar
        </a>

        <AddToCartButton id="climax" nome="Clímax" imagem="/climax.png" />
      </div>
    </>
  );
}