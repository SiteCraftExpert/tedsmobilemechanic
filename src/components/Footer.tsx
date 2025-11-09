import { Phone, Mail, MapPin, Facebook } from "lucide-react";
const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ted's Mobile Mechanic</h3>
            <p className="text-primary-foreground/80 mb-4">
              15 Years of Trusted Experience, Quality Repairs, and Honest Service — Wherever You Are!
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Contact</h4>
            <div className="space-y-3">
              <a href="tel:7818855678" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                (781) 885-5678
              </a>
              <a href="mailto:tedsmobilemechanicshop@gmail.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors break-all">
                <Mail className="h-4 w-4" />
                tedsmobilemechanicshop@gmail.com
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Location</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <p>Shop: 71 Felton St</p>
                  <p>Waltham, MA 02453</p>
                </div>
              </div>
              <a href="https://www.facebook.com/TedsMobileMechanic" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <Facebook className="h-4 w-4" />
                Follow us on Facebook
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            &copy; {new Date().getFullYear()} Ted's Mobile Mechanic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;