import React, { useCallback, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button } from "../../components";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const videoConstraints = {
    facingMode: "user",
    width: window.innerWidth - 16, // off setting the padding
    height: window.innerHeight - 16, // off setting the padding
    aspectRatio: 16 / 9,
  };

  console.log(window.innerHeight);

  const navigate = useNavigate();
  const webcamRef = useRef<Webcam>(null);
  const [url, setUrl] = useState<string | null>(null);

  const capturePhoto = useCallback(async () => {
    if (webcamRef.current) {
      // eslint-disable-next-line
      const imageSrc = webcamRef.current.getScreenshot();
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

  const onUserMedia = (e: MediaStream) => {
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
        />
      ) : (
        <div>
          <img src={url} alt="Screenshot" />
        </div>
      )}
      <div className="absolute bottom-0 flex w-full justify-center items-center gap-2 py-4">
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
