const Contact = () => {
  return (
    <section
      id="contact"
      className="py-20 text-center"
      itemScope
      itemType="http://schema.org/ContactPoint"
    >
      <h2
        className="text-3xl font-bold text-blue-400 drop-shadow-lg"
        itemProp="name"
      >
        Get in Touch
      </h2>
      <p className="text-gray-300 mt-4" itemProp="description">
        Interested in working together? Let's talk!
      </p>
      <a
        href="mailto:amer.baos@gmail.com"
        itemProp="email"
        className="mt-6 inline-block px-6 py-3 bg-transparent text-blue-400 font-bold rounded-md border border-blue-500 hover:bg-blue-500/20 hover:border-blue-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,191,255,0.8)] hover:shadow-[0_0_25px_rgba(0,191,255,1)]"
      >
        Contact Me
      </a>
    </section>
  );
};

export default Contact;