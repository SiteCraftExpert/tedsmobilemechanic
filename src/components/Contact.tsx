import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Contact Ted Today
          </h2>
          <p className="text-xl text-muted-foreground">
            Need a trusted mechanic who comes to you?
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="border-border">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground mb-1">Call or Text</p>
                    <a href="tel:7818855678" className="text-primary hover:underline text-lg">
                      (781) 885-5678
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground mb-1">Email</p>
                    <a href="mailto:tedsmobilemechanicshop@gmail.com" className="text-primary hover:underline break-all">
                      tedsmobilemechanicshop@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground mb-1">Shop Location</p>
                    <p className="text-muted-foreground">71 Felton St</p>
                    <p className="text-muted-foreground">Waltham, MA 02453</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Facebook className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-card-foreground mb-1">Follow Us</p>
                    <a href="https://www.facebook.com/TedsMobileMechanic" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                      Ted's Mobile Mechanic on Facebook
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button size="lg" className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground" asChild>
                  <a href="tel:7818855678" className="flex items-center justify-center gap-2">
                    <Phone className="h-5 w-5" />
                    Call Now for Service
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-border">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-6 text-card-foreground">Areas We Serve</h3>
              
              <p className="text-muted-foreground mb-6">
                Proudly serving Waltham, MA and nearby communities including:
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                {["Waltham", "Newton", "Watertown", "Belmont", "Lexington", "Weston", "& Surrounding Areas"].map((area, index) => <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-card-foreground">{area}</span>
                  </div>)}
              </div>
              
              <div className="bg-muted/50 rounded-lg p-6">
                <h4 className="font-semibold text-card-foreground mb-4 text-center">
                  Business Hours
                </h4>
                <div className="text-center">
                  <p className="text-2xl font-bold text-primary mb-2">
                    Open 7 Days a Week
                  </p>
                  <p className="text-muted-foreground">
                    Including Sundays & Holidays
                  </p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Call for availability
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground italic">
            Primary Address: 71 Felton St, Waltham, MA 02453, United States
          </p>
        </div>
      </div>
    </section>;
};
export default Contact;