import './style/RSVPWithParams.css';
import church from './../static/images/church.jpg'
import sposi from './../static/images/sposi.png'
import { useParams } from "react-router-dom";
import Titolo from '../components/Titolo';
import { useRef } from 'react';
import Heart from '../components/Heart';

function RSVPWithParams() {
  const { id } = useParams()
  const yesHeart = useRef(null);
  const noHeart = useRef(null);

  let partecipa = true

  const handleCheckedEvent = (event) => {
    partecipa = event.id == 'yes'
    if (event.id == 'yes') {
      noHeart.current.updateSetLiked(false)
    } else {
      yesHeart.current.updateSetLiked(false)
    }
  }

  return (
    <div className='RSVPWithParams w-full h-full box-border p-6 flex flex-col items-center justify-start'>
      <Titolo />
      <div className='rsvp flex flex-col items-center justify-start'>————————————— RSVP —————————————</div>

      <label className='py-4 name'>{id}</label>

      {/* HEARTS */}
      <div className='w-full grid grid-cols-2 gap-4'>
        <div className='flex flex-col items-center justify-start'>
          <Heart ref={yesHeart} id='yes' checked={partecipa == true} checkedEvent={handleCheckedEvent}/>
          <label>Si ci sono</label>
        </div>
        <div className='flex flex-col items-center justify-start'>
          <Heart ref={noHeart} id='no' checked={partecipa == false} checkedEvent={handleCheckedEvent}/>
          <label>No</label>
        </div>
      </div>

      <label className='w-full text-left mt-4 mb-2'>Intolleranze o allergie</label>
      <input className='w-full p-2 input'></input>

      <label className='w-full text-left mt-4 mb-2'>Note generali</label>
      <textarea className='w-full p-2 input ta'></textarea>

      <div className='w-full grid grid-cols-2 gap-4'>
        <div></div>
        <div className='submit my-5 p-2.5'>Invia</div>
      </div>

      <img className='sposi' src={sposi}></img>

      {/* <Countdown className='countDown' date={new Date('2025-04-26T15:00:00Z')} intervalDelay={0} precision={3} /> */}
    </div>
  );
}

export default RSVPWithParams;
