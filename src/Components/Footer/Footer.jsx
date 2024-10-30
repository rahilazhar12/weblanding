import React from "react";
import { Link } from "react-router-dom";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-[#2e475d] text-white py-12 px-4">
        {/* Top Banner */}
        <div className="text-center mb-8">
          <p className="text-lg">
            Stay sharp. Learn from leading experts on the latest business
            trends.
          </p>
          <button className="mt-4 px-4 py-2 bg-white text-blue-900 font-semibold rounded-md transition duration-300">
            Sign up for free courses
          </button>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 text-center md:text-left mb-12 max-w-screen-lg mx-auto     ">
          {/* Community Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Community</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className=" text-white">
                  HubSpot User Groups
                </Link>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Support Forum
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Education Partners
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Certified Trainers
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Resources</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className=" text-white">
                  Frequent Questions
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Designer Docs
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Developer Docs
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  User Guides
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Customers Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support and Tools Column */}
          <div>
            <h3 className="font-semibold text-lg mb-2">Support and Tools</h3>
            <ul className="space-y-1">
              <li>
                <a href="#" className=" text-white">
                  HubSpot Partners
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Join a Local User Group
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Get a Free Website Report
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  HubSpot Templates
                </a>
              </li>
              <li>
                <a href="#" className=" text-white">
                  Free Tools & Generators
                </a>
              </li>
            </ul>
          </div>

          {/* Support Button and Social Links */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button className="bg-orange-600 text-white font-semibold px-4 py-2 rounded-md transition duration-300">
              HubSpot Support
            </button>
            <div className="flex space-x-4">
              <a href="#">
                <CiFacebook className="text-gray-300 text-xl" />
              </a>
              <a href="#">
                <FaInstagram className="text-gray-300 text-xl" />
              </a>
              <a href="#">
                <FaYoutube className="text-gray-300 text-xl" />
              </a>
              <a href="#">
                <RiTwitterXLine className="text-gray-300 text-xl" />
              </a>
              <a href="#">
                <FaLinkedinIn className="text-gray-300 text-xl" />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-gray-600 mb-4" />

        {/* Footer Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center text-white text-sm max-w-screen-lg mx-auto">
          <p>Copyright © 2024 Webpro, Inc.</p>
          <div className="flex space-x-4 mt-2 lg:mt-0">
            <a href="#" className=" text-white">
              Legal Stuff
            </a>
            <a href="#" className=" text-white">
              Privacy Policy
            </a>
            <a href="#" className=" text-white">
              Manage Cookies
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
