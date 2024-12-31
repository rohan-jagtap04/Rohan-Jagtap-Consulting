export default function Footer() {
  return (
    <footer className="bg-white border-t py-4 mt-auto">
      <div className="container mx-auto px-4 md:px-8 text-center text-gray-600">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} MyShop. All rights reserved.
        </p>
      </div>
    </footer>
  )
}