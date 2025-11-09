import { CheckCircle2 } from "lucide-react";

const About = () => {
  const features = [
    "15 Years of Trusted Experience",
    "Fast, Reliable Mobile Service — We Come to You",
    "Honest, Fair Pricing",
    "High-Quality Repairs for All Makes & Models",
    "Convenience, Consistency, and Professionalism",
    "Fully Licensed & Insured",
    "Open Every Day, Including Sundays!"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Welcome to Ted's Mobile Mechanic
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted Auto Repair in Waltham, MA — Wherever You Are
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12 mb-8">
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              For over <strong>15 years</strong>, Ted's Mobile Mechanic has proudly served the Waltham 
              community and surrounding areas with expert auto repairs, honest service, and dependable 
              care for all makes and models.
            </p>
            
            <p className="text-lg text-card-foreground mb-6 leading-relaxed">
              We know that car troubles can strike at the worst times — that's why we bring high-quality 
              auto repair <strong>directly to you</strong>. Whether you're at home, at work, or stranded 
              on the road, Ted's Mobile Mechanic offers the perfect blend of convenience, consistency, 
              and professionalism.
            </p>
            
            <p className="text-lg text-card-foreground leading-relaxed">
              Ted and his team combine years of hands-on expertise with genuine care for each customer. 
              You'll always get fair pricing, clear communication, and repairs done right the first time.
            </p>
          </div>
          
          <div className="bg-card rounded-lg shadow-lg p-8 md:p-12">
            <h3 className="text-2xl font-bold mb-6 text-card-foreground">
              Why Choose Ted's Mobile Mechanic?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
                  <span className="text-card-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
