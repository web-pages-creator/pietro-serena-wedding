import Titolo from '../components/Titolo';
import './style/ViaggioDiNozze.css';
import { GrInProgress } from "react-icons/gr";

function ViaggioDiNozze() {

  return (
    <div className='ViaggioDiNozze w-full h-full box-border p-6 flex flex-col items-center justify-start'>
      <Titolo />
      <GrInProgress className='icon'/>
      <div className='messaggio'>Pagina ancora in lavorazione</div>
    </div>
  );
}

export default ViaggioDiNozze;
