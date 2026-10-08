import React from "react";

export default function AuthenticLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#F4F8FC] flex items-center justify-center p-4">
      {children}
    </div>
  );
}