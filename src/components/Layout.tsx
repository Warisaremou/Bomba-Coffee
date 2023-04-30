import Footer from "./Footer";
import NavBar from "./NavBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container">
      {/* NavBar */}
      <NavBar />
      {/* Layout Children */}
      <main className="my-16 overlow-x-hidden">{children}</main>
      {/* Footer */}
      <Footer />
    </div>
  );
}
