import menuData from "@/app/components/Navbar/menuData";
import Link from "next/link";

function NavList() {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {menuData.map((menuItem, index) => (
        <li key={menuItem.id} className="group relative">
          {menuItem.path ? (
            <Link
              href={menuItem.path}
              className={`flex py-2 text-base text-white group-hover:opacity-70  lg:mr-0 lg:inline-flex  lg:px-0`}
            >
              {menuItem.title}
            </Link>
          ) : (
            <>
              <a
                onClick={() => handleSubmenu(index)}
                className="flex cursor-pointer items-center justify-between py-2 text-base text-white group-hover:opacity-70  lg:mr-0 lg:inline-flex  lg:px-0"
              >
                {menuItem.title}
                <span className="pl-3">
                  <svg width="15" height="14" viewBox="0 0 15 14">
                    <path
                      d="M7.81602 9.97495C7.68477 9.97495 7.57539 9.9312 7.46602 9.8437L2.43477 4.89995C2.23789 4.70308 2.23789 4.39683 2.43477 4.19995C2.63164 4.00308 2.93789 4.00308 3.13477 4.19995L7.81602 8.77183L12.4973 4.1562C12.6941 3.95933 13.0004 3.95933 13.1973 4.1562C13.3941 4.35308 13.3941 4.65933 13.1973 4.8562L8.16601 9.79995C8.05664 9.90933 7.94727 9.97495 7.81602 9.97495Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </a>
              <div
                className={`submenu relative top-full left-0 rounded-md bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {menuItem.submenu.map((submenuItem) => (
                  <Link
                    href={submenuItem.path}
                    key={submenuItem.id}
                    className="block rounded py-2.5 text-sm text-white hover:opacity-70  lg:px-3"
                  >
                    {submenuItem.title}
                  </Link>
                ))}
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

export default NavList;
