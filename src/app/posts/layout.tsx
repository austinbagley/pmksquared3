export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return (
  <>
    <div className="md:max-w-6xl mx-auto md:p-8 p-4">
      {children}
    </div>
  </>
  );
};