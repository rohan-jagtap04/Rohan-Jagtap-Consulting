// eslint-disable-next-line @typescript-eslint/no-unused-vars
import Image from "next/image";

export default function Home() {
	return (
		<section className="py-12 md:py-20 flex flex-col gap-8">
			{/* Hero Section */}
			<div className="text-center flex flex-col gap-6">
				<h1 className="text-4xl md:text-5xl font-bold text-indigo-600">
					Welcome to MyShop
				</h1>
				<p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
					A beautifully designed e-commerce site, perfect for your portfolio.
				</p>
				<a
					href="/products"
					className="inline-block bg-indigo-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-indigo-700 transition-colors"
				>
					Shop Now
				</a>
			</div>

			{/* Showcase or About Section */}
			<div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-12">
				<img
					src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
					alt="Showcase"
					className="w-full md:w-1/2 rounded-lg shadow-lg"
				/>
				<div className="md:w-1/2 space-y-4">
					<h2 className="text-2xl font-bold text-gray-800">
						Your One-Stop Shop
					</h2>
					<p className="text-gray-600">
						Welcome to our curated collection of beautiful products. Each item
						is chosen to reflect quality, style, and timeless craftsmanship.
					</p>
					<a
						href="/products"
						className="text-indigo-600 hover:text-indigo-800 font-semibold"
					>
						View Products &rarr;
					</a>
				</div>
			</div>
		</section>
	);
}
