export default function Login() {
  return (
    <>
    <div className="grid justify-items-center">
        <form className="grid justify-center bg-slate-500 my-28 py-10 px-20 rounded-3xl opacity-80">
            <div className="inline-grid mb-5 justify-items-center">
                <label className="text-slate-300 mb-1"> Username: </label>
                <input type="username" className="bg-slate-700 rounded-md h-9 mb-5 hover:shadow-slate-300 focus:shadow-slate-300 shadow-lg"/>
                <label className="text-slate-300 mb-1"> Password: </label>
                <input type="password" className="bg-slate-700 rounded-md h-9 mb-5 hover:shadow-slate-300 focus:shadow-slate-300 shadow-lg"/>
            </div>
            <input type="button" value="Login" className="h-9 text-slate-300 bg-slate-700 place-items-center rounded-md hover:shadow-slate-300 focus:shadow-slate-300 shadow-lg" />
        </form>
    </div>
    </>
  )
}

export {Login};
