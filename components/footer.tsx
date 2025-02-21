import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">The Shrot Trust</h3>
            <p className="text-gray-600">Experience luxury in nature at our off-grid resort, Swan.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/bookings" className="text-gray-600 hover:text-gray-900">
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a href="mailto:shrottrust@gmail.com" className="text-gray-600 hover:text-gray-900">Email: shrottrust@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919876543210" className="text-gray-600 hover:text-gray-900">Phone: +91 98765 43210</a>
              </li>
              <li>
                <a href="https://instagram.com/shrottrust" className="text-gray-600 hover:text-gray-900">Instagram: @shrottrust</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-gray-600">
          <p>&copy; {new Date().getFullYear()} The Shrot Trust. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

