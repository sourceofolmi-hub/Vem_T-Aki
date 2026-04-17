"use client";

type DrinkPageProps = {
  nome: string;
  imagem: string;
  descricao1: string;
  descricao2: string;
  descricao3: string;
};

export default function DrinkPage({
  nome,
  imagem,
  descricao1,
  descricao2,
  descricao3,
}: DrinkPageProps) {
  return (
    <main className="page">
      <div className="topBar">
        <a href="/" className="backTop">
          ← Voltar
        </a>
      </div>

      <section className="hero">
        <div className="mediaPanel">
          <div className="mediaLabel">Coleção Vem T'Aki</div>
          <img src={imagem} alt={nome} className="bottle" />
        </div>

        <div className="contentPanel">
          <div className="eyebrow">História da criação</div>
          <h1>{nome}</h1>
          <p>{descricao1}</p>
          <p>{descricao2}</p>
          <p>{descricao3}</p>

          <div className="actions">
            <a href="/encomendas" className="primaryBtn">
              Encomendar
            </a>
            <a href="/" className="secondaryBtn">
              Voltar à coleção
            </a>
          </div>
        </div>
      </section>

      <style jsx>{`
        .page {
          min-height: 100vh;
          background:
            linear-gradient(rgba(0, 0, 0, 0.86), rgba(0, 0, 0, 0.9)),
            url("/fundo-luxo.png");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          color: #f2ede5;
          font-family: Georgia, "Times New Roman", serif;
        }

        .page::before {
          content: "";
          position: fixed;
          inset: 0;
          pointer-events: none;
          background:
            radial-gradient(circle at 30% 70%, rgba(255,255,255,0.02), transparent 20%),
            radial-gradient(circle at 70% 60%, rgba(255,255,255,0.015), transparent 22%);
          filter: blur(18px);
        }

        .topBar {
          padding: 18px 24px;
          display: flex;
          justify-content: flex-start;
        }

        .backTop {
          border-radius: 999px;
          padding: 12px 18px;
          border: 1px solid rgba(200, 171, 120, 0.18);
          background: rgba(20, 14, 10, 0.45);
          color: #d4bea0;
          text-decoration: none;
          font-family: Arial, sans-serif;
          font-weight: 700;
        }

        .hero {
          min-height: calc(100vh - 76px);
          max-width: 1450px;
          margin: 0 auto;
          padding: 10px 24px 50px;
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 30px;
          align-items: center;
        }

        .mediaPanel,
        .contentPanel {
          border-radius: 34px;
          background: rgba(10, 10, 10, 0.36);
          border: 1px solid rgba(200, 171, 120, 0.10);
          backdrop-filter: blur(8px);
          box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
        }

        .mediaPanel {
          min-height: 76vh;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contentPanel {
          padding: 38px 34px;
        }

        .mediaLabel,
        .eyebrow {
          color: #c8ab78;
          text-transform: uppercase;
          letter-spacing: 0.28em;
          font-size: 12px;
          margin-bottom: 16px;
          font-family: Arial, sans-serif;
        }

        .bottle {
          width: 100%;
          max-width: 520px;
          max-height: 72vh;
          object-fit: contain;
          filter: drop-shadow(0 0 18px rgba(200, 171, 120, 0.12));
          animation: bottleFloat 4.8s ease-in-out infinite;
        }

        h1 {
          font-size: 58px;
          margin: 0 0 18px;
          color: #dbc39a;
          line-height: 1;
        }

        p {
          font-size: 17px;
          line-height: 1.95;
          color: rgba(242, 237, 229, 0.76);
          font-family: Arial, sans-serif;
          margin-bottom: 16px;
        }

        .actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
          margin-top: 24px;
        }

        .primaryBtn,
        .secondaryBtn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-width: 180px;
          padding: 14px 22px;
          border-radius: 999px;
          text-decoration: none;
          font-weight: 700;
          font-family: Arial, sans-serif;
        }

        .primaryBtn {
          background: linear-gradient(180deg, #dbc39a, #b48f54);
          color: #120d08;
        }

        .secondaryBtn {
          border: 1px solid rgba(200, 171, 120, 0.18);
          background: rgba(20, 14, 10, 0.45);
          color: #d4bea0;
        }

        @keyframes bottleFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-6px);
          }
        }

        @media (max-width: 980px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .mediaPanel {
            min-height: auto;
          }

          .bottle {
            max-height: 520px;
          }

          h1 {
            font-size: 42px;
          }
        }
      `}</style>
    </main>
  );
}