"use client";

import { FiSearch, FiMail, FiBell } from "react-icons/fi";
import { MobileSidebar } from "./MobileSidebar";

export default function Navbar() {
  return (
    <header
      className="lg:right-[330px] flex items-center rounded-2xl p-3 bg-[#10494b10] border border-[#10494b15] justify-between z-20 mb-7"
      dir="rtl"
    >
      {/* Search */}
      <div className="flex items-center gap-2 bg-white rounded-full border border-[#10494b20] p-3 w-[200px] lg:w-[300px]">
        <FiSearch className="w-4.5 h-4.5 text-neutral-500 shrink-0" />
        <input
          type="text"
          placeholder="جستجوی ..."
          className="bg-transparent text-sm text-neutral-700 placeholder-neutral-500 outline-none w-full"
          dir="rtl"
        />
      </div>

      {/* Mobile hamburger */}
      <MobileSidebar />

      {/* Right side: icons + user */}
      <div className="flex items-center gap-3">
        <button className="w-11.5 h-11.5 bg-white rounded-full border border-[#10494b20] flex items-center justify-center hover:bg-[#10494b20] transition-colors">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZmlsbD0ibm9uZSIgICAgIGQ9Ik0xNS41IDE4YTMuNSAzLjUgMCAxIDEtNyAwbTEwLjczMSAwSDQuNzdhMS43NjkgMS43NjkgMCAwIDEtMS4yNS0zLjAybC42MDItLjYwM0EzIDMgMCAwIDAgNSAxMi4yNTZWOS41YTcgNyAwIDAgMSAxNCAwdjIuNzU2YTMgMyAwIDAgMCAuODc5IDIuMTIxbC42MDMuNjAzYTEuNzcgMS43NyAwIDAgMS0xLjI1IDMuMDIiLz48L3N2Zz4=" />
        </button>

        <button className="w-11.5 h-11.5 bg-white rounded-full border border-[#10494b20] flex items-center justify-center hover:bg-[#10494b20] transition-colors">
          <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSJub25lIiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZD0ibTIgNmw2LjkxMyAzLjkxN2MyLjU0OSAxLjQ0NCAzLjYyNSAxLjQ0NCA2LjE3NCAwTDIyIDYiLz48cGF0aCBkPSJNMi4wMTYgMTMuNDc2Yy4wNjUgMy4wNjUuMDk4IDQuNTk4IDEuMjI5IDUuNzMzYzEuMTMxIDEuMTM2IDIuNzA1IDEuMTc1IDUuODU0IDEuMjU0YzEuOTQuMDUgMy44NjIuMDUgNS44MDIgMGMzLjE0OS0uMDc5IDQuNzIzLS4xMTggNS44NTQtMS4yNTRjMS4xMzEtMS4xMzUgMS4xNjQtMi42NjggMS4yMy01LjczM2MuMDItLjk4Ni4wMi0xLjk2NiAwLTIuOTUyYy0uMDY2LTMuMDY1LS4wOTktNC41OTgtMS4yMy01LjczM2MtMS4xMzEtMS4xMzYtMi43MDUtMS4xNzUtNS44NTQtMS4yNTRhMTE1IDExNSAwIDAgMC01LjgwMiAwYy0zLjE0OS4wNzktNC43MjMuMTE4LTUuODU0IDEuMjU0Yy0xLjEzMSAxLjEzNS0xLjE2NCAyLjY2OC0xLjIzIDUuNzMzYTY5IDY5IDAgMCAwIDAgMi45NTJaIi8+PC9zdmc+" />
        </button>
      </div>
    </header>
  );
}