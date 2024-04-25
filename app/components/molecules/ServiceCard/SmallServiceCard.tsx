export function SmallServiceCard({ price, content, onClick }: any) {
  return (
    <div className="bg-white card card-compact w-96 shadow-xl py-4">
      <div className="flex flex-col justify-center items-center py-8 md:py-16">
        <p className="card-title">Basico</p>
        <p className="text-blue-500 text-6xl md:text-7xl font-semibold">
          {price}$
        </p>
        <p className="text-blue-500">Por mes</p>
      </div>

      <div className="card-body gap-4">
        <div className="card-actions justify-center">
          <button
            onClick={onClick}
            className="btn btn-success w-full text-white"
          >
            Elige este plan
          </button>
        </div>
        <div className="flex items-center h-full">
          <p className="text-center text-base md:text-lg">{content}</p>
        </div>
      </div>
    </div>
  );
}
