"use client";
import React from "react";
import { useAuthListener } from "@/store/hooks/useAuthListener";
import NavbarDashboard from "../components/navbar/NavbarDashboard";

export default function DashboardPage() {
  useAuthListener();

  return (
    <div>
      <NavbarDashboard />

      <div className="mt-20">
        <h1>Hello World</h1>
      </div>
    </div>
  );
}
