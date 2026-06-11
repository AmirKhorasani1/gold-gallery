"use client";

import React, { useState } from "react";
import Login from "@/components/templates/login-register/Login";
import Register from "@/components/templates/login-register/Register";

type ActiveTab = "login" | "register";

const LoginRegisterPage = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>("login");

  return (
    <div dir="rtl" className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-[400px] bg-white rounded-3xl overflow-hidden">

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          <button
            onClick={() => setActiveTab("login")}
            className={`flex-1 py-4 text-sm font-medium transition relative ${
              activeTab === "login" ? "text-[#10494b]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            ورود
            {activeTab === "login" && (
              <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#10494b] rounded-t" />
            )}
          </button>
          
          <button
            onClick={() => setActiveTab("register")}
            className={`flex-1 py-4 text-sm font-medium transition relative ${
              activeTab === "register" ? "text-[#10494b]" : "text-gray-400 hover:text-gray-600"
            }`}
          >
            ثبت نام
            {activeTab === "register" && (
              <span className="absolute bottom-0 right-0 left-0 h-0.5 bg-[#10494b] rounded-t" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-7">
          {activeTab === "login" ? (
            <Login onSwitchToRegister={() => setActiveTab("register")} />
          ) : (
            <Register onSwitchToLogin={() => setActiveTab("login")} />
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterPage;