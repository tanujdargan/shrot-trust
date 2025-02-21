import { Gallery } from "@/components/gallery"
import { ImageCarousel } from "@/components/image-carousel"

const images = [
  {
    src: "/assets/home-stay-photos/DINING_0206.jpg?height=600&width=1200",
    alt: "Resort Exterior",
    caption: "Swan Resort Main Building",
  },
  {
    src: "/assets/home-stay-photos/DINING_0207.jpg?height=600&width=1200",
    alt: "Luxury Suite",
    caption: "Deluxe Suite Interior",
  },
  {
    src: "/assets/home-stay-photos/DINING_0210.jpg?height=600&width=1200",
    alt: "Nature Trail",
    caption: "Scenic Walking Trail",
  },
  {
    src: "/assets/home-stay-photos/kitchen.jpg?height=600&width=1200",
    alt: "Dining Area",
    caption: "Farm-to-Table Restaurant",
  },
  {
    src: "/assets/home-stay-photos/bedroom-1.jpg?height=600&width=1200",
    alt: "Sunset View",
    caption: "Evening at Swan Resort",
  },
  {
    src: "/assets/home-stay-photos/gazebo3.jpg?height=600&width=1200",
    alt: "Wellness Center",
    caption: "Spa and Wellness Facilities",
  },
  {
    src: "/assets/home-stay-photos/bedroom3.jpg?height=600&width=1200",
    alt: "Garden",
    caption: "Organic Garden",
  },
  {
    src: "/assets/home-stay-photos/bedroom4.jpg?height=600&width=1200",
    alt: "Solar Panels",
    caption: "Sustainable Energy System",
  },
  {
    src: "/assets/home-stay-photos/gazebo.jpg?height=600&width=1200",
    alt: "Yoga Deck",
    caption: "Morning Yoga Session",
  },
]

export default function ExplorePage() {
  return (
    <div className="pt-header">
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Explore Swan Resort</h1>
          <p className="text-lg text-muted-foreground mb-12 text-center max-w-2xl mx-auto">
            Take a visual journey through our sustainable luxury resort and discover the perfect balance of comfort and
            nature.
          </p>
          <div className="mb-16">
            <ImageCarousel images={images} />
          </div>
          <Gallery images={images} />
        </div>
      </section>
    </div>
  )
}

