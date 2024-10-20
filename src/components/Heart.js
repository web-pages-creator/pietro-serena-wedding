import './style/Heart.css';
import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeartIcon } from "@heroicons/react/24/solid"; // Icona cuore pieno
import { HeartIcon as OutlineHeartIcon } from "@heroicons/react/24/outline";

const Heart = forwardRef((props, ref) => {
  const [liked, setLiked] = useState(props.checked);
  const solid = useRef(null);

  useImperativeHandle(ref, () => ({
    updateSetLiked: (isLiked) => setLiked(isLiked),
  }));

  const toggleLike = (event) => {
    if (!liked) {
      props.checkedEvent({liked: !liked, id: props.id})
      setLiked(!liked);
    } else {
      solid.current.classList.remove('filled-solid-animation')
      solid.current.classList.add('alreadyClicked')
      console.log('classlist', solid.current.classList)
      setTimeout(() => {
        solid.current.classList.remove('alreadyClicked')
        console.log('classlist', solid.current.classList)
      }, 400);
    }

  };

  return (
    <button
      onClick={toggleLike}
      className="button w-14 h-14"
    >
      {liked ? (
        <div className='filled-container h-full'>
          <SolidHeartIcon ref={solid} className="filled-solid filled-solid-animation" />
          <OutlineHeartIcon className="filled-outline" />
        </div>
      ) : (
        <div className='filled-container h-full'>
          <SolidHeartIcon className="unfilled-solid" />
          <OutlineHeartIcon className="unfilled-outline" />
        </div>
      )}
    </button>
  );
})

export default Heart;
