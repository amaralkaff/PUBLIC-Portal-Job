const NotFoundPage = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center" style={{ height: 'calc(100vh - 8rem)' }}>
        <img 
          src="https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" 
          alt="Animated GIF" 
          style={{ maxWidth: '100%', maxHeight: '100vh' }} 
        />
    </div>
        <div className="absolute top-20 left-0 right-0 bottom-45 flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold text-black hover:text-gray-700">404 - Page Not Found</h1>
          <button className="bg-gray-800 text-white px-4 py-2 rounded-lg mt-4">
            <a href="/jobs">Back to Job List</a>
          </button>
          </div>
      </div>
  );
};

export default NotFoundPage;
