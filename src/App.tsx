import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { TooltipProvider } from "@/components/ui/tooltip"
import { DashboardPage } from "@/app/dashboard/page"

export function App() {
  return (
    <BrowserRouter>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/Dashboard" replace />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  )
}

export default App
