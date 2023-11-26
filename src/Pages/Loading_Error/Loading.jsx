const Loading = () => {
  return (
    <div className="h-[100vh] mt-80">
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500" />
        <img
          src="https://i.ibb.co/9qMqk69/man-character-thinking-155707-268-removebg-preview.png"
          className="rounded-full h-28 w-28"
        />
      </div>
    </div>
  );
};

export default Loading;
