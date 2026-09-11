import React from "react";

const ContactInfo = () => {
  const links = [
    {
      name: "Telegram",
      link: "https://t.me/abdu_dev_tg",
    },
    {
      name: "TikTok",
      link: "https://tiktok.com/@abdu.dev",
    },
    {
      name: "YouTube",
      link: "https://youtube.com/@abdu_dev_yt",
    },
  ];

  const phoneNumber = [
    {
      link: "+251900000000",
      name: "(+251)9 00 000 000",
    },
    {
      link: "+251900000000",
      name: "(+251)9 00 000 000",
    },
  ];

  return (
    <section className="grid place-content-center">
      <div className="flex flex-col items-center lg:items-start gap-4">
        <div>
          <h2 className="text-accent text-center lg:text-start font-runalto font-bold text-4xl">
            Contact Us
          </h2>
          <p className="text-back max-w-120 text-center lg:text-start">
            Discover the story, values, and vision that shape Aberos and the
            businesses we continue to build.
          </p>
        </div>
        <div>
          {[
            "24 New Deepwood Highway, Standard Building.",
            "24 New Deepwood tandard Building.",
          ].map((item, i) => (
            <address
              key={i}
              className="text-back text-center lg:text-start font-bold font-runalto"
            >
              {item}
            </address>
          ))}
        </div>
        <div>
          {["Bumgarner@example.com", "ner@example.com"].map((item, i) => (
            <p className="text-back text-center lg:text-start" key={i}>
              <a
                href={`mailto:${item}`}
                className="transition duration-300 hover:text-accent"
              >
                {item}
              </a>
            </p>
          ))}
        </div>
        <div>
          {phoneNumber.map((item, i) => (
            <p className="text-center lg:text-start" key={i}>
              <a
                className="text-back transition duration-300 hover:text-accent"
                href={`tel:${item.link}`}
              >
                {item.name}
              </a>
            </p>
          ))}
        </div>
        <ul className="flex gap-4">
          {links.map((item, i) => (
            <li key={i}>
              <a
                className="text-text bg-accent px-4 py-2 font-semibold inline-block transition duration-300 hover:bg-back"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ContactInfo;
