export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="p-24 border flex justify-center">{children}</div>;
}
