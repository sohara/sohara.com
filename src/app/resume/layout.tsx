export default function MdxLayout({ children }: { children: React.ReactNode }) {
  // Create any shared layout or styles here
  return <div className="resume max-w-2xl mx-auto">{children}</div>;
}
