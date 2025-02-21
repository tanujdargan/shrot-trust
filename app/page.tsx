"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { PageWrapper, SlideUp } from "@/components/animations"
import { motion } from "framer-motion"

export default function Home() {
  return (
    <PageWrapper>
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image src="assets/background.jpg?height=1080&width=1920" alt="Swan Resort" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container px-4 sm:px-6 lg:px-8">
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Shrot Trust
            </motion.h1>
            <motion.p
              className="text-xl sm:text-2xl text-white mb-8 max-w-2xl mx-auto"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              एक पहल
            </motion.p>
            <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
              <Link href="/bookings">
                <Button size="lg" className="text-lg">
                  Book Your Stay
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl font-bold text-center mb-12">Experience Swan Resort</h2>
          </SlideUp>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Luxury Accommodation",
                description: "Experience comfort and elegance in our thoughtfully designed spaces",
                image: "/assets/home-stay-photos/gazebo.jpg",
              },
              {
                title: "Natural Surroundings",
                description: "Immerse yourself in the pristine beauty of our location",
                image: "/assets/home-stay-photos/gazebo3.jpg",
              },
              {
                title: "Sustainable Living",
                description: "Experience off-grid living without compromising on comfort",
                image: "/assets/background-coloured.jpg",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="rounded-lg overflow-hidden mb-4">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={400}
                    height={300}
                    className="w-full"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4 sm:px-6 lg:px-8">
          <SlideUp>
            <h2 className="text-3xl font-bold text-center mb-12">Our Location</h2>
          </SlideUp>
          <div className="aspect-video w-full max-w-4xl mx-auto rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3437.340400456117!2d77.88480321177026!3d30.511412296188514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f2d8596d9704b%3A0xc1764e7226f8bc12!2sPawan%20resort!5e0!3m2!1sen!2sca!4v1740030957782!5m2!1sen!2sca"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8 text-center">
          <SlideUp>
            <h2 className="text-3xl font-bold mb-8">Ready to Experience Swan?</h2>
          </SlideUp>
          <motion.p
            className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Book your stay now and discover the perfect balance of luxury and nature
          </motion.p>
          <motion.div
            className="space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Link href="/bookings">
              <Button size="lg">Book Now</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </PageWrapper>
  )
}

