import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  BookOpen,
  FileText,
  Receipt,
  Users,
  ClipboardCheck,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    title: "Bookkeeping & Transaction Recording",
    description:
      "Accurate and timely recording of all financial transactions, ensuring your books are always up-to-date and audit-ready. We maintain detailed records of accounts payable, receivable, and general ledger entries.",
  },
  {
    icon: FileText,
    title: "Financial Reporting & Statement Preparation",
    description:
      "Comprehensive financial statements including balance sheets, income statements, and cash flow statements. Our reports provide clear insights into your business's financial health and performance.",
  },
  {
    icon: Receipt,
    title: "Tax Planning & Regulatory Compliance",
    description:
      "Strategic tax planning to minimize liabilities while ensuring full compliance with all regulatory requirements, including GST, TDS, and Income Tax returns. We stay current with tax laws to maximize your deductions and credits.",
  },
  {
    icon: Users,
    title: "Payroll Management",
    description:
      "End-to-end payroll processing including salary calculations, tax withholdings, benefits administration, and compliance with labor regulations. Timely and accurate payments for your team.",
  },
  {
    icon: ClipboardCheck,
    title: "Auditing & Assurance",
    description:
      "Independent audit services to verify the accuracy of your financial statements and internal controls. Our assurance services build confidence with stakeholders and investors.",
  },
  {
    icon: TrendingUp,
    title: "Financial Analysis & Advisory",
    description:
      "In-depth financial analysis to support strategic decision-making. We provide actionable insights on profitability, cash flow optimization, and growth opportunities.",
  },
];

const AccountingServices = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-muted/30 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Accounting Services
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our team of experienced accountants provides comprehensive financial
              services designed to keep your business compliant, organized, and
              positioned for growth. From daily bookkeeping to strategic advisory,
              we handle your finances with precision and care.
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

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Accounting Solutions"
            subtitle="Comprehensive financial services tailored to your business needs"
          />

          <div className="space-y-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-elevated transition-all duration-300 animate-fade-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-navy mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
              Need Professional Accounting Support?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Let our expert team handle your financial operations so you can focus
              on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="coral" size="lg" asChild>
                <Link to="/contact">Schedule a Consultation</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <Link to="/it-services">Explore IT Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AccountingServices;
