export default function PDPLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <p>PDP Layout</p>
      <div>{children}</div>
    </div>
  );
}
