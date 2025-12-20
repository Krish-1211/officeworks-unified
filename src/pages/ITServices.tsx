import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Laptop,
  Database,
  Cog,
  Cloud,
  BarChart3,
  Link2,
  ArrowRight,
  Shield,
} from "lucide-react";

const services = [
  {
    icon: Laptop,
    title: "Accounting Software Implementation & Support",
    description:
      "Expert implementation and ongoing support for leading accounting platforms including QuickBooks, Xero, Zoho Books, and Tally. We ensure smooth transitions and optimal configuration for your business needs.",
  },
  {
    icon: Database,
    title: "Data Management & Cybersecurity",
    description:
      "Robust data management solutions with enterprise-grade security. We protect your financial data with encryption, access controls, backup systems, and compliance with data protection regulations.",
  },
  {
    icon: Cog,
    title: "Automation of Accounting Processes",
    description:
      "Streamline repetitive tasks with intelligent automation. From invoice processing to reconciliation, we implement automated workflows that reduce errors and free up your team for strategic work.",
  },
  {
    icon: Cloud,
    title: "Cloud-Based Accounting Solutions",
    description:
      "Migrate to the cloud for anywhere, anytime access to your financial data. Our cloud solutions offer scalability, automatic updates, and seamless collaboration across teams and locations.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Advanced Reporting",
    description:
      "Transform raw financial data into actionable insights. Our analytics solutions provide real-time dashboards, custom reports, and predictive modeling to support informed decision-making.",
  },
  {
    icon: Link2,
    title: "Business System Integration",
    description:
      "Connect your accounting software with CRM, ERP, inventory management, point-of-sale systems, and other business modules. We create unified workflows that eliminate data silos and improve operational efficiency.",
  },
];

const ITServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary/5 via-background to-muted/30 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              IT Services for Accounting
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Technology is transforming how businesses manage their finances. Our IT
              services are specifically designed to enhance accounting efficiency,
              strengthen data security, and enable scalable growth through modern
              solutions.
            </p>
            <Button variant="coral" size="lg" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Security First",
                desc: "Enterprise-grade protection for your financial data",
              },
              {
                icon: Cog,
                title: "Maximum Efficiency",
                desc: "Automated workflows that save time and reduce errors",
              },
              {
                icon: Cloud,
                title: "Infinite Scalability",
                desc: "Solutions that grow seamlessly with your business",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center p-8 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our IT Solutions"
            subtitle="Technology-driven services to modernize your financial operations"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-secondary/10 via-background to-primary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ready to Modernize Your Financial Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how our IT solutions can transform your accounting
              processes and drive efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button variant="navy-outline" size="lg" asChild>
                <Link to="/accounting-services">Explore Accounting Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ITServices;
