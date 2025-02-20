import { BookingForm } from "@/components/booking-form"

export default function BookingsPage() {
  return (
    <div className="pt-header">
      <section className="py-20">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">Book Your Stay</h1>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Experience the perfect balance of luxury and nature at Swan Resort. Select your dates and provide your
              details below.
            </p>
            <BookingForm />
          </div>
        </div>
      </section>
    </div>
  )
}

