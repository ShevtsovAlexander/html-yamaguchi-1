import './App.css';
import { useRef } from 'react';

function App() {
  const upperImg = useRef(null);
  const upperImg2 = useRef(null);

  const onClickUpButton = () => {
    if (upperImg.current || upperImg2.current) {
      upperImg.current.classList.remove('down');
      upperImg.current.classList.add('up');
      upperImg2.current.classList.remove('down');
      upperImg2.current.classList.add('up');
    }
  };
  const onClickDownButton = () => {
    if (upperImg.current || upperImg2.current) {
      if (!upperImg.current.classList.contains('up') || !upperImg2.current.classList.contains('up')) {
        return;
      }
      upperImg.current.classList.remove('up');
      upperImg.current.classList.add('down');
      upperImg2.current.classList.remove('up');
      upperImg2.current.classList.add('down');
    }
  };

  return (
    <div className="container">
      <div className="overlap_desktop">
        <div className="element-wrapper-desktop">
          <div ref={upperImg2} className="element-wrapper-1"></div>
          <div className="element-wrapper-2"></div>
          <div className="button-wrapper">
            <button className={'text-wrapper-1'} onClick={() => onClickUpButton()}>
              вверх
            </button>
            <button className={'text-wrapper-2'} onClick={() => onClickDownButton()}>
              вниз
            </button>
          </div>
        </div>
      </div>
      <div className={'container-wrapper'}>
        <div className="h-1-wrapper">
          <h1 className="text-wrapper">
            Эргономика — <br />
            ключ к успеху современного человека
          </h1>
        </div>
        <div className="p-wrapper">
          <p className="text-wrapper">
            Cтильная столешница , выполненной из экологически безопасного материала (ДСП), и усиленной стальной рамы не
            составит труда разместить на поверхности инновационного стола большое количество крупногабаритной техники:
            стол выдерживает нагрузку до 80 кг.
          </p>
        </div>
        <div className="overlap">
          <div className="element-wrapper-desktop">
            <div ref={upperImg} className="element-wrapper-1"></div>
            <div className="element-wrapper-2"></div>
          </div>
          <div className="button-wrapper">
            <button className={'text-wrapper-1'} onClick={() => onClickUpButton()}>
              вверх
            </button>
            <button className={'text-wrapper-2'} onClick={() => onClickDownButton()}>
              вниз
            </button>
          </div>
        </div>
        <div className="p-wrapper">
          <p className="text-wrapper">
            Также столешница, обладающая меламиновым покрытием, хорошо переносит механические воздействия (царапины или
            удары), при контакте с водой не разрушается, устойчиво переносит бытовые химические вещества и не выгорает
            под воздействием ультрафиолета.
          </p>
        </div>
      </div>{' '}
    </div>
  );
}

export default App;
