import FooterSimple from '@/components/sections/footer/FooterSimple';
import NavbarFloating from '@/components/ui/NavbarFloating';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Services",
    "href": "services"
  },
  {
    "name": "Why Choose Us",
    "href": "why-choose-us"
  },
  {
    "name": "Before & After",
    "href": "before-after"
  },
  {
    "name": "How It Works",
    "href": "how-it-works"
  },
  {
    "name": "Hero",
    "href": "#hero"
  },
  {
    "name": "Before After",
    "href": "#before-after"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="stagger" siteBackground="gridDots" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloating
      logo="JWP Maintenance"
      ctaButton={{
        text: "Get Quote",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimple
      brand="JWP Maintenance"
      columns={[
        {
          title: "Services",
          items: [
            {
              label: "Residential",
              href: "#services",
            },
            {
              label: "Office",
              href: "#services",
            },
            {
              label: "Commercial",
              href: "#services",
            },
          ],
        },
        {
          title: "Company",
          items: [
            {
              label: "About",
              href: "#why-choose-us",
            },
            {
              label: "Careers",
              href: "#",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 JWP Maintenance. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
