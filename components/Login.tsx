export default function Login() {
  return (
    <>
      <div className="grid place-items-center h-[80vh]">
        <div className=" bg-slate-500 shadow-lg p-10 rounded-lg border-t-4 border-slate-400">
          <h1 className="text-xl font-bold my-4 text-center text-slate-400">LOGIN</h1>
          <form className="flex flex-col gap-3">
            <input placeholder="Username" type="username" />
            <input placeholder="Password" type="password" />
            <button className="bg-slate-700 text-slate-400 rounded-lg h-9 my-5 font-bold cursor-pointer">Login</button>
          </form>
        </div>
      </div>
    </>
  )
}