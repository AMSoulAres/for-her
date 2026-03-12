import moment from "moment";
import { useEffect, useState } from "react";
import AfterAnniversary from "./pages/AfterAnniversary";
import BeforeAnniversary from "./pages/BeforeAnniversary";

const ANNIVERSARY_DATE_ISO = "2025-02-28T00:00:00";

const App = () => {
  const [manualOverride, setManualOverride] = useState(null);
  const [hasOneYearPassed, setHasOneYearPassed] = useState(() =>
    moment().isSameOrAfter(moment(ANNIVERSARY_DATE_ISO).add(1, "year"))
  );

  useEffect(() => {
    const check = () => {
      setHasOneYearPassed(moment().isSameOrAfter(moment(ANNIVERSARY_DATE_ISO).add(1, "year")));
    };

    check();
    const timer = setInterval(check, 1000);
    return () => clearInterval(timer);
  }, []);

  const shouldShowAfter = manualOverride !== null ? manualOverride : hasOneYearPassed;
  
  const togglePage = () => {
    setManualOverride(prev => prev === null ? !hasOneYearPassed : !prev);
  };

  return shouldShowAfter ? 
    <AfterAnniversary onToggle={togglePage} /> : 
    <BeforeAnniversary onToggle={togglePage} />;
};

export default App;
