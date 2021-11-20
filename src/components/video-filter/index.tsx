import React, { ReactEventHandler } from "react";

import { Selector } from './style';

interface Props {
    filter: string;
    onChangeHandler: ReactEventHandler;
}

const VideoFilter = (props: Props) => {
    const {filter, onChangeHandler} = props;
    
    return (
        <Selector id="video-filter" className="select" value={filter} onChange={onChangeHandler}>
          <option value="none">Normal</option>
          <option value="grayscale(100%)">Grayscale</option>
          <option value="sepia(100%)">Sepia</option>
          <option value="invert(100%)">Invert</option>
          <option value="hue-rotate(90deg)">Hue</option>
          <option value="blur(10px)">Blur</option>
          <option value="contrast(200%)">Contrast</option>
        </Selector>
    );
}

export default VideoFilter;