import { Link } from 'react-router-dom';
import Titolo from '../components/Titolo';
import './style/Regalo.css';
import { LuPlaneTakeoff } from "react-icons/lu";
import Header from '../components/Header';
import SposiImg from './../static/images/sposi-nobg.png'

function Regalo() {

  return (
    <div className='Regalo w-full box-border p-4 flex flex-col items-center justify-start'>
      <Header className='header'/>
      <div className='r-body h-screen flex flex-col items-center justify-start'>
        <div className='titolo-pagina'>Regalo di nozze</div>
        <div className='img'>
          <img src={SposiImg} />
        </div>
        <div className='content'>
        <strong>Cari invitati,</strong><br/>
        Se avete il piacere di contribuire a questo nostro inizio insieme, potrete partecipare concretamente
        alla realizzazione della nostra nuova casa:<br/><br/>

        IBAN: IT70F0306903213100000016354<br/>
        Banca: Intesa Sanpaolo<br/>
        Intestato a: Pietro Quadrini<br/><br/>

        Con gratitudine,<br/>
        <div className='firma'>Pietro e Serena</div>
        {/*  <div className='normal'>Siamo felici di condividere con voi il giorno del nostro <div className='corsivo'>matrimonio</div>! Per chi volesse farci un regalo, abbiamo scelto di concentrare il vostro affetto sul nostro sogno: <div className='corsivo'>il viaggio di nozze</div>.<br/><br/></div>
          Se desiderate contribuire, potete farlo tramite bonifico al seguente IBAN: <br /><br/><div className='iban'>IT70F0306903213100000016354</div><br/><div className='normal'><div className='corsivo'>Grazie</div> di cuore per il vostro affetto e supporto!</div>
        */}
        </div>
      </div>
    </div>
  );
}

export default Regalo;
