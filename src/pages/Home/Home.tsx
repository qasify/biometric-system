import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const videoConstraints = {
  facingMode: "user",
  width: 1024,
  height: 768,
  aspectRatio: 16 / 9,
};

const Home = () => {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const [url, setUrl] = useState(null);

  const capturePhoto = React.useCallback(async () => {
    if (webcamRef.current) {
      // eslint-disable-next-line
      const imageSrc = (webcamRef.current as any).getScreenshot();
      setUrl(imageSrc);
    }
  }, []);

  const handleCancel = () => {
    navigate("/login");
  };

  const handleRefresh = () => {
    setUrl(null);
  };

  const handleConfirm = () => {
    // confirm
  };

  const onUserMedia = (e: any) => {
    console.log(e);
  };

  return (
    <div className="flex flex-col items-center justify-center p-2">
      {!url ? (
        <Webcam
          ref={webcamRef}
          audio={false}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          onUserMedia={onUserMedia}
          // className="w-full h-[700px]"
        />
      ) : (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
      <div className="flex w-full justify-center items-center gap-2 py-2">
        {url ? (
          <>
            <Button onClick={handleConfirm}>Confirm</Button>
            <Button onClick={handleRefresh}>Try Again</Button>
          </>
        ) : (
          <Button onClick={capturePhoto}>Capture</Button>
        )}
        <Button onClick={handleCancel}>Cancel</Button>
      </div>
    </div>
  );
};

export default Home;
