import { Footer } from "@/components/footer/Footer";

export default function AuthLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { language: string };
}>) {
  return (
    <main className="flex flex-col items-center justify-center bg-gray-200">
      {children}
      <Footer language={params.language} />
    </main>
  );
}
