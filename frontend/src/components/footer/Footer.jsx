import "./footer.css";
import { FooterData } from "./FooterData";

const Footer = () => {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItemHeader">Help & Support</li>
          {FooterData.helpAndSupport.map((item) => (
            <li key={item.title} className="fListItem">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">Discover</li>
          {FooterData.discover.map((item) => (
            <li key={item.title} className="fListItem">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">T&C</li>
          {FooterData.termsAndConditions.map((item) => (
            <li key={item.title} className="fListItem">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">Hosting</li>
          {FooterData.hosting.map((item) => (
            <li key={item.title} className="fListItem">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <ul className="fList">
          <li className="fListItemHeader">About</li>
          {FooterData.about.map((item) => (
            <li key={item.title} className="fListItem">
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="fText">Copyright &copy; 2024 Tribeair, Inc.</div>
    </div>
  );
};

export default Footer;
