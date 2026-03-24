const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-7xl mx-auto px-4 py-6 text-center">
        
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>

        <p className="text-xs text-gray-400 mt-2">
          Built with ❤️ using React & Tailwind CSS
        </p>

      </div>
    </footer>
  );
};

export default Footer;