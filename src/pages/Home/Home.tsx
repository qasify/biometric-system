import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../../components";

const videoConstraints = {
  facingMode: "user",
  // width: 1200,
};

const Home = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    if (webcamRef.current) {
      // eslint-disable-next-line
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setUrl(imageSrc);
    }
  }, []);

  const onUserMedia = (e: any) => {
    console.log(e);
  };

  return (
    <div className="p-2">
      {!url ? (
        <Webcam
          ref={webcamRef}
          audio={true}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
          className="w-full h-[700px]"
        />
      ) : (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
      <div className="flex gap-2 py-2">
        <Button onClick={capturePhoto}>Capture</Button>
        <Button onClick={() => setUrl(null)}>Refresh</Button>
      </div>
    </div>
  );
};

export default Home;
