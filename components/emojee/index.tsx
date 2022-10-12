const Emojee = () => {
  return (
    <div className="rounded-full border-4 overflow-hidden aspect-square">
      <video
        autoPlay
        loop
        muted
        width={300}
        height={300}
        src="/static/videos/xyz2.mp4"
      ></video>
    </div>
  );
};

export default Emojee;
