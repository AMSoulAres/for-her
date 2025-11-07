import moment from "moment";
import { useEffect, useState } from "react";
import AfterAnniversary from "./pages/AfterAnniversary";
import BeforeAnniversary from "./pages/BeforeAnniversary";

const ANNIVERSARY_DATE_ISO = "2025-02-28T08:00:00";

const App = () => {
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

  return hasOneYearPassed ? <AfterAnniversary /> : <BeforeAnniversary />;
};

export default App;
