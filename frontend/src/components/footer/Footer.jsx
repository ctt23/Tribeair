import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItemHeader">Help & Support</li>
          <li className="fListItem">FAQs</li>
          <li className="fListItem">Contact Us</li>
          <li className="fListItem">How it works</li>
          <li className="fListItem">Cancellation and Refund</li>          
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">Discover</li>
          <li className="fListItem">Subscribe and save</li>
          <li className="fListItem">Travel Stories</li>
          <li className="fListItem">Guided treks </li>
          <li className="fListItem">Local Experiences</li>
          <li className="fListItem">Seasonal deals</li>
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">T&C</li>
          <li className="fListItem">Manage cookie settings </li>
          <li className="fListItem">Privacy & cookies</li>
          <li className="fListItem">Terms and coditions</li>
          <li className="fListItem">Seller Policies</li>
          <li className="fListItem">Buyers Protections</li>
          <li className="fListItem">Community Guidelines </li>
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">Hosting</li>
          <li className="fListItem">Tribeair your adventure</li>
          <li className="fListItem">Tribeair responsibly</li>
          <li className="fListItem">Join a hosting class</li>
          <li className="fListItem">Travel Agents</li>
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">About</li>
          <li className="fListItem">About Tribeair</li>
          <li className="fListItem">Tribeair Foundation</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Careers</li>          
          <li className="fListItem">Press center</li>
          <li className="fListItem">Investor relations</li>
        </ul>
      </div>
      <div className="fText">Copyright © 2024 Tribeair, Inc.</div>
    </div>
  );
};

export default Footer;