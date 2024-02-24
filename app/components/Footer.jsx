import {
  faFacebookSquare,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faLocationDot, faEnvelope, faSquarePhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Footer() {
  return (
    <footer className="relative bg-gray-300 pt-8 pb-3">
      <div className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-[80px]">
        <svg
          className="absolute bottom-0 overflow-hidden"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon
            className="text-gray-300 fill-current"
            points="2560 0 2560 100 0 100"
          ></polygon>
        </svg>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">DocuReel</h4>
            <div className=" text-gray-700 font-normal text-sm items-center justify-center align-center ">
              <p>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-gray-800"
                />
                <span className="pl-1 ">
                  Sonkor Bus Stop, Dhanmondi, Dhaka 1209 Dhaka, Dhaka Division,
                  Bangladesh.
                </span>
              </p>
            </div>

            <div className="mt-3">
              <h5 className="text-sm mt-0 mb-1 text-gray-700">
                Find us on any of these platforms, we respond 1-2 business days.
              </h5>
              <div className=" text-gray-700 font-normal text-sm items-center justify-center align-center ">
                <a>
                  <FontAwesomeIcon
                    icon={faSquarePhone}
                    className="text-gray-800"
                  />

                  <span className="pl-1 ">01603-895803</span>
                </a>
              </div>
              <div className=" text-gray-700 font-normal text-sm items-center justify-center align-center ">
                <a href="mailto:docureel@gmail.com">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-gray-800"
                  />
                  <span className="pl-1 hover:underline">
                    docureel@gmail.com
                  </span>
                </a>
              </div>

              <div className=" text-gray-700 font-normal text-sm items-center justify-center align-center ">
                <a href="https://www.facebook.com/docureelBD">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFacebookSquare}
                    className="text-gray-800"
                  />
                  <span className="pl-1 hover:underline">DocuReel</span>
                </a>
              </div>

              <div className=" text-gray-700 font-normal text-sm items-center justify-center align-center ">
                <a href="https://www.instagram.com/docureel">
                  {" "}
                  <FontAwesomeIcon
                    icon={faSquareInstagram}
                    className="text-gray-800"
                  />
                  <span className="pl-1 hover:underline">DocuReel</span>
                </a>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://www.creative-tim.com/presentation"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/contact-us"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/terms"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                      href="https://creative-tim.com/privacy"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-3 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright © 2019 All Rights Reserved by
              <a href="/" className="text-gray-600 hover:text-gray-900 pl-1">
                DocuReel
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
