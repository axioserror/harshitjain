import React, { useState, useEffect } from "react";
import "./Contact.css";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [scrollIndex, setScrollIndex] = useState(0);

  const contactInfo = [
    {
      title: "HELLO@EXAMPLE.COM",
      details: [
        "Want to discuss something?",
        "Need advice?",
        "Want to say hi?",
      ],
    },
    {
      title: "NEWBIZ@EXAMPLE.COM",
      details: [
        "Have a project in mind?",
        "Looking for a partner?",
        "Want to collab?",
      ],
    },
    {
      title: "JOIN@EXAMPLE.COM",
      details: [
        "If you want to join our team and work with us on exciting projects, tell us your story.",
      ],
    },
    {
      title: "CONTACT",
      details: [
        "Don't hesitate to reach out. We usually respond within 24 hours unless it's a holiday.",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % contactInfo.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the mailto link
    const recipientEmail = `${email}`;
    const subject = `Message from ${name}`;
    const body = `Hi, my name is ${name},\n\n${message}\n\nYou can contact me at: ${email}`;

    // Construct the mailto URL
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section id="contact">
      <p className="mt-8 ml-8 text-xs bg-white/65 p-2 rounded-xl w-fit text-white">
        ⚪ Contact Me
      </p>
      <div className="flex md:flex-row flex-col h-screen m-8 bg-black text-white">
        <div className="md:w-1/2  p-8 flex flex-col justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="p-6 font-inconsolata w-3/4  text-base font-medium bg-white/85  rounded-lg text-black"
          >
            <div>
              <label htmlFor="name" className="block text-lg">
                Hi my name is
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-transparent border-b border-black p-1"
                required
              />
            </div>
            {name && (
              <div>
                <label htmlFor="email" className="block text-lg">
                  My email is
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-1 bg-transparent border-b border-black"
                  required
                />
              </div>
            )}
            <div>
              <label htmlFor="message" className="block text-lg">
                Message:
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-1 bg-transparent border border-black rounded-lg h-48"
                rows="6"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 text-lg rounded-lg "
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        <div className="w-1/2 order-first md:order-last p-8 flex flex-col justify-center overflow-hidden contact-scroll">
          <div className="contact-scroll-content">
            {contactInfo.map((info, index) => (
              <div
                key={info.title}
                className="md:h-fit md:p-6  h-64 flex-shrink-0 flex flex-col justify-center"
              >
                <h3 className="text-xl font-bold mb-2">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="mb-1">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
