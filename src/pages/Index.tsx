import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import ServiceCard from "@/components/ui/ServiceCard";
import FeatureItem from "@/components/ui/FeatureItem";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Calculator,
  Monitor,
  TrendingUp,
  Shield,
  Cloud,
  BarChart3,
  CheckCircle2,
  Zap,
  Users,
  ArrowRight,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background via-muted/30 to-background">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-tight mb-6">
                Integrated Accounting & IT Solutions for{" "}
                <span className="text-primary">Smarter Business</span> Management
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                We help businesses manage finances efficiently by combining accounting
                expertise with modern, secure, and automated technology.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="coral" size="xl" asChild>
                  <Link to="/contact">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="navy-outline" size="xl" asChild>
                  <Link to="/accounting-services">Explore Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-fade-up stagger-2">
              <div className="relative z-10">
                <div className="bg-card rounded-2xl shadow-prominent p-8 border border-border/50">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="space-y-2 p-4 bg-primary/5 rounded-xl">
                      <Calculator className="w-10 h-10 text-primary" />
                      <p className="font-semibold text-navy">Accounting</p>
                      <p className="text-sm text-muted-foreground">Expert financial management</p>
                    </div>
                    <div className="space-y-2 p-4 bg-secondary/10 rounded-xl">
                      <Monitor className="w-10 h-10 text-secondary" />
                      <p className="font-semibold text-navy">Technology</p>
                      <p className="text-sm text-muted-foreground">Modern IT solutions</p>
                    </div>
                    <div className="space-y-2 p-4 bg-coral/10 rounded-xl">
                      <Shield className="w-10 h-10 text-coral" />
                      <p className="font-semibold text-navy">Security</p>
                      <p className="text-sm text-muted-foreground">Protected data systems</p>
                    </div>
                    <div className="space-y-2 p-4 bg-navy/5 rounded-xl">
                      <TrendingUp className="w-10 h-10 text-navy" />
                      <p className="font-semibold text-navy">Growth</p>
                      <p className="text-sm text-muted-foreground">Scalable solutions</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Background decorations */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
              <div className="absolute -bottom-4 -left-4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Accounting Meets Technology
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Modern businesses require more than traditional accounting. By integrating
              accounting services with IT-driven automation and analytics, we deliver
              accurate financial management, real-time insights, and scalable solutions
              that grow with your business.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            title="Our Services"
            subtitle="Comprehensive solutions tailored to your business needs"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/accounting-services" className="animate-fade-up stagger-1">
              <ServiceCard
                icon={Calculator}
                title="Accounting Services"
                description="Bookkeeping, compliance, payroll, audits, and financial advisory services to keep your finances in order."
              />
            </Link>
            <Link to="/it-services" className="animate-fade-up stagger-2">
              <ServiceCard
                icon={Monitor}
                title="IT Services for Accounting"
                description="Software implementation, automation, cloud solutions, and data security tailored for financial operations."
              />
            </Link>
            <Link to="/contact" className="animate-fade-up stagger-3 md:col-span-2 lg:col-span-1">
              <ServiceCard
                icon={BarChart3}
                title="Advisory & Analytics"
                description="Financial analysis, forecasting, and data-driven decision support to help you plan for the future."
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-navy text-primary-foreground">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Why Choose Office Works?
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              We combine deep financial expertise with cutting-edge technology to deliver
              exceptional results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle2,
                title: "Compliance-Focused",
                desc: "Accounting practices that meet all regulatory requirements",
              },
              {
                icon: Shield,
                title: "Secure Systems",
                desc: "Reliable and protected financial data management",
              },
              {
                icon: Zap,
                title: "Automation",
                desc: "Reduce manual workload with smart automation",
              },
              {
                icon: Cloud,
                title: "Cloud-Enabled",
                desc: "Access and collaborate from anywhere, anytime",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Insights",
                desc: "Make informed decisions with advanced reporting",
              },
              {
                icon: Users,
                title: "Scalable Solutions",
                desc: "Grow with confidence using flexible systems",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-primary-foreground/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Ready to Simplify Your Financial Operations?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let's discuss how we can help streamline your accounting processes
              with modern technology solutions.
            </p>
            <Button variant="coral" size="xl" asChild>
              <Link to="/contact">
                Contact Us Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
