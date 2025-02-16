import React, { useState, useEffect } from 'react';
import { Heart, Clock } from 'lucide-react';
import roofPic from './assets/pics/laugh_roof.jpg';
import tonguePic from './assets/pics/tongue_jump.jpg';
import parkPic from './assets/pics/park.jpg';
import sunsetPic from './assets/pics/sunset.jpg';
import churros from './assets/pics/churros.jpg';

// Cherry Blossom Palette:
// Primary Pink: #FF6F77 (light pink)
// Deep Pink: #FF8FA3 (darker pink)
// Accent: #674846 (brown)
// Background:rgb(245, 200, 200) (very light pink)
// Text: #4A1D1F (dark brown)

const App = () => {
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [timeTogether, setTimeTogether] = useState({
    meses: 0,
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0,
  });

  // Set your anniversary date here
  const anniversaryDate = new Date('2024-11-20T08:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - anniversaryDate.getTime();

      const meses = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const dias = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const horas = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutos = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const segundos = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeTogether({ meses, dias, horas, minutos, segundos });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleNoHover = () => {
    const btnNao = document.querySelector('#btn-nao');
    const randomX = Math.random() * window.innerWidth - 120;
    const newX = randomX > 100 ? randomX : 20;

    btnNao.style.position = 'absolute';

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
  const closeModalWithEsc = (event) => {
    if (event.key === 'Escape') {
      setIsModalOpen(false);
    }
  };

  return (
    <div className='bg-[#FFDEE3] p-3 lg:p-8 flex flex-col items-center'>
      {/* Header */}
      <div className='flex flex-col mb-8 lg:mb-12'>
        <div className='flex mb-4 justify-between items-center w-full lg:w-[430px]'>
          <h1 className='text-2xl lg:text-5xl font-bold text-[#4A1D1F] align-middle '>Nosso cantinho</h1>
          <Heart width={48} height={48} className='text-[#ff8fa3]' fill='#FF8FA3' />
        </div>
        <p className='text-lg text-[#674846] text-center'>Memórias pra nossa vida</p>
      </div>

      {/* Photo Gallery */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl'>
        <div className='bg-[#FF6F77] p-4 rounded-lg shadow-lg'>
          <img alt='tonguePic' src={tonguePic} className='w-full h-fit object-cover rounded-lg mb-4' style={{ aspectRatio: '9/16' }} />
          <p className='text-center text-[#4A1D1F] font-medium text-xl'>Amo sua companhia</p>
        </div>
        <div className='bg-[#FF6F77] p-4 rounded-lg shadow-lg'>
          <img alt='roofPic' src={roofPic} className='w-full h-fit object-cover rounded-lg mb-4' style={{ aspectRatio: '9/16' }} />
          <p className='text-center text-[#4A1D1F] font-medium text-xl'>Amo sua risada</p>
        </div>
        <div className='bg-[#FF6F77] p-4 rounded-lg shadow-lg'>
          <img alt='sunsetPic' src={sunsetPic} className='w-full h-fit object-cover rounded-lg mb-4' style={{ aspectRatio: '9/16' }} />
          <p className='text-center text-[#4A1D1F] font-medium text-xl'>Amo seu sorriso</p>
        </div>
        <div className='bg-[#FF6F77] p-4 rounded-lg shadow-lg'>
          <img alt='Favorite Memory' src={parkPic} className='w-full h-fit object-cover rounded-lg mb-4' style={{ aspectRatio: '9/16' }} />
          <p className='text-center text-[#4A1D1F] font-medium text-xl'>Amo estar com você</p>
        </div>
      </div>

      {/* Time Counter */}
      <div className='bg-white rounded-xl shadow-lg p-4 mb-6 w-full max-w-2xl lg:p-8 lg:mb-12'>
        <div className='flex items-center justify-center mb-4'>
          <Clock width={32} height={32} className='text-[#FF8FA3] self-start' />
          <h2 className='text-2xl font-bold text-[#4A1D1F] text-center lg:ml-1.5'>Tempo desde que te conheci</h2>
        </div>
        <div
          className='flex flex-col items-center
          lg:flex-row lg:justify-evenly'>
          {Object.entries(timeTogether).map(([unit, value]) => (
            <div key={unit} className='bg-[#FFBBC1] mb-3 p-4 rounded-lg w-28 text-center'>
              <div className='text-2xl font-bold text-[#4A1D1F]'>{value}</div>
              <div className='text-[#674846] capitalize'>{unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Love Note */}
      <div className='bg-white rounded-xl shadow-lg p-4 lg:p-8 w-full max-w-2xl'>
        <p className='text-[#674846] text-center italic text-lg'>
          Meu bem, viver cada dia com você tem tornado meus dias melhores, deixado o mundo mais vivo e mais bonito.
          Todos os dias me apaixono mais por você, seu jeito, seu olhar, sua forma de pensar. Nunca canso de pensar em
          você, de te admirar, de estar com você. Quero continuar construindo memórias incríveis ao seu lado.
          <br />
          <strong>Eu te amo!</strong>
        </p>
      </div>

      {/* The Question */}
      <div className='bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl text-center mt-12'>
        <h2 className='text-3xl font-bold text-[#4A1D1F] mb-8'>Quer namorar comigo?</h2>
        <div className='flex justify-center gap-8'>
          <button
            onClick={openModal}
            className='cursor-pointer active:scale-80 bg-[#FF6F77] hover:bg-[#FF8FA3] text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-110'>
            Sim
          </button>
          <button
            style={{
              left: `${noButtonPosition.x}px`,
              top: `${noButtonPosition.y}px`,
              transition: 'all 0.3s ease',
            }}
            id='btn-nao'
            onMouseOver={handleNoHover}
            onFocus={handleNoHover}
            onClick={handleNoHover}
            className='z bg-[#FF6F77] hover:bg-[#FF8FA3] text-white font-bold py-4 px-8 rounded-lg'>
            Não
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className='fixed inset-0 flex items-center justify-center z-50'
          style={{ backgroundColor: 'rgba(0,0,0,0.85)' }}>
          <div className='bg-white rounded-lg shadow-lg p-4 max-w-lg'>
            <button
              tabIndex={0}
              className='absolute top-0 right-0 lg:top-4 lg:right-4 text-4xl text-red-600 hover:text-red-700'
              onClick={closeModal}
              onKeyDown={closeModalWithEsc}
              autoFocus={true}>
              &times;
            </button>
            <img src={churros} alt='Modal Content' className='w-fit h-fit object-cover rounded-lg mb-2' />
            <p className='text-center text-[#4A1D1F] text-2xl'>É nois viu 👍</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
