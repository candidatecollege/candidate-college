"use client";
import { CTA, Navbar, Footer } from "@/components";

const notFound = () => {
  return (
    <main className="bg-primary h-full">
      {/* Navbar */}
      <Navbar active="" isDetail={false} />

      {/* CTA */}
      <CTA />

      {/* Footer */}
      <div className="w-full bg-primary">
        <Footer />
      </div>
    </main>
  );
};

export default notFound;
