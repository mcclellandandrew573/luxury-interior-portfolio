import { createBrowserRouter } from "react-router";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ResumePage from "./pages/ResumePage";
import WorkPage from "./pages/WorkPage";
import CaseStudyPage from "./pages/CaseStudyPage";
import JournalPage from "./pages/JournalPage";
import ContactPage from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/home",
    Component: HomePage,
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/resume",
    Component: ResumePage,
  },
  {
    path: "/work",
    Component: WorkPage,
  },
  {
    path: "/work/Clover",
    Component: CaseStudyPage,
  },
  {
    path: "/work/Revelstoke",
    Component: CaseStudyPage,
  },
  {
    path: "/work/CollinsCreek",
    Component: CaseStudyPage,
  },
  {
    path: "/work/Capella",
    Component: CaseStudyPage,
  },
  {
    path: "/work/WestHaven",
    Component: CaseStudyPage,
  },
  {
    path: "/work/AftertheApplause",
    Component: CaseStudyPage,
  },
  {
    path: "/work/Serpent&Silk",
    Component: CaseStudyPage,
  },
  {
    path: "/work/TheEyrieHotel",
    Component: CaseStudyPage,
  },
  {
    path: "/journal",
    Component: JournalPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
