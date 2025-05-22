import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./routes/home";
import { PublicLayout } from "./layouts/public-layout";
import AuthenticationLayout from "./layouts/auth-layout";
import { SignInPage } from "./routes/sign-in";
import { SignUpPage } from "./routes/sign-up";
import ProtectRoutes from "./layouts/protected-layout";
import { MainLayout } from "./layouts/main-layout";
import { Dashboard } from "./routes/dashboard";
import { CreateEditPage } from "./routes/create-edit-page";
import { Generate } from "./components/generate";
import { Feedback } from "./routes/feedback";
import { MockInterviewPage } from "./routes/mock-interview-page";
import { MockLoadPage } from "./routes/mock-load-page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<HomePage />} />
        </Route>

        {/* Authentication routes */}
        <Route element={<AuthenticationLayout />}>
          <Route path="/signin/*" element={<SignInPage />} />
          <Route path="/signup/*" element={<SignUpPage />} />
        </Route>

        {/* Protected routes */}
        <Route
          element={
            <ProtectRoutes>
              <MainLayout />
            </ProtectRoutes>
          }
        >
          {/* Add protected child routes here if needed */}
          {/* Example:
          <Route path="/dashboard" element={<Dashboard />} />
          */}
        <Route element={<Generate />} path="/generate">
            <Route index element={<Dashboard />} />
            <Route path=":interviewId" element={<CreateEditPage />} />
            <Route path="interview/:interviewId" element={<MockLoadPage />} />
            <Route
              path="interview/:interviewId/start"
              element={<MockInterviewPage />}
            />
            <Route path="feedback/:interviewId" element={<Feedback />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
