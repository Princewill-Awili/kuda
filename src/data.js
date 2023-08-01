//flags
import ngn from "./assets/flags/ngn flag.png";
import gh from "./assets/flags/ghflag.png";
import uk from "./assets/flags/ukflag.png";
import ken from "./assets/flags/kenflag.png";
import rwa from "./assets/flags/rwandaflag.png";

//badges
import appleStoreBadge from './assets/applestore badge.png';
import playStoreBadge from './assets/googleplay badge.png';
import ndicBadge from './assets/ndic badge.jpg'
import cbnBadge from './assets/cbn badge.png'

//images
import kudaphone from './assets/kudaPhone.png'

//icons
import { AiFillHome as HomeIcon } from "react-icons/ai";
import { BsSendFill as TransferIcon } from "react-icons/bs";
import { AiFillPieChart as BudgetIcon } from "react-icons/ai";
import { FaPiggyBank as SaveIcon } from "react-icons/fa";
import { BsBarChartLineFill as InvestmentsIcon } from "react-icons/bs";
import { BsCreditCard2BackFill as KudacardIcon } from "react-icons/bs";

import { RiLightbulbFlashFill as ElecticityIcon } from "react-icons/ri";
import { BiMobile as AirtimeIcon } from "react-icons/bi";
import { BiWifi as InternetIcon } from "react-icons/bi";
import { BiSolidGift as GiftCardIcon } from "react-icons/bi";
import { GiSpades as BettingIcon } from "react-icons/gi";
import { FaMoneyCheckAlt as OverdraftIcon } from "react-icons/fa";

import {SiBookstack as RegistrationIcon} from 'react-icons/si'
import { GiSwipeCard as POSIcon } from "react-icons/gi";

export const flags = [ngn, gh, uk, ken, rwa];

// NavbarLink Items
export const personalItems = [
  { name: "Discover Personal", icon: <HomeIcon /> },
  { name: "Transfer & Spend", icon: <TransferIcon /> },
  { name: "Budget", icon: <BudgetIcon /> },
  { name: "Save", icon: <SaveIcon /> },
  { name: "Investments", icon: <InvestmentsIcon /> },
  { name: "Kuda Card", icon: <KudacardIcon /> },
  { name: "Electricity", icon: <ElecticityIcon /> },
  { name: "Airtime", icon: <AirtimeIcon/> },
  { name: "Internet", icon: <InternetIcon/> },
  { name: "Gift Cards", icon:<GiftCardIcon/> },
  { name: "Betting", icon:<BettingIcon/> },
  { name: "Overdrafts", icon:<OverdraftIcon/> },
];

//Business Items
export const businessItems = [
     {name:"Discover Business", icon:<HomeIcon/>},
     {name:"Business Registration", icon:<RegistrationIcon/>},
     {name:"Soft POS", icon:<POSIcon/>}
]

export const companyItems = [
     { name: "Blog" }, 
     { name: "Press" },
     {name:"Join Our Team"},
     {name:"About Us"}
]

export const helpItems = [
     { name: "Get Help" },
     { name: "Scam Awareness" },
     { name: "FAQs" }, 
     { name: "Security" },
     {name:"Contact Us"},
     {name:"Self Help"}
];

export const badges = [appleStoreBadge, playStoreBadge, ndicBadge, cbnBadge];

export const images = [kudaphone];
