import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

interface Props {
  liked: boolean;
  onClick: () => void;
}

function Like({ liked, onClick }: Props) {
  return (
    <>
      {liked && <AiFillHeart onClick={onClick} color="red" size={32} />}
      {!liked && <AiOutlineHeart onClick={onClick} size={32} />}
    </>
  );
}

export default Like;
