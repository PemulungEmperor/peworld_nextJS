import { createContext, useEffect, useState } from "react";
import axios from "axios";

const [userInfo, setUserinfo] = useState(null);

return (
  <AuthContext.Provider
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    value={{}}
  >
    {children}
  </AuthContext.Provider>
);
