// import pisicaAvocat from '../assets/mike.webp';
import './echipa.css';
import lawyer from '../assets/lawyer.jpg';

const Echipa = () => {
  return (
    <div className="echipa-cont">
      <p className="echipa-title">Echipa Noastră</p>
      <div className="line-dec-echipa"></div>
      <div className="row-echipa">
        <div className="col-echipa">
          <div>
            <img className="pic-avocat" src={lawyer} alt="mike" />
          </div>
          <div className="desc-echipa">
            <p className="membru-title">Lucian Niculescu</p>
            <p className="membru-desc">
              avocat CNSA, membru al UNBR și BRAK Germania
            </p>
          </div>
        </div>
        <div className="col-echipa">
          <div>
            <img className="pic-avocat" src={lawyer} alt="mike" />
          </div>
          <div className="desc-echipa">
            <p className="membru-title">Partener</p>
            <p className="membru-desc">
              avocat CNSA, membru al Baroului București
            </p>
          </div>
        </div>
        <div className="col-echipa">
          <div>
            <img className="pic-avocat" src={lawyer} alt="mike" />
          </div>
          <div className="desc-echipa">
            <p className="membru-title">Partener</p>
            <p className="membru-desc">avocat CNSA</p>
          </div>
        </div>
        <div className="col-echipa">
          <div>
            <img className="pic-avocat" src={lawyer} alt="mike" />
          </div>
          <div className="desc-echipa">
            <p className="membru-title">Partener</p>
            <p className="membru-desc">avocat CNSA</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Echipa;
