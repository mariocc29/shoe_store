import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "@/pages";
import './Main.styles.scss'

export const Main = () => {
  return (
    <>
      <section className="wrapper">
        <header>Este es el header</header>
        <main>
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </main>
      </section>
    </>
  )
}
