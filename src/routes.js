import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard"));
const About = React.lazy(() => import("./views/About/About"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  { path: "/about", name: "Tentang Kami", component: About },
];

export default routes;
