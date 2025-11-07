import React, { useState, useEffect } from "react";
import { Heart, Clock } from "lucide-react";
import roofPic from "../assets/pics/laugh_roof.jpg";
import tonguePic from "../assets/pics/tongue_jump.jpg";
import parkPic from "../assets/pics/park.jpg";
import sunsetPic from "../assets/pics/sunset.jpg";
import churros from "../assets/pics/churros.jpg";

import moment from "moment";

// Cherry Blossom Palette:
// Primary Pink: #FF6F77 (light pink)
// Deep Pink: #FF8FA3 (darker pink)
// Accent: #674846 (brown)
// Background:rgb(245, 200, 200) (very light pink)
// Text: #4A1D1F (dark brown)

const FIRST_DATE_ISO = "2024-11-20T08:00:00";
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

const BeforeAnniversary = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [timeTogether, setTimeTogether] = useState(() => ({ ...ZERO_DIFF }));

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
      setTimeTogether(calculateDiff(FIRST_DATE_ISO));
    };

    updateTimers();
    const timer = setInterval(updateTimers, 1000);

    return () => clearInterval(timer);
  }, []);

  const beforeAnniversaryPhotos = [
    {
      src: tonguePic,
      caption: "Amo sua companhia",
      aspectRatio: "9/13",
    },
    {
      src: roofPic,
      caption: "Amo sua risada",
      aspectRatio: "9/13",
    },
    {
      src: sunsetPic,
      caption: "Amo seu sorriso",
      aspectRatio: "9/13",
    },
    {
      src: parkPic,
      caption: "Amo estar com você",
      aspectRatio: "9/13",
    },
  ];

  const timelineContent = {
    title: "Tempo desde que te conheci",
    subheading: "O tempo voa quando a gente está junto.",
    data: timeTogether,
    message:
      "Meu bem, viver cada dia com você tem tornado meus dias melhores, deixado o mundo mais vivo e mais bonito. Todos os dias me apaixono mais por você, seu jeito, seu olhar, sua forma de pensar. Nunca canso de pensar em você, de te admirar, de estar com você. Quero continuar construindo memórias incríveis ao seu lado.",
    footnote: "Eu te amo!",
  };

  const timelineEntries = Object.entries(timelineContent.data).filter(
    ([, value]) => value > 0
  );

  const questionTitle = "Quer namorar comigo?";

  const handleNoHover = () => {
    const btnNao = document.querySelector("#btn-nao");
    const randomX = Math.random() * window.innerWidth - 120;
    const newX = randomX > 100 ? randomX : 20;

    btnNao.style.position = "absolute";

    if (document.body.scrollHeight > 2800) {
      const newY = Math.round(Math.random() * (3380 - 2850)) + 2850;
      setNoButtonPosition({ x: newX, y: newY });
    } else {
      const newY = Math.round(Math.random() * (2100 - 1600)) + 1600;
      setNoButtonPosition({ x: newX, y: newY });
    }
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
    <div className="bg-[#FFDEE3] p-3 lg:p-8 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col mb-8 lg:mb-12">
        <div className="flex mb-4 justify-between items-center w-full lg:w-[430px]">
          <h1 className="text-2xl lg:text-5xl font-bold text-[#4A1D1F] align-middle ">
            Nosso cantinho
          </h1>
          <Heart
            width={48}
            height={48}
            className="text-[#ff8fa3]"
            fill="#FF8FA3"
          />
        </div>
        <p className="text-lg text-[#674846] text-center">
          Memórias pra nossa vida
        </p>
      </div>
      
        {/* Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
          <div className="bg-[#FF6F77] p-4 rounded-lg shadow-lg">
            <img
              src={tonguePic}
              className="w-full h-fit object-cover rounded-lg mb-4"
              style={{ aspectRatio: "9/13" }}
            />
            <p className="text-center text-[#4A1D1F] font-medium text-xl">
              Amo sua companhia
            </p>
          </div>
          <div className="bg-[#FF6F77] p-4 rounded-lg shadow-lg">
            <img
              src={roofPic}
              className="w-full h-fit object-cover rounded-lg mb-4"
              style={{ aspectRatio: "9/13" }}
            />
            <p className="text-center text-[#4A1D1F] font-medium text-xl">
              Amo sua risada
            </p>
          </div>
          <div className="bg-[#FF6F77] p-4 rounded-lg shadow-lg">
            <img
              src={sunsetPic}
              className="w-full h-fit object-cover rounded-lg mb-4"
              style={{ aspectRatio: "9/13" }}
            />
            <p className="text-center text-[#4A1D1F] font-medium text-xl">
              Amo seu sorriso
            </p>
          </div>
          <div className="bg-[#FF6F77] p-4 rounded-lg shadow-lg">
            <img
              src={parkPic}
              className="w-full h-fit object-cover rounded-lg mb-4"
              style={{ aspectRatio: "9/13" }}
            />
            <p className="text-center text-[#4A1D1F] font-medium text-xl">
              Amo estar com você
            </p>
          </div>
        </div>

        <div>
          <div className="bg-white rounded-xl shadow-lg p-4 mb-6 w-full max-w-2xl lg:p-8 lg:mb-12">
            <div className="flex items-center justify-center mb-4">
              <Clock
                width={28}
                height={28}
                className="text-[#FF8FA3] self-start mt-1.5 mr-0.5"
              />
              <h2 className="text-2xl font-bold text-[#4A1D1F] text-center lg:ml-1.5">
                Tempo desde que te conheci
              </h2>
            </div>
            <div
              className="flex flex-col items-center
          lg:flex-row lg:justify-evenly"
            >
              {Object.entries(timeTogether).map(([unit, value]) =>
                value > 0 ? (
                  <div
                    key={unit}
                    className="bg-[#FFBBC1] mb-3 ml-1 p-4 rounded-lg w-28 text-center"
                  >
                    <div className="text-2xl font-bold text-[#4A1D1F]">
                      {value}
                    </div>
                    <div className="text-[#674846] capitalize">{unit}</div>
                  </div>
                ) : null
              )}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-4 lg:p-8 w-full max-w-2xl">
            <p className="text-[#674846] text-center italic text-lg">
              Meu bem, viver cada dia com você tem tornado meus dias melhores,
              deixado o mundo mais vivo e mais bonito. Todos os dias me apaixono
              mais por você, seu jeito, seu olhar, sua forma de pensar. Nunca
              canso de pensar em você, de te admirar, de estar com você. Quero
              continuar construindo memórias incríveis ao seu lado.
              <br />
          <strong>Eu te amo!</strong>
            </p>
          </div>
        </div>

      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center mt-12">
          <h2 className="text-3xl font-bold text-[#4A1D1F] mb-8">
            Quer namorar comigo?
          </h2>
        <div className="flex justify-center gap-8">
          <button
            onClick={openModal}
            className="cursor-pointer bg-rose-600/85 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 hover:scale-105 shadow-sm"
          >
            Sim
          </button>
          <button
            style={{
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: "all 0.3s ease",
            }}
            id="btn-nao"
            onMouseOver={handleNoHover}
            onFocus={handleNoHover}
            onClick={handleNoHover}
            className="z bg-rose-600/70 text-white font-bold py-4 px-8 rounded-lg shadow-sm"
          >
            Não
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
        >
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-lg">
            <button
              tabIndex={0}
              className="absolute top-0 right-0 lg:top-4 lg:right-4 text-4xl text-red-600 hover:text-red-700"
              onClick={closeModal}
              autoFocus={true}
            >
              &times;
            </button>
            <img
              src={churros}
              alt="Modal Content"
              className="w-fit h-fit object-cover rounded-lg mb-2"
            />
            <p className="text-center text-[#4A1D1F] text-2xl">
              Prometo ser o melhor namorado do mundo ❤️
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default BeforeAnniversary;
