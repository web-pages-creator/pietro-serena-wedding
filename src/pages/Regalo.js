import { Link } from 'react-router-dom';
import Titolo from '../components/Titolo';
import './style/Regalo.css';
import { LuPlaneTakeoff } from "react-icons/lu";


function Regalo() {

  return (
    <div className='Regalo w-full h-full box-border p-6 flex flex-col items-center justify-start'>
      <Titolo />
      <div className='titolo-pagina'>Regalo di nozze</div>
      <div className='descrizione'>
      Siamo entusiasti di condividere con voi il nostro <strong>matrimonio</strong>. Per chi volesse farci un regalo, abbiamo deciso di concentrarci su un progetto a cui teniamo particolarmente: <strong>il nostro viaggio di nozze</strong>. Un contributo a questa esperienza sarebbe per noi un gesto prezioso, che ci accompagnerà nei luoghi che sogniamo di scoprire insieme.<br/><br/>
      Se desiderate contribuire, potete farlo tramite bonifico utilizzando il seguente IBAN: <br /><br/><div className='iban'>IT70F0306903213100000016354</div><br/>Vi ringraziamo di cuore per il vostro pensiero e per l’affetto con cui ci accompagnate in questa avventura.
      </div>
      <Link to='/viaggio-di-nozze'>
        <div className='scopri'>
          Scopri il nostro viaggio di nozze <LuPlaneTakeoff className='icon'/>
        </div>
      </Link>
    </div>
  );
}

export default Regalo;
