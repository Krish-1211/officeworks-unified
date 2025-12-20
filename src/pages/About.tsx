import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";
import {
  Target,
  Users,
  Award,
  Handshake,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-secondary/5 section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-up">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              About Office Works
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A trusted partner for businesses seeking integrated accounting and
              technology solutions that drive efficiency, ensure compliance, and
              enable sustainable growth.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Office Works is a professional services firm that bridges the gap
                between traditional accounting expertise and modern technology
                solutions. Founded by a team of certified accountants and IT
                specialists, we understand the unique challenges businesses face
                in managing their financial operations.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is simple: to help businesses of all sizes achieve
                financial clarity and operational efficiency through integrated
                solutions that combine accounting precision with technological
                innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience serving clients across various industries,
                we've developed a deep understanding of what it takes to maintain
                accurate financial records while leveraging technology to stay ahead
                in today's competitive landscape.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 animate-slide-in-right">
              {[
                { icon: Target, label: "Mission-Driven", value: "Client Success" },
                { icon: Users, label: "Experienced Team", value: "Industry Experts" },
                { icon: Award, label: "Quality Focused", value: "Excellence" },
                { icon: Handshake, label: "Partnership", value: "Long-term Relationships" },
              ].map((item, index) => (
                <div
                  key={item.label}
                  className="bg-card rounded-xl p-6 shadow-soft border border-border/50 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="font-semibold text-navy">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Expertise */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Our Expertise
            </h2>
            <p className="text-lg text-muted-foreground">
              We bring together deep knowledge in accounting principles and modern
              technology to deliver comprehensive solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-background rounded-2xl p-8 shadow-soft border border-border/50 animate-fade-up stagger-1">
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Accounting Excellence
              </h3>
              <ul className="space-y-3">
                {[
                  "Certified Public Accountants (CPAs) on staff",
                  "Deep expertise in regulatory compliance",
                  "Multi-industry financial experience",
                  "Strategic tax planning capabilities",
                  "Comprehensive auditing skills",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-background rounded-2xl p-8 shadow-soft border border-border/50 animate-fade-up stagger-2">
              <h3 className="text-2xl font-semibold text-navy mb-4">
                Technology Proficiency
              </h3>
              <ul className="space-y-3">
                {[
                  "Certified in major accounting platforms",
                  "Cloud infrastructure expertise",
                  "Data security and compliance specialists",
                  "Business system integration experience",
                  "Analytics and reporting capabilities",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
              Our Approach
            </h2>
            <p className="text-lg text-muted-foreground">
              We believe in building lasting partnerships based on trust,
              transparency, and tangible results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We begin by deeply understanding your business, challenges, and goals to develop tailored solutions.",
              },
              {
                step: "02",
                title: "Implement",
                desc: "Our team executes with precision, ensuring smooth transitions and minimal disruption to your operations.",
              },
              {
                step: "03",
                title: "Support",
                desc: "We provide ongoing support and optimization to ensure your solutions continue to deliver value.",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="text-center animate-fade-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
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
              Ready to Work Together?
            </h2>
            <p className="text-lg text-primary-foreground/70 mb-8">
              Let's discuss how Office Works can help transform your financial
              operations and drive your business forward.
            </p>
            <Button variant="coral" size="lg" asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
