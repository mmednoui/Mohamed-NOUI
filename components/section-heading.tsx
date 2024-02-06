import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-5xl font-semibold capitalize mb-14 text-center text-gray-900">
      {children}
    </h2>
  );
}
