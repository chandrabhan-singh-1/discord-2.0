export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="md:w-3/4 m-auto flex flex-col items-center justify-center">
      <div>
        <h1 className="text-3xl mt-4 font-bold bg-gradient-to-br bg-clip-text text-transparent from-rose-700 to-purple-600 ">
          Welcome to the Discord 2.0
        </h1>
        <p className=" italic text-end mt-2">
          -by{" "}
          <b className=" bg-gradient-to-r from-sky-500 to-emerald-500 bg-clip-text text-transparent ">
            Chandrabhan Singh
          </b>
        </p>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
