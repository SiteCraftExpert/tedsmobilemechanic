import { Card, CardContent } from "@/components/ui/card";
import { Wrench, Activity, Battery, Disc, Gauge, Zap, CircleDot, Phone } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Wrench,
      title: "General Auto Repairs & Maintenance",
      description: "Comprehensive maintenance and repairs for all vehicle types"
    },
    {
      icon: Activity,
      title: "Engine Diagnostics & Troubleshooting",
      description: "Advanced diagnostic equipment to identify and fix issues"
    },
    {
      icon: Battery,
      title: "Battery Testing & Replacement",
      description: "Quick battery testing, replacement, and installation services"
    },
    {
      icon: Disc,
      title: "Brake Repair & Suspension",
      description: "Expert brake and suspension service for safe driving"
    },
    {
      icon: Gauge,
      title: "Tire Replacement & Flat Repair",
      description: "Fast tire repairs and replacements to keep you moving"
    },
    {
      icon: Zap,
      title: "Electrical & Mechanical Repairs",
      description: "Professional electrical and mechanical system repairs"
    },
    {
      icon: CircleDot,
      title: "Check Engine Light Diagnostics",
      description: "Thorough diagnostics to identify and resolve engine issues"
    },
    {
      icon: Phone,
      title: "Emergency Roadside Assistance",
      description: "24/7 support when you need help on the road"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We service all makes and models with precision and care
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="border-border hover:border-primary transition-all duration-300 hover:shadow-lg group"
              >
                <CardContent className="pt-6">
                  <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            <strong className="text-foreground">Open 7 days a week</strong> — because car problems don't wait for business hours!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
