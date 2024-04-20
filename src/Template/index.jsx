import { Outlet, Link, NavLink } from "react-router-dom";
import { PiUserBold, PiHouseLineBold, PiAppWindowBold } from "react-icons/pi";

function TopNav() {
  return (
    <nav className="w-full md:w-3/4 z-50 border rounded-tr-xl flex justify-end rounded-br-xl p-2 fixed right-0">
      <aside className="md:border rounded md:p-1 mr-5 relative view-profile md:bg-green-100 ">
        <div className="w-[50px] h-[50px] p-2 rounded-full border">
          <PiUserBold className="text-3xl" />
        </div>
        <div className="absolute w-[150px] right-0 mt-2 hidden action-view p-1 bg-green-100">
          <Link className="p-2">View Profile</Link>
          <section className="p-2 cursor-default">Logout</section>
        </div>
      </aside>
    </nav>
  );
}

function SideNav() {
  return (
    <aside className="w-fit md:w-full md:w-1/4 h-[99vh] relative border rounded-xl rounded-t-none rounded-tl-none">
      <div className="p-1 h-fit w-fit md:mx-auto mx-5 border rounded-xl md:p-3 md:h-16  mt-2 text-xl md:text-3xl font-bold">
        {window.screen.availWidth >= 800 ? "Career Path" : "Cp"}
      </div>
      <nav className="lg:mt-6 mt-8 border rounded-xl mx-5 py-3">
        <NavLink to="/app">
          <div className="p-3 flex items-center">
            <PiHouseLineBold />
            {window.screen.availWidth >= 768 && (
              <span className="ml-2">Home</span>
            )}
          </div>
        </NavLink>
        <NavLink to="/main">
          <div className="p-3 flex items-center">
            <PiAppWindowBold />
            {window.screen.availWidth >= 768 && (
              <span className="ml-2">Main</span>
            )}
          </div>
        </NavLink>
      </nav>
      <section className="text-sm absolute bottom-3 w-full mx-auto  flex justify-evenly">
        {window.screen.availWidth >= 800 && (
          <>
            Developer:
            <p className="text-slate-400">Twitter</p>
            <p className="text-slate-400">LinkedIn</p>
            <p className="text-slate-400">Github</p>
          </>
        )}
      </section>
    </aside>
  );
}

export default function DashBoardLayout({ children }) {
  return (
    <section>
      <TopNav />
      <SideNav />
      <div className="fixed top-[95px] -right-5 md:w-3/4 sm:w-[85%] w-3/4">
        <div className="border rounded-xl  border-r-0 h-[83vh] p-5  overflow-y-scroll">
          {children ? children : <Outlet />}
        </div>
        <footer className="m-1 text-gray-400 text-center">
          <small>Copyright 2024</small>
        </footer>
      </div>
    </section>
  );
}
