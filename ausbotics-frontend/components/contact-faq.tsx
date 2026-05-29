"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Link from "next/link";

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How quickly will I get a response?",
      answer:
        "We aim to respond to all inquiries within 4 hours during business hours. For urgent matters, please call our phone support line for immediate assistance. WhatsApp messages are typically answered within 30 minutes during business hours.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include your company name, current customer service challenges, expected call volume, and any specific requirements. The more details you provide, the better we can tailor our response to your needs.",
    },
    {
      question: "Can I schedule a call outside business hours?",
      answer:
        "Yes! While our standard business hours are Monday-Friday 9 AM - 8 PM EST, we offer flexible scheduling for consultations.",
    },
    {
      question: "Do you offer technical support for existing customers?",
      answer:
        "Existing customers have access to priority technical support through all our contact methods. Premium plan customers also have access to dedicated phone support and a personal account manager.",
    },
    {
      question: "What if I need a custom integration or solution?",
      answer:
        "We specialize in custom solutions! Please contact our team or schedule a consultation call. We'll discuss your specific requirements and provide a tailored proposal.",
    },
    {
      question: "Is there a cost for consultations?",
      answer:
        "Consultations and demos are completely free. We only charge for implementation and ongoing service. There are no hidden fees or charges for speaking with our team about your needs.",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Quick answers to common questions about contacting us and our
            support process.
          </p>
        </div>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                className="w-full px-4 py-2 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-muted-foreground transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
      <StillHaveQuestions />
    </section>
  );
}

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function StillHaveQuestions() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const maxOpacity = mounted && resolvedTheme === "dark" ? 0.3 : 0.5;

  return (
    <Card className="relative overflow-hidden p-8 min-h-[500px] flex items-center justify-center text-center border border-border/50 shadow-lg">
      {/* FlickeringGrid as background */}
      <FlickeringGrid
        className="absolute inset-0 z-0 size-full"
        squareSize={4}
        gridGap={6}
        color="#6B7280"
        maxOpacity={maxOpacity}
        flickerChance={0.1}
      />

      {/* Subtle radial fade overlay so content stays readable */}
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_30%,hsl(var(--background))_100%)]" />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center gap-2">
        <h3 className="text-3xl font-bold text-foreground mb-3 drop-shadow-sm">
          Still Have Questions?
        </h3>
        <p className="text-muted-foreground max-w-md mb-8 leading-relaxed drop-shadow-sm">
          Can't find what you're looking for? Our team is here to help with any
          questions about AI calling agents.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button className=" transition-all duration-200" asChild>
            <Link href="mailto:ausbotics3@gmail.com">Email Us Directly</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
}
