const Footer = () => {
  return (
    <footer
      className="py-4 text-center bg-gray-900 border-t border-gray-700"
      itemScope
      itemType="http://schema.org/WPFooter"
    >
      <p className="text-gray-400">
        © {new Date().getFullYear()} Amer Baosman. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;