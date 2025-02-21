import { Gallery } from "@/components/gallery"
import { ImageCarousel } from "@/components/image-carousel"

const images = [
  {
    src: "/assets/gallery/gallery (1).jpg?height=600&width=1200",
    alt: "Resort Exterior",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (2).jpg?height=600&width=1200",
    alt: "Luxury Suite",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (3).jpg?height=600&width=1200",
    alt: "Nature Trail",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (4).jpg?height=600&width=1200",
    alt: "Dining Area",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (5).jpg?height=600&width=1200",
    alt: "Sunset View",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (6).jpg?height=600&width=1200",
    alt: "Wellness Center",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (7).jpg?height=600&width=1200",
    alt: "Garden",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (8).jpg?height=600&width=1200",
    alt: "Solar Panels",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (9).jpg?height=600&width=1200",
    alt: "Yoga Deck",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (10).jpg?height=600&width=1200",
    alt: "Pool View",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (11).jpg?height=600&width=1200",
    alt: "Lounge Area",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (12).jpg?height=600&width=1200",
    alt: "Terrace",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (13).jpg?height=600&width=1200",
    alt: "Conference Room",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (14).jpg?height=600&width=1200",
    alt: "Fitness Center",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (15).jpg?height=600&width=1200",
    alt: "Bar",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (16).jpg?height=600&width=1200",
    alt: "Garden Path",
    caption: "",
  },
  {
    src: "/assets/gallery/gallery (17).jpg?height=600&width=1200",
    alt: "Reception",
    caption: "",
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

