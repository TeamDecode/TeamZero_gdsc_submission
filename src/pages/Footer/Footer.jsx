
const Footer = () => {
  return (
      <footer className="bg-slate-800 text-slate-200 px-8 py-4 text-sm">
          <div className="footer-container flex flex-row max-w-7xl gap-12 justify-around list-none">
              <div className="footer-section">
                  <h3 className="font-title text-lg mb-3">Company</h3>
                  <ul>
                      <li className="hover:text-yellow-200">About Us</li>
                      <li className="hover:text-yellow-200">Contact Us</li>
                      <li className="hover:text-yellow-200">Terms of Service</li>
                  </ul>
              </div>
              <div className="footer-section">
                  <h3 className="font-title text-lg mb-3">Connect With Us</h3>
                  <ul>
                      <li className="hover:underline hover:underline-offset-2"><a href="#" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                      <li className="hover:underline hover:underline-offset-2"><a href="#" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                      <li className="hover:underline hover:underline-offset-2"><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  </ul>
              </div>
          </div>
    </footer>
  )
}

export default Footer;
