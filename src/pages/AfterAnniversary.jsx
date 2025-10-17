import { Clock, Heart } from "lucide-react";
import { useEffect, useState } from "react";
import "./AfterAnniversary.css";
import beach from "../assets/pics/RJ2.jpg";
import bedPic from "../assets/pics/bed.jpg";
import bedKiss from "../assets/pics/bedKiss.jpg";
import showLagumPic from "../assets/pics/show_lagum.jpg";

import moment from "moment";

// Romance Twilight palette for the anniversary edition.

const FIRST_DATE_ISO = "2024-11-20T08:00:00";
const ANNIVERSARY_DATE_ISO = "2025-02-28T00:00:00";

const ZERO_DIFF = Object.freeze({
  anos: 0,
  meses: 0,
  dias: 0,
  horas: 0,
  minutos: 0,
  segundos: 0,
});

const PHOTO_CARD_CLASS =
  "group relative overflow-hidden rounded-3xl border border-white/20 bg-white/10 p-5 shadow-[0_22px_60px_rgba(11,4,28,0.45)] backdrop-blur-xl transition-transform duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_72px_rgba(14,6,32,0.55)]";
const PHOTO_IMAGE_CLASS =
  "w-full h-fit rounded-2xl object-cover transition duration-700 ease-out group-hover:scale-[1.04]";
const STAT_CARD_CLASS =
  "bg-white/10 border border-white/20 rounded-2xl px-5 py-4 text-center shadow-[0_18px_48px_rgba(10,3,26,0.35)] backdrop-blur-xl";
const SECTION_BADGE_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-rose-100";
const QUESTION_CARD_CLASS =
  "bg-white/10 border border-white/20 rounded-3xl px-8 py-10 text-center shadow-[0_20px_60px_rgba(10,3,24,0.5)] backdrop-blur-2xl";

const AfterAnniversary = () => {
  // start with (0,0) so left/top exist but the button remains in-flow until we set DOM position
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeDating, setTimeDating] = useState(() => ({ ...ZERO_DIFF }));

  const calculateDiff = (startIso) => {
    const startMoment = moment(startIso);
    const now = moment();

    if (now.isBefore(startMoment)) {
      return { ...ZERO_DIFF };
    }

    const working = startMoment.clone();

    const anos = now.diff(working, "years");
    working.add(anos, "years");

    const meses = now.diff(working, "months");
    working.add(meses, "months");

    const dias = now.diff(working, "days");
    working.add(dias, "days");

    const horas = now.diff(working, "hours");
    working.add(horas, "hours");

    const minutos = now.diff(working, "minutes");
    working.add(minutos, "minutes");

    const segundos = now.diff(working, "seconds");

    return { anos, meses, dias, horas, minutos, segundos };
  };

  useEffect(() => {
    const updateTimers = () => {
      setTimeDating(calculateDiff(ANNIVERSARY_DATE_ISO));
    };

    updateTimers();
    const timer = setInterval(updateTimers, 1000);

    return () => clearInterval(timer);
  }, []);

  const afterAnniversaryPhotos = [
    {
      src: beach,
      caption: "Amo sua companhia",
      aspectRatio: "9/13",
    },
    {
      src: bedKiss,
      caption: "Amo seu carinho",
      aspectRatio: "9/13",
    },
    {
      src: showLagumPic,
      caption: "Amo seu sorriso",
      aspectRatio: "9/13",
    },
    {
      src: bedPic,
      caption: "Amo estar com você",
      aspectRatio: "9/13",
    },
  ];

  const activePhotos = afterAnniversaryPhotos;

  const highlightPhoto = afterAnniversaryPhotos[0];

  const timelineContent = {
    title: "Tempo te namorando!",
    subheading: "Cada segundo contigo é um presente.",
    data: timeDating,
    message:
      "Ficar conversando até dormir, acordar com seu bom dia, viajar, perder a noção do tempo, cuidar da nossa fazendinha, assistir séries e filmes juntinhos, planejar nosso futuro, andar de bicicleta, ir em shows, se entediar... Tudo isso é tão especial pra mim porque é com você. Cada momento ao seu lado é especial e cada sorriso seu ilumina meu dia. Esse ano com você com certeza mudou minha vida para melhor e eu quero continuar vivendo essa aventura ao seu lado. Quero estar com você em todos os momentos, celebrar suas conquistas, apoiar seus sonhos e construir nosso futuro juntos. Você é meu tudo, a luz da minha vida, o motivo de eu sorrir à toa, meu amor pra vida toda.",
    footnote: "Eu te amo!",
  };

  const timelineEntries = Object.entries(timelineContent.data).filter(
    ([, value]) => value >= 0
  );

  const questionTitle =
    "Pode continuar me fazendo o homem mais feliz do mundo?";

  const handleNoHover = () => {
    const btnNao = document.querySelector("#btn-nao");
    if (!btnNao) return;

    const rect = btnNao.getBoundingClientRect();

    // Mirror BeforeAnniversary behavior: set element to absolute (DOM mutation)
    // and compute new left/top relative to the viewport so it stays visible on all sizes.
    const randomX = Math.random() * (window.innerWidth - rect.left - 50);
    const newX = randomX;
    console.log(window.innerHeight)
    console.log(rect.top)
    var newY = Math.round(Math.random() * (window.innerHeight - rect.y));

    btnNao.style.position = "absolute";
    setNoButtonPosition({ x: newX, y: newY });
 
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen]);

  return (
    <div className="after-root">
      <div className="relative flex min-h-screen flex-col items-center overflow-hidden px-4 pb-16 pt-10 text-[#FBE9FF] sm:px-8 lg:px-16">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-20 -top-32 h-80 w-80 rounded-full bg-rose-500/30 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute right-[-12%] top-1/3 h-72 w-72 rounded-full bg-fuchsia-500/25 blur-3xl sm:h-96 sm:w-96" />
          <div className="absolute bottom-[-6rem] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-700/25 blur-3xl" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),rgba(18,6,39,0))]" />
        </div>

        <div
          id="main-container"
          className="z-10 relative flex w-full max-w-6xl flex-col items-center gap-12"
        >
          <header className="flex flex-col items-center gap-5 text-center">
            <span className={SECTION_BADGE_CLASS}>
              <Heart
                width={20}
                height={20}
                className="text-rose-100"
                fill="currentColor"
              />
              DESDE 2024
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
              Nosso cantinho
            </h1>
            <p className="max-w-2xl text-base text-[#F2D9FF] sm:text-lg">
              Memórias pra nossa vida
            </p>
          </header>

          <section className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
            {activePhotos.map(({ src, alt, caption, aspectRatio }, index) => (
              <div key={`${caption}-${index}`} className={PHOTO_CARD_CLASS}>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-6 top-6 h-24 rounded-full bg-white/15 blur-2xl"
                />
                <img
                  src={src}
                  alt={alt}
                  className={`${PHOTO_IMAGE_CLASS} mb-4`}
                  style={{ aspectRatio }}
                />
                <p className="text-center text-lg font-medium text-[#FCEBFF]">
                  {caption}
                </p>
              </div>
            ))}
          </section>

          <section className="w-full space-y-8">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_18px_48px_rgba(9,4,23,0.45)] backdrop-blur-2xl sm:p-8">
              <div className="flex flex-col items-center gap-3 text-center">
                <div className="inline-flex items-center gap-3 text-rose-100">
                  <Clock
                    width={30}
                    height={30}
                    className="text-rose-200 drop-shadow"
                  />
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    {timelineContent.title}
                  </h2>
                </div>
                <p className="max-w-2xl text-sm text-[#E7CCFF] sm:text-base">
                  {timelineContent.subheading}
                </p>
              </div>
              <div className="mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
                {timelineEntries.map(([unit, value]) => (
                  <div key={unit} className={STAT_CARD_CLASS}>
                    <div className="text-3xl font-semibold text-white sm:text-4xl">
                      {value}
                    </div>
                    <div className="mt-1 text-sm capitalize text-[#F6DFFF]">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/20 bg-white/10 p-6 shadow-[0_20px_60px_rgba(9,4,23,0.45)] backdrop-blur-2xl sm:p-8">
              <p className="text-center text-base leading-relaxed text-[#F7DFFF] sm:text-lg">
                {timelineContent.message}
              </p>
              {timelineContent.footnote && (
                <p className="mt-4 text-center text-s font-semibold uppercase tracking-[0.4em] text-rose-100">
                  {timelineContent.footnote}
                </p>
              )}
            </div>
          </section>

          <section className={`${QUESTION_CARD_CLASS} w-full max-w-3xl`}>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">
              {questionTitle}
            </h2>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
              <button
                id="btn-sim"
                onClick={openModal}
                className="cursor-pointer rounded-full border border-white/20 bg-rose-600/85 px-8 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-rose-200/50 focus:ring-offset-2"
              >
                Sim
              </button>
              <button
                aria-label="Não"
                style={{
                  left: `${noButtonPosition.x}px`,
                  top: `${noButtonPosition.y}px`,
                  transition: "all 0.3s ease",
                }}
                id="btn-nao"
                onMouseOver={handleNoHover}
                onClick={handleNoHover}
                className={
                  "cursor-pointer rounded-full border border-white/20 bg-rose-600/70 px-8 py-3 text-lg font-semibold text-white shadow-sm transition-all duration-200 hover:scale-[1.03] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-rose-200/50 focus:ring-offset-2"
                }
              >
                Não
              </button>
            </div>
          </section>
        </div>

        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(8,3,18,0.88)] px-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-white/20 bg-gradient-to-br from-white via-rose-50 to-rose-100 p-8 text-[#321532] shadow-[0_30px_70px_rgba(8,3,18,0.65)]">
              <button
                type="button"
                className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-rose-100 text-2xl font-bold text-rose-500 transition hover:bg-rose-200 focus:outline-none focus:ring-2 focus:ring-rose-300"
                onClick={closeModal}
                aria-label="Fechar"
                autoFocus
              >
                &times;
              </button>
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="overflow-hidden rounded-2xl border border-rose-200/60 bg-white p-3 shadow-lg">
                  <img
                    src={highlightPhoto.src}
                    alt={highlightPhoto.alt}
                    className="h-48 w-48 rounded-2xl object-cover"
                  />
                </div>
                <p className="text-base leading-relaxed text-rose-800">
                  Prometo ser o melhor namorado do mundo ❤️
                </p>
                <p className="text-sm text-rose-500">
                  Fazendo memórias juntos pra sempre.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AfterAnniversary;
