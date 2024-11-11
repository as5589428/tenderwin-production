const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin w-20 h-20 border-4 border-orange-500 border-t-transparent rounded-full"></div>
      <span className="ml-3 text-lg">Loading...</span>
    </div>
  );
};

export default Loading;