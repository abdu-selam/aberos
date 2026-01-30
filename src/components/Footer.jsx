import React from "react";
import { Facebook, Mail, Send, Twitter, Linkedin } from "lucide-react";
import { Link } from "react-router";
import useStore from "../store/useStore";
import { header } from "../data/translation";

function Footer({ page }) {
  const lang = useStore((state) => state.lang);
  const navs = header[lang]["navs"];

  return (
    <footer className="bg-black text-back py-12">
      <div className="max-w-6xl mx-auto px-8 grid md:grid-cols-3 gap-6 items-center">
        <ul className="flex justify-center gap-3">
          {navs.slice(0, 3).map((item, i) => (
            <li key={i} className={`text-[1rem] text-txt`}>
              <Link
                to={`/${item.link}`}
                className={`
                          relative inline-block pb-1
                          transition-all duration-300 ease-out
                          hover:opacity-100
                          hover:-translate-y-2
                          after:content-['']
                          after:absolute after:left-0 after:-bottom-0.5
                          after:h-0.5 after:w-0 after:bg-txt
                          after:transition-all after:duration-300
                          hover:after:w-full
                          ${
                            page == item.link
                              ? "text-txt opacity-100"
                              : "opacity-50"
                          }
                        `}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <ul className="flex gap-6 justify-center">
          <li>
            <a href="#facebook">
              <Facebook className="text-muted transition-all duration-500  hover:-translate-y-2 rounded-sm box-content p-1 hover:bg-back hover:text-primary" />
            </a>
          </li>
          <li>
            <a href="#tweeter">
              <Twitter className="text-muted transition-all duration-500  hover:-translate-y-2 rounded-sm box-content p-1 hover:bg-back hover:text-primary" />
            </a>
          </li>
          <li>
            <a href="#linkedin">
              <Linkedin className="text-muted transition-all duration-500  hover:-translate-y-2 rounded-sm box-content p-1 hover:bg-back hover:text-primary" />
            </a>
          </li>
          <li>
            <a href="#mail">
              <Mail className="text-muted transition-all duration-500  hover:-translate-y-2 rounded-sm box-content p-1 hover:bg-back hover:text-primary" />
            </a>
          </li>
        </ul>

        <p className="text-sm text-back/60 text-center">
          &copy; {new Date().getFullYear()} Aberos PLC
        </p>
      </div>
    </footer>
  );
}

export default Footer;
