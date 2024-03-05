// import React,{ useState } from 'react';
import { IoPlaySkipForward } from "react-icons/io5";
// import { IoPauseCircleOutline, IoPlayCircleOutline } from "react-icons/io5";
import { IoPlaySkipBackSharp } from "react-icons/io5";
import { RiRestartLine } from "react-icons/ri";
import { HeartIconBtn } from "../../../common/icons/heartIconBtn";
import { Icon } from '@iconify/react';
import pauseIcon from '@iconify/icons-ion/pause';
import playIcon from '@iconify/icons-ion/play';

interface Props {
  togglePlay: () => void
  isPlaying: boolean
}

export function MusicPlayElements({ togglePlay, isPlaying}: Props) {

  return (
    <section>
      <div className="mt-12">
        <button className="ml-9 text text-white hover:text-green-500">
          <RiRestartLine />
        </button>
        <button className="ml-10 text text-white hover:text-green-500">
          <IoPlaySkipBackSharp />
        </button>
        <button className="ml-10 text text-white hover:text-green-500">
        <Icon icon={isPlaying ? pauseIcon : playIcon} onClick={togglePlay} />
        </button>
        <button className="ml-10 text text-white hover:text-green-500">
          <IoPlaySkipForward />
        </button>
        <HeartIconBtn />
      </div>
    </section>
  );
}