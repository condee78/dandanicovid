import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const About = React.lazy(() => import("./views/About/About"));
const FullProvince = React.lazy(() => import("./views/Subpages/FullProvince"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/about", name: "Tentang Kami", component: About },
  {
    path: "/fullprovince",
    name: "Provinsi Indonesia",
    component: FullProvince,
  },
];

export default routes;
