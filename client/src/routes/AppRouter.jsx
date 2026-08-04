import { Routes, Route } from "react-router-dom";

import MainLayout from "@/layouts/MainLayout";

import { homeRoutes } from "@/features/HomePage/home.routes";
import { aboutRoutes } from "@/features/AboutPage/about.routes";
import { notFoundRoute } from "@/features/NotFoundPage/notfound.route";

export default function AppRouter() {

  const appRoutes = [
    ...homeRoutes,
    ...aboutRoutes,
    notFoundRoute
  ];

  return (
    <Routes>
      <Route element={<MainLayout />}>

        {appRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}

      </Route>
    </Routes>
  );
}