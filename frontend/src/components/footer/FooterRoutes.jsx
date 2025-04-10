import AboutTribeair from "./sections/About/AboutTribeair"; 
import TribeairFoundation from "./sections/About/TribeairFoundation"; // Correct the relative path
import Sustainability from "./sections/About/Sustainability"; 
import Careers from "./sections/About/Careers"; 
import PressCenter from "./sections/About/PressCenter";
import InvestorRelations from "./sections/About/InvesterRelations";






const FooterRoutes = [
  { path: "/about-tribeair", element: <AboutTribeair /> },
  { path: "/tribeair-foundation", element: <TribeairFoundation /> },
  { path: "/sustainability", element: <Sustainability /> },
  { path: "/careers", element: <Careers /> },
  { path: "/press-center", element: <PressCenter /> },
  { path: "/investor-relations", element: <InvestorRelations /> },
  // Add more routes here...
];

export default FooterRoutes;
