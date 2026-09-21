import ContactCta from '@/components/sections/contact/ContactCta';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import FeaturesMediaCarousel from '@/components/sections/features/FeaturesMediaCarousel';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import MetricsMediaCards from '@/components/sections/metrics/MetricsMediaCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboard
      title="Professional Cleaning Services in Sydney"
      description="Reliable. Detailed. Affordable. We provide professional cleaning services for homes, offices, warehouses and commercial properties across Sydney."
      primaryButton={{
        text: "Get a Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Call Us",
        href: "tel:0200000000",
      }}
      imageSrc="http://img.b2bpic.net/free-photo/back-view-woman-with-mop_23-2147758723.jpg"
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesMediaCarousel
      tag="Our Services"
      title="Premium Cleaning for Every Need"
      description="From residential homes to massive commercial warehouses, we handle it all with precision."
      items={[
        {
          title: "Residential Cleaning",
          description: "Regular house cleaning, kitchen & bathroom sanitation, and end-of-lease move-out services.",
          buttonIcon: "Home",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-cleaning-her-home_23-2148118476.jpg",
        },
        {
          title: "Office Cleaning",
          description: "Desk and surface cleaning, waste management, and professional kitchen break room sanitation.",
          buttonIcon: "Briefcase",
          imageSrc: "http://img.b2bpic.net/free-photo/designers-using-3d-printer_23-2151037155.jpg",
        },
        {
          title: "Commercial Cleaning",
          description: "Expert warehouse and industrial cleaning. We cover retail, factories, and shared industrial areas.",
          buttonIcon: "Factory",
          imageSrc: "http://img.b2bpic.net/free-photo/full-shot-man-hazmat-suit-cleaning_23-2149345581.jpg",
        },
        {
          title: "End of Lease Cleaning",
          description: "Guaranteed property inspection cleaning, windows, kitchen, and detailed deep floor care.",
          buttonIcon: "ClipboardCheck",
          imageSrc: "http://img.b2bpic.net/free-photo/man-servant-cleaning-house_23-2149530803.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="why-choose-us" data-section="why-choose-us">
    <SectionErrorBoundary name="why-choose-us">
          <FeaturesRevealCardsBento
      tag="Why Choose Us"
      title="We don't just clean. We manage the cleaning."
      description="Experience reliability and professionalism that allows you to focus on your day."
      items={[
        {
          title: "Reliable Team",
          description: "Background-checked and highly trained professional cleaners.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-young-man-glasses-freelancer-sitting-cafe-with-laptop-drinking-coffee-pointing-fingers_1258-314116.jpg",
        },
        {
          title: "Flexible Schedules",
          description: "Service times tailored to your busy personal or office life.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-businesswoman-sitting-workplace-showing-thumb-up-sign_23-2147943730.jpg",
        },
        {
          title: "Competitive Pricing",
          description: "Quality cleaning at market-leading affordable rates.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-cleaning-his-house_23-2148112148.jpg",
        },
        {
          title: "Quality Assured",
          description: "Rigorous oversight ensures the standard is always high.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-busy-clean_23-2148480363.jpg",
        },
        {
          title: "Full Equipment",
          description: "We bring our own eco-friendly, industry-grade supplies.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/positive-good-looking-young-asian-woman-with-cheerful-smile-face-spreads-palms-dressed-jacket-meets-friend-stands-indoor_273609-53614.jpg",
        },
        {
          title: "Easy Communication",
          description: "Fast response times for all your booking and scheduling needs.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/busy-day-young-woman-doing-housework-looking-busy_259150-59500.jpg",
        },
        {
          title: "Commercial & Residential",
          description: "Specialized teams for both domestic and corporate properties.",
          href: "#contact",
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-care-office-cleaning_23-2149374451.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="before-after" data-section="before-after">
    <SectionErrorBoundary name="before-after">
          <PricingMediaCards
      tag="Before & After"
      title="Evidence of Excellence"
      description="See the dramatic impact our professional cleaning services have on real spaces."
      plans={[
        {
          tag: "Kitchen",
          price: "Expert Clean",
          period: "Before & After",
          features: [
            "Degreasing",
            "Countertops",
            "Sink sanitation",
          ],
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/horizontal-rearview-maid-classic-uniform-cleaning-apartment-with-vacuum-cleaner-working-living-room-making-space-look-clean-tidy-woman-tries-her-best-meet-employer-demands_176420-14594.jpg",
        },
        {
          title: "Bathroom",
          price: "Spotless",
          period: "Before & After",
          features: [
            "Tiling scrub",
            "Mirror clarity",
            "Sanitation",
          ],
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/little-boy-with-glasses-cleans-house-with-vacuum-cleaner_169016-11279.jpg",
        },
        {
          title: "Office Break Room",
          price: "Refreshed",
          period: "Before & After",
          features: [
            "Appliance deep clean",
            "Floor care",
            "Stain removal",
          ],
          primaryButton: {
            text: "Book Now",
            href: "#contact",
          },
          imageSrc: "http://img.b2bpic.net/free-photo/people-taking-care-office-cleaning_23-2149374452.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="how-it-works" data-section="how-it-works">
    <SectionErrorBoundary name="how-it-works">
          <MetricsMediaCards
      tag="How It Works"
      title="Simple 3-Step Process"
      description="Getting your space cleaned shouldn't be a challenge. We make it easy."
      metrics={[
        {
          value: "01",
          title: "Request a Quote",
          description: "Tell us about your property and cleaning needs.",
          imageSrc: "http://img.b2bpic.net/free-photo/woman-doing-house-chores-with-vacuum_23-2148394963.jpg",
        },
        {
          value: "02",
          title: "Get Your Quote",
          description: "We provide a clear, competitive price tailored to you.",
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-cleaning-indoors_23-2150454501.jpg",
        },
        {
          value: "03",
          title: "We Clean",
          description: "Our professional cleaners handle all the hard work.",
          imageSrc: "http://img.b2bpic.net/free-photo/indoor-alone-corridor_1127-279.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Reviews"
      title="Trusted by Sydney Businesses"
      description="Hear what our clients have to say about our professional service."
      testimonials={[
        {
          name: "Sarah J.",
          role: "Office Manager",
          quote: "The team is consistently thorough and professional.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/middle-aged-hispanic-business-people_23-2151099210.jpg",
        },
        {
          name: "Michael D.",
          role: "Warehouse Owner",
          quote: "Great service for industrial needs. Very reliable.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-mature-businessman-with-cup-coffee-standing-outdoors_23-2147956323.jpg",
        },
        {
          name: "Emily R.",
          role: "Residential Client",
          quote: "My home has never looked this clean. Amazing work.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-woman-cleaning-home_23-2150453326.jpg",
        },
        {
          name: "David K.",
          role: "Retail Manager",
          quote: "Reliable cleaning week after week. Highly recommend.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/happy-auto-repairman-handshaking-with-customer-workshop_637285-8634.jpg",
        },
        {
          name: "Linda M.",
          role: "Property Manager",
          quote: "Their end-of-lease clean is the best in Sydney.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-handsome-middle-aged-business-leader_1262-4822.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqSplitMedia
      tag="FAQ"
      title="Common Questions"
      description="Find quick answers to your questions about our services."
      items={[
        {
          question: "What areas in Sydney do you cover?",
          answer: "We serve the entire Sydney metropolitan area.",
        },
        {
          question: "Are your supplies eco-friendly?",
          answer: "Yes, we use industry-leading eco-friendly and safe supplies.",
        },
        {
          question: "Can I request regular cleaning?",
          answer: "Absolutely, we offer weekly, bi-weekly, and monthly plans.",
        },
        {
          question: "Are you insured?",
          answer: "Yes, our team is fully insured and background-checked.",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/auto-repairman-his-manager-wearing-protective-face-masks-greeting-with-elbows-workshop_637285-7630.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Get your professional cleaning quote in minutes."
      primaryButton={{
        text: "Get a Free Quote",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Contact Us Now",
        href: "tel:0200000000",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
