export const metadata = {
  title: "Resume - Sean O'Hara",
};

export default function MdxLayout({ children }: { children: React.ReactNode }) {
  return <div className="resume max-w-2xl mx-auto">{children}</div>;
}
