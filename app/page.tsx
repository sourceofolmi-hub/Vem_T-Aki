"use client";

import { useEffect, useRef, useState } from "react";

import CartButton from "./components/CartButton";

export default function Page() {
  const [isAdultConfirmed, setIsAdultConfirmed] = useState(false);
  const [showRejected, setShowRejected] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const saved = window.localStorage.getItem("vemtaki-18plus");
    if (saved === "yes") {
      setIsAdultConfirmed(true);
    }

    const audio = new Audio("/musica.mp3");
    audio.loop = true;
    audio.volume = 0.4;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const handleAdultYes = () => {
    window.localStorage.setItem("vemtaki-18plus", "yes");
    setShowRejected(false);
    setIsAdultConfirmed(true);
  };

  const handleAdultNo = () => {
    setShowRejected(true);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
      }
    } catch {
      alert(
        "Não foi possível iniciar a música. Confirma se 'musica.mp3' está na pasta public."
      );
    }
  };

  const bebidas = [
    {
      nome: "Pachacha",
      img: "/pachacha.png",
      href: "/pachacha",
      resumo: "Original, sensível e irreverente.",
    },
    {
      nome: "Clímax",
      img: "/climax.png",
      href: "/climax",
      resumo: "Intenso, vibrante e memorável.",
    },
    {
      nome: "Desejo",
      img: "/desejo.png",
      href: "/desejo",
      resumo: "Sedução, delicadeza e sofisticação.",
    },
    {
      nome: "Tântrico",
      img: "/tantrico.png",
      href: "/tantrico",
      resumo: "Mistério, profundidade e exotismo.",
    },
    {
      nome: "Obsessão",
      img: "/obsessao.png",
      href: "/obsessao",
      resumo: "Escuro, elegante e marcante.",
    },
    {
      nome: "Orgasmo",
      img: "/orgasmo.png",
      href: "/orgasmo",
      resumo: "O auge da experiência sensorial.",
    },
  ];

  return (
    <>
      {!isAdultConfirmed && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              'linear-gradient(rgba(0,0,0,0.92), rgba(0,0,0,0.96)), url("/fundo-luxo.png") center/cover no-repeat',
            padding: "20px",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.02), transparent 18%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.02), transparent 18%), radial-gradient(circle at 50% 100%, rgba(255,255,255,0.025), transparent 28%)",
              filter: "blur(18px)",
            }}
          />

          <div
            style={{
              width: "100%",
              maxWidth: "720px",
              padding: "50px 40px",
              borderRadius: "32px",
              background: "rgba(10,10,10,0.72)",
              border: "1px solid rgba(200,171,120,0.15)",
              boxShadow: "0 0 40px rgba(0,0,0,0.4)",
              textAlign: "center",
              color: "#f2ede5",
              position: "relative",
              zIndex: 2,
            }}
          >
            <div style={{ marginBottom: "18px" }}>
              <img
                src="/logo.png"
                alt="Vem T'Aki"
                style={{
                  width: "110px",
                  display: "block",
                  margin: "0 auto",
                }}
              />
            </div>

            <div
              style={{
                color: "#c8ab78",
                textTransform: "uppercase",
                letterSpacing: "0.28em",
                fontSize: "12px",
                marginBottom: "14px",
                fontFamily: "Arial, sans-serif",
                background: "transparent",
              }}
            >
              Entrada reservada
            </div>

            <h1
              style={{
                margin: "0 0 10px",
                fontSize: "56px",
                lineHeight: 1,
                color: "#dbc39a",
                fontFamily: 'Georgia, "Times New Roman", serif',
                background: "transparent",
              }}
            >
              Atreves-te?
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: "22px",
                lineHeight: 1.6,
                color: "rgba(242,237,229,0.82)",
                fontFamily: "Arial, sans-serif",
                background: "transparent",
              }}
            >
              Tens mais de 18 anos?
            </p>

            {!showRejected ? (
              <div
                style={{
                  marginTop: "32px",
                  display: "flex",
                  justifyContent: "center",
                  gap: "14px",
                  flexWrap: "wrap",
                  background: "transparent",
                }}
              >
                <button
                  onClick={handleAdultYes}
                  style={{
                    minWidth: "180px",
                    borderRadius: "999px",
                    padding: "15px 24px",
                    border: "1px solid rgba(200,171,120,0.18)",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer",
                    background: "linear-gradient(180deg, #dbc39a, #b48f54)",
                    color: "#120d08",
                    boxShadow: "0 0 18px rgba(193, 162, 100, 0.16)",
                  }}
                >
                  Sim
                </button>

                <button
                  onClick={handleAdultNo}
                  style={{
                    minWidth: "180px",
                    borderRadius: "999px",
                    padding: "15px 24px",
                    border: "1px solid rgba(200,171,120,0.18)",
                    fontFamily: "Arial, sans-serif",
                    fontWeight: 700,
                    fontSize: "15px",
                    cursor: "pointer",
                    background: "rgba(20,14,10,0.45)",
                    color: "#d4bea0",
                  }}
                >
                  Não
                </button>
              </div>
            ) : (
              <div
                style={{
                  marginTop: "24px",
                  padding: "20px",
                  borderRadius: "20px",
                  background: "rgba(255,255,255,0.03)",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    lineHeight: 1.8,
                    color: "rgba(242,237,229,0.74)",
                    fontFamily: "Arial, sans-serif",
                  }}
                >
                  O acesso é apenas para maiores de 18 anos.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {isAdultConfirmed && (
        <main
          style={{
            minHeight: "100vh",
            background:
              'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95)), url("/fundo-luxo.png") center/cover no-repeat',
            color: "#f2ede5",
          }}
        >
          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 40,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "18px 24px",
              backdropFilter: "blur(10px)",
              background: "rgba(0,0,0,0.18)",
              borderBottom: "1px solid rgba(200,171,120,0.08)",
            }}
          >
           <div
  style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
  }}
>
  <button
    onClick={toggleMusic}
    style={{
      borderRadius: "999px",
      padding: "12px 18px",
      border: "1px solid rgba(200,171,120,0.18)",
      background: "rgba(20,14,10,0.45)",
      color: "#d4bea0",
      fontFamily: "Arial, sans-serif",
      fontWeight: 700,
      cursor: "pointer",
    }}
  >
    {isPlaying ? "❚❚ Pausar" : "♫ Música"}
  </button>

  <CartButton />

  <a
    href="/encomendas"
    style={{
      borderRadius: "999px",
      padding: "12px 18px",
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
    Encomendar
  </a>
</div>
          </div>

          <section
            style={{
              maxWidth: "1450px",
              margin: "0 auto",
              padding: "34px 26px 16px",
              display: "grid",
              gridTemplateColumns: "1.2fr 160px",
              gap: "24px",
              alignItems: "start",
            }}
          >
            <div style={{ maxWidth: "860px" }}>
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
                A história da marca
              </div>

              <h1
                style={{
                  fontSize: "56px",
                  margin: "0 0 16px",
                  lineHeight: 1,
                  color: "#dbc39a",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                }}
              >
                Vem T'Aki
              </h1>

              <p
                style={{
                  fontSize: "17px",
                  margin: "0 0 14px",
                  lineHeight: 1.95,
                  color: "rgba(242,237,229,0.76)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                A Vem T'Aki nasceu de um sentimento raro: o desejo de criar algo
                que fosse além do sabor e se tornasse memória, presença e emoção.
                Cada garrafa é pensada com tempo, sensibilidade e cuidado, para
                que cada detalhe carregue intenção, beleza e identidade.
              </p>

              <p
                style={{
                  fontSize: "17px",
                  margin: 0,
                  lineHeight: 1.95,
                  color: "rgba(242,237,229,0.76)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Em cada criação existe amor pelo processo, respeito pela estética
                e uma procura profunda por equilíbrio entre intensidade e
                delicadeza. A Vem T'Aki é uma marca feita para ser sentida com os
                sentidos e com a alma — íntima, envolvente e memorável.
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
              }}
            >
              <img
                src="/logo.png"
                alt="Vem T'Aki"
                style={{
                  width: "110px",
                  opacity: 0.9,
                  filter: "drop-shadow(0 0 14px rgba(200,171,120,0.14))",
                }}
              />
            </div>
          </section>

          <section
            style={{
              minHeight: "78vh",
              maxWidth: "1600px",
              margin: "0 auto",
              padding: "8px 26px 36px",
              display: "block",
            }}
          >
            <div
              style={{
                minHeight: "78vh",
                borderRadius: "34px",
                padding: "22px",
                background: "rgba(10,10,10,0.34)",
                border: "1px solid rgba(200,171,120,0.10)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 30px rgba(0,0,0,0.18)",
              }}
            >
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
                A marca em movimento
              </div>

              <video
                src="/marca.mp4"
                autoPlay
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "calc(78vh - 70px)",
                  borderRadius: "22px",
                  display: "block",
                  objectFit: "cover",
                  background: "#000",
                  filter: "blur(2.6px) brightness(0.74) contrast(0.92) saturate(0.9)",
                  opacity: 0.84,
                  transition: "all 0.45s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter =
                    "blur(0px) brightness(1) contrast(1.02) saturate(1)";
                  e.currentTarget.style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter =
                    "blur(2.6px) brightness(0.74) contrast(0.92) saturate(0.9)";
                  e.currentTarget.style.opacity = "0.84";
                }}
              />
            </div>
          </section>

          <section
            style={{
              maxWidth: "1280px",
              margin: "0 auto",
              padding: "26px 20px 80px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                marginBottom: "28px",
              }}
            >
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
                A coleção
              </div>

              <h2
                style={{
                  fontSize: "40px",
                  margin: "0 0 12px",
                  color: "#dbc39a",
                  fontFamily: 'Georgia, "Times New Roman", serif',
                }}
              >
                Descubra cada criação individualmente
              </h2>

              <p
                style={{
                  maxWidth: "820px",
                  margin: "0 auto",
                  fontSize: "17px",
                  lineHeight: 1.95,
                  color: "rgba(242,237,229,0.76)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                Cada bebida revela uma história própria, uma emoção distinta e
                uma assinatura visual pensada para ser sentida e lembrada.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "28px",
              }}
            >
              {bebidas.map((b) => (
                <a
                  key={b.href}
                  href={b.href}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <div
                    style={{
                      height: "100%",
                      borderRadius: "24px",
                      padding: "22px",
                      background: "rgba(12,12,12,0.5)",
                      border: "1px solid rgba(200,171,120,0.12)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <div
                      style={{
                        minHeight: "320px",
                        borderRadius: "20px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(255,255,255,0.02)",
                        marginBottom: "18px",
                      }}
                    >
                      <img
                        src={b.img}
                        alt={b.nome}
                        style={{
                          width: "82%",
                          maxHeight: "280px",
                          objectFit: "contain",
                          filter: "drop-shadow(0 0 16px rgba(200,171,120,0.12))",
                        }}
                      />
                    </div>

                    <h3
                      style={{
                        fontSize: "30px",
                        margin: "0 0 10px",
                        textAlign: "center",
                        color: "#dbc39a",
                        fontFamily: 'Georgia, "Times New Roman", serif',
                      }}
                    >
                      {b.nome}
                    </h3>

                    <p
                      style={{
                        margin: 0,
                        textAlign: "center",
                        fontSize: "16px",
                        lineHeight: 1.8,
                        color: "rgba(242,237,229,0.76)",
                        fontFamily: "Arial, sans-serif",
                      }}
                    >
                      {b.resumo}
                    </p>

                    <span
                      style={{
                        display: "block",
                        marginTop: "16px",
                        textAlign: "center",
                        color: "#d3bea0",
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                      }}
                    >
                      Abrir história →
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      )}
    </>
  );
}