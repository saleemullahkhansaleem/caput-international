import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout.jsx";
import "@fontsource/poppins";
import {
  AboutUs,
  BrandingAndAdvertising,
  Construction,
  ContactUs,
  EdgeMallCeremony,
  EventManagement,
  FacilityManagement,
  Gallery,
  Home,
  MinesAndMinerals,
  NotFound,
  OilAndGas,
  PropertyAdvisors,
  VendorServices,
} from "./pages";
import { ServiceDetail } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutUs />,
      },
      {
        path: "edge-mall-ceremony",
        element: <EdgeMallCeremony />,
      },
      {
        path: "services/:serviceId",
        element: <ServiceDetail />,
        // children: [
        //   {
        //     path: "event-management",
        //     element: <EventManagement />,
        //   },
        //   {
        //     path: "vendor-services",
        //     element: <VendorServices />,
        //   },
        //   {
        //     path: "presence-in-oil-and-gas-sector",
        //     element: <OilAndGas />,
        //   },
        //   {
        //     path: "branding-and-advertising",
        //     element: <BrandingAndAdvertising />,
        //   },
        //   {
        //     path: "facility-management-services",
        //     element: <FacilityManagement />,
        //   },
        //   {
        //     path: "construction",
        //     element: <Construction />,
        //   },
        //   {
        //     path: "property-advisors",
        //     element: <PropertyAdvisors />,
        //   },
        //   {
        //     path: "mines-and-minerals",
        //     element: <MinesAndMinerals />,
        //   },
        // ],
      },
      {
        path: "gallery",
        element: <Gallery />,
      },
      {
        path: "contact",
        element: <ContactUs />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
