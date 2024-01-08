import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";

const LikeComponent = () => {

  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };
  return (
    <div>
      {isLiked ? <AiFillHeart color="red" onClick={handleLike}/> : <AiOutlineHeart color="red" onClick={handleLike}/>}
    </div>
  );
};

export default LikeComponent