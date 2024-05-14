import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";

import { Dashboard } from "@/pages";
import { Header } from "@/shared";
import './Main.styles.scss'

export const Main = () => {
  return (
    <>
      <section className="wrapper">
        
        <Header />

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
