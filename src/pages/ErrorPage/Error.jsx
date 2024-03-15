
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <main>
      <section className="w-4/5 md:2/3 mx-auto my-10 text-justify">
        <div className="text-8xl font-extrabold font-title mt-5 text-red-500">404</div>
        <div className="text-xl flex flex-row gap-2"><div className="material-symbols-outlined text-red-500">
          error
        </div><div>Oops! Page not found.</div></div>
        <div>The page you are looking for was not found.
          <br /> You may return to <Link to={"/"} className="text-blue-300 underline underline-offset-2">home page</Link>.</div>
      </section>
    </main>
  )
}

export default Error;
