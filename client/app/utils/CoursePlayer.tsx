import React, { FC, useEffect, useState } from "react";
import axios from "axios";

type Props = {
  videoUrl: string;
  title: string;
};

const CoursePlayer: FC<Props> = ({ videoUrl }) => {
  // const [videoData, setVideoData] = useState({
  //   otp: "",
  //   playbackInfo: "",
  // });

  // useEffect(() => {
  //   axios
  //     .post(`${process.env.NEXT_PUBLIC_SERVER_URI}getVdoCipherOTP`, {
  //       videoId: videoUrl,
  //     })
  //     .then((res) => {
  //       setVideoData(res.data);
  //     });
  // }, [videoUrl]);

  function videoUrlId(){      
    if (!videoUrl) return;
    let youtubeId ="";
    if(videoUrl.length> 11){
      const linkArray = videoUrl.toString().split('be/');
      youtubeId = linkArray[1];
    }else{
      youtubeId = videoUrl;
    }
    
    return youtubeId;
  }

  let p1 = `http://www.youtube-nocookie.com/embed/${videoUrlId()}`;    
  let p2 = "?rel=0";  



  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
    >
      <iframe width={"540"} height={"350"} src={p1 + p2} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" allowFullScreen ></iframe>
      
    </div>
  );
};

export default CoursePlayer;
