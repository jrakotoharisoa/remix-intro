export const Quote: React.FC<{ source?: string }> = ({ children, source }) => {
  return (
    <>
      <div className="border-red border-l-4 pl-4 text-6xl font-bold text-white">
        {children}
      </div>
      {source && (
        <div className="self-start p-5 text-left text-3xl text-gray-400">
          — {source}
        </div>
      )}
    </>
  );
};
