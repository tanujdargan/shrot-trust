import { ContactForm } from "@/components/contact-form"

export default function ContactPage() {
  return (
    <div className="pt-header">
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Have questions about Swan Resort? We'd love to hear from you. Send us a message and we'll respond as soon
              as possible.
            </p>
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  )
}

