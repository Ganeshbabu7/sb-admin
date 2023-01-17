import React from 'react'
export const dashboardContext = React.createContext();

function DashboardContextComponent({children}) {
    let data = {
        earningMonthly : "40,000",
        earningAnnual  : "215,000",
        tasks          : "75",
        pendingRequest : "18"
      }
  return <>
    <dashboardContext.Provider value={data}>
      {children}
    </dashboardContext.Provider>
  </>
}

export default DashboardContextComponent
