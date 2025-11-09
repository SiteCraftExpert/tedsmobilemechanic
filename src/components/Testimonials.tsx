import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
const Testimonials = () => {
  const reviews = [{
    name: "Meilin Garfinkel",
    date: "2 weeks ago",
    rating: 5,
    title: "Reasonable price",
    text: "My vehicle had a check engine light and also made a terrible creaking noise. Ted checked it out and reported the diagnosis to me, explaining everything and showing me where the issues were and why they were happening. He did a great job and got me back on the road in no time, with the issues resolved. Ted is clearly well experienced and I will definitely return if I need more work in the future.",
    services: "General repairs & maintenance, Auto engine diagnostic"
  }, {
    name: "Shane Kammerman",
    date: "a month ago",
    rating: 5,
    title: "Great price",
    text: "Ted is the best! My car battery died on a Sunday and it turned out the positive terminal corroded away so I couldn't get a jump. Ted was open on a Sunday and answered the phone right away. Got the car towed to his shop and he assessed the damage, sent someone to get a very specific part for my car right away, and had a brand new battery and terminal installed within an hour. It was truly a godsend, and such a reasonable price. He will be my go-to mechanic from now on.",
    services: "Auto battery replacement, General repairs & maintenance, Battery"
  }, {
    name: "Walter Fedun",
    date: "5 months ago",
    rating: 5,
    title: "",
    text: "I had a blown out tire on my trailer and needed help replacing with the spare I already had. Ted's Mobile Mechanic came to the rescue as fast as possible, and on a Sunday morning. Highly recommended, GREAT service.",
    services: ""
  }];
  return <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => <Star key={i} className="h-8 w-8 fill-secondary text-secondary" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Reviews from Our Happy Customers</h2>
          <p className="text-xl text-muted-foreground">
            Don't just take our word for it — see what our customers say
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />)}
                </div>
                
                {review.title && <h3 className="text-lg font-semibold mb-2 text-card-foreground">
                    {review.title}
                  </h3>}
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {review.text}
                </p>
                
                {review.services && <p className="text-sm text-muted-foreground mb-4 italic">
                    Services: {review.services}
                  </p>}
                
                <div className="border-t border-border pt-4 mt-4">
                  <p className="font-semibold text-card-foreground">{review.name}</p>
                  <p className="text-sm text-muted-foreground">{review.date}</p>
                </div>
              </CardContent>
            </Card>)}
        </div>
      </div>
    </section>;
};
export default Testimonials;