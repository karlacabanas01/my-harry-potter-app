export default function Loading() {
  return (
    <div className="grid place-content-center h-screen">
      <div className="flex items-end justify-between w-36 h-8 mx-auto flex-wrap">
        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce-salto"></div>
        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce-salto delay-150"></div>
        <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce-salto delay-300"></div>
        <span className="block text-xl uppercase pt-5 text-cyan-500">
          Cargando...
        </span>
      </div>
    </div>
  );
}
