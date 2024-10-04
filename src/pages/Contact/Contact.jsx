import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [scrollIndex, setScrollIndex] = useState(0);

  const contactInfo = [
    { title: 'HELLO@EXAMPLE.COM', details: ['Want to discuss something?', 'Need advice?', 'Want to say hi?'] },
    { title: 'NEWBIZ@EXAMPLE.COM', details: ['Have a project in mind?', 'Looking for a partner?', 'Want to collab?'] },
    { title: 'JOIN@EXAMPLE.COM', details: ['If you want to join our team and work with us on exciting projects, tell us your story.'] },
    { title: 'CONTACT', details: ['Don\'t hesitate to reach out. We usually respond within 24 hours unless it\'s a holiday.'] },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollIndex((prevIndex) => (prevIndex + 1) % contactInfo.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', { name, email, message });
    // Here you would typically send the data to a server
  };

  return (
    <div className="flex h-screen bg-black text-white">
      <div className="w-1/2 p-8 bg-gray-800">
        <h2 className="text-xl mb-4">CONTACT US:</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block">Hi my name is</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-white"
              required
            />
          </div>
          {name && (
            <div>
              <label htmlFor="email" className="block">My email is</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent border-b border-white"
                required
              />
            </div>
          )}
          <div>
            <label htmlFor="message" className="block">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-transparent border border-white"
              rows="4"
            ></textarea>
          </div>
          <button type="submit" className="bg-white text-black px-4 py-2">
            SEND MESSAGE
          </button>
        </form>
      </div>
      <div className="w-1/2 p-8 flex flex-col justify-center">
        <div className="h-64 overflow-hidden">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className={`transition-all duration-500 ${
                index === scrollIndex ? 'opacity-100' : 'opacity-0 -translate-y-full'
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="mb-1">{detail}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;