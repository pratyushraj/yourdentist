import { Routes, Route } from "react-router-dom";
import { SessionContextProvider } from "@/contexts/SessionContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { lazy } from "react";
import { LazyRoute } from "./routes/routeElements";

const DentistWebsite = lazy(() => import("@/pages/DentistWebsite"));
const DentalTrendFinder = lazy(() => import("@/pages/DentalTrendFinder"));
const ContentWorkspace = lazy(() => import("@/pages/ContentWorkspace"));

export default function AppRoutes() {
  return (
    <SessionContextProvider>
      <SidebarProvider>
        <Routes>
          {/* Main Public Clinic Website */}
          <Route path="/" element={<LazyRoute><DentistWebsite /></LazyRoute>} />
          
          {/* Dental Trend Finder & Content Workspace */}
          <Route path="/dental-trends" element={<LazyRoute><DentalTrendFinder /></LazyRoute>} />
          <Route path="/dentist-proposal" element={<LazyRoute><ContentWorkspace /></LazyRoute>} />
        </Routes>
      </SidebarProvider>
    </SessionContextProvider>
  );
}
