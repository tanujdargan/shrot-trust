import { Gallery } from "@/components/gallery"

const images = [
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Resort Exterior",
    caption: "Swan Resort Main Building",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Luxury Suite",
    caption: "Deluxe Suite Interior",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Nature Trail",
    caption: "Scenic Walking Trail",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Dining Area",
    caption: "Farm-to-Table Restaurant",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Sunset View",
    caption: "Evening at Swan Resort",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Wellness Center",
    caption: "Spa and Wellness Facilities",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Garden",
    caption: "Organic Garden",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
    alt: "Solar Panels",
    caption: "Sustainable Energy System",
  },
  {
    src: "/placeholder.svg?height=600&width=800",
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
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            Take a visual journey through our sustainable luxury resort and discover the perfect balance of comfort and
            nature.
          </p>
          <Gallery images={images} />
        </div>
      </section>
    </div>
  )
}

