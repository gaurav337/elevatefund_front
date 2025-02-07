import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import EntrepreneurDashboard from "./pages/EntrepreneurDashboard";
import InvestorHub from "./pages/InvestorHub";
import HowItWorks from "./pages/HowItWorks";
import { BrowseProjects } from "./pages/projects/BrowseProjects";
import ProjectDetail from "./pages/projects/ProjectDetail";
import SuccessStories from "./pages/SuccessStories";
import SuccessStoryDetail from "./pages/SuccessStoryDetail";
import Security from "./pages/Security";
import Support from "./pages/Support";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Press from "./pages/Press";
import Blog from "./pages/Blog";
import Guides from "./pages/Guides";
import FAQ from "./pages/FAQ";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Compliance from "./pages/Compliance";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import Navbar from "./components/Navbar";

// Protected Route Component
const ProtectedRoute: React.FC<{
  element: React.ReactElement;
  allowedUserType?: 'entrepreneur' | 'investor'
}> = ({ element, allowedUserType }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
    </div>;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (allowedUserType && user.userType !== allowedUserType) {
    return <Navigate to={user.userType === 'entrepreneur' ? '/entrepreneur-dashboard' : '/investor-hub'} />;
  }

  return element;
};

// App Router Component
const AppRouter = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/browse-projects" element={<BrowseProjects />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/success-stories" element={<SuccessStories />} />
        <Route path="/success-stories/:id" element={<SuccessStoryDetail />} />
        <Route path="/security" element={<Security />} />
        <Route path="/support" element={<Support />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/press" element={<Press />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/guides" element={<Guides />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/compliance" element={<Compliance />} />

        {/* Protected Routes */}
        <Route
          path="/entrepreneur-dashboard"
          element={
            <ProtectedRoute
              element={<EntrepreneurDashboard />}
              allowedUserType="entrepreneur"
            />
          }
        />
        <Route
          path="/investor-hub"
          element={
            <ProtectedRoute
              element={<InvestorHub />}
              allowedUserType="investor"
            />
          }
        />

        {/* Catch-all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};

// App Component
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </BrowserRouter>
  );
};

// Separate component for content that needs auth context
const AppContent: React.FC = () => {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ScrollToTop />
      <AppRouter />
    </>
  );
};

export default App;
