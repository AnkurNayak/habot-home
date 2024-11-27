import HabotFooter from "components/HabotFooter/HabotFooter";
import HabotHeader from "components/HabotHeader/HabotHeader";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "routes/AppRoutes";

export default function App() {
  return (
    <Router>
      <div className="light">
        <div className="flex w-full min-w-0 flex-auto flex-col">
          <HabotHeader />
          <AppRoutes />
          <HabotFooter />
        </div>
      </div>
    </Router>
  );
}
