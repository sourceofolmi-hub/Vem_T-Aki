"use client";

export default function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          'linear-gradient(rgba(0,0,0,0.90), rgba(0,0,0,0.96)), url("/fundo-luxo.png") center/cover no-repeat',
        color: "#f2ede5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px 20px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "900px",
          borderRadius: "36px",
          padding: "56px 38px",
          background: "rgba(10,10,10,0.62)",
          border: "1px solid rgba(200,171,120,0.14)",
          boxShadow: "0 0 40px rgba(0,0,0,0.38)",
          textAlign: "center",
          backdropFilter: "blur(12px)",
          animation: "fadeUp 1.1s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "36px",
            background:
              "radial-gradient(circle at 50% 30%, rgba(219,195,154,0.10), transparent 22%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.03), transparent 35%)",
            filter: "blur(14px)",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            position: "relative",
            zIndex: 2,
          }}
        >
          <img
            src="/logo.png"
            alt="Vem T'Aki"
            style={{
              width: "120px",
              display: "block",
              margin: "0 auto 18px",
              filter: "drop-shadow(0 0 16px rgba(200,171,120,0.16))",
              animation: "floatLogo 4.6s ease-in-out infinite",
            }}
          />

          <div
            style={{
              color: "#c8ab78",
              textTransform: "uppercase",
              letterSpacing: "0.28em",
              fontSize: "12px",
              marginBottom: "16px",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Encomenda confirmada
          </div>

          <h1
            style={{
              margin: "0 0 18px",
              fontSize: "58px",
              lineHeight: 1,
              color: "#dbc39a",
              fontFamily: 'Georgia, "Times New Roman", serif',
              textShadow: "0 0 18px rgba(200,171,120,0.10)",
            }}
          >
            Obrigado.
          </h1>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 16px",
              fontSize: "19px",
              lineHeight: 1.95,
              color: "rgba(242,237,229,0.84)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            A tua escolha não foi apenas uma encomenda. Foi um encontro com uma
            criação pensada com alma, detalhe e intenção.
          </p>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 16px",
              fontSize: "18px",
              lineHeight: 1.95,
              color: "rgba(242,237,229,0.76)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Cada garrafa Vem T’Aki nasce do cuidado, da emoção e do desejo de
            transformar um instante em memória. É uma honra fazer parte do teu
            momento.
          </p>

          <p
            style={{
              maxWidth: "700px",
              margin: "0 auto 30px",
              fontSize: "17px",
              lineHeight: 1.95,
              color: "rgba(242,237,229,0.68)",
              fontFamily: "Arial, sans-serif",
            }}
          >
            Recebemos a tua encomenda com a atenção e a dedicação que definem a
            nossa assinatura. Em breve, seguirá o próximo capítulo desta
            experiência.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "14px",
              flexWrap: "wrap",
            }}
          >
            <a href="/" style={primaryBtn}>
              Voltar ao início
            </a>

            <a href="/carrinho" style={secondaryBtn}>
              Ver carrinho
            </a>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeUp {
            0% {
              opacity: 0;
              transform: translateY(24px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes floatLogo {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        `}</style>
      </div>
    </main>
  );
}

const primaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "190px",
  borderRadius: "999px",
  padding: "14px 22px",
  border: "1px solid rgba(200,171,120,0.18)",
  background: "linear-gradient(180deg, #dbc39a, #b48f54)",
  color: "#120d08",
  textDecoration: "none",
  fontWeight: 700,
  fontFamily: "Arial, sans-serif",
};

const secondaryBtn: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "190px",
  borderRadius: "999px",
  padding: "14px 22px",
  border: "1px solid rgba(200,171,120,0.18)",
  background: "rgba(20,14,10,0.45)",
  color: "#d4bea0",
  textDecoration: "none",
  fontWeight: 700,
  fontFamily: "Arial, sans-serif",
};
