import { Navbar } from "@/components/common/Navbar";
import { Breadcrumbs } from "@/components/common/ui/Breadcrumbs";
import { Button, Space, containerVariants } from "@/components/common/ui";
import { cn } from "@/lib/styles";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Navbar className={cn(containerVariants())}>
        <Navbar.Logo src="/sobat-bangun.svg" alt="Sobat Bangun Logo" />
        <Space>
          <Button variant="ghost">Daftar</Button>
          <Button>Masuk</Button>
        </Space>
      </Navbar>
      <Breadcrumbs className={cn("my-5", containerVariants())}>
        <Breadcrumbs.Item href="/">Home</Breadcrumbs.Item>
        <Breadcrumbs.Item href="/designs">Layanan Desain</Breadcrumbs.Item>
        <Breadcrumbs.Item href="#">Omah Apik 3</Breadcrumbs.Item>
      </Breadcrumbs>
      <main>{children}</main>
    </>
  );
};

export { DefaultLayout };
