import Banner from "./Banner/page";
import Testimonials from "./Testimonials/page";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-r from-orange-300  to-gray-300 ">
        <section
          className="
          mt-16
        h-[500px] 
        bg-[url('https://i.ibb.co.com/XkrPwQ3K/pexels-pixabay-264636.jpg')] 
        bg-cover bg-center bg-no-repeat 
        relative
        flex items-center justify-center
      "
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-white px-4">
            <h1 className=" text-4xl md:text-6xl font-bold mb-4">
              Discover Quality Products at the Best Prices
            </h1>

            <p className=" text-lg md:text-xl mb-6 max-w-2xl mx-auto">
              Find premium items at affordable prices — delivered to your
              doorstep.
            </p>

            <button className="btn bg-orange-600 text-white">
              Explore Collection
            </button>
          </div>
        </section>
        {/*4 Relevant Sections  choose based on theme e.g., features, items, testimonials, banner */}
        <section className="">
          <div>
            <div className="py-16 ">
              <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">
                  Why Shop With Us?
                </h2>
                <p className="text-gray-700 mb-10">
                  We make your shopping experience fast, safe, and convenient.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className=" p-6 rounded-xl shadow-2xl  hover:shadow-xl hover:scale-[1.03] transition transform">
                    <h3 className="text-gray-800 text-xl font-semibold mb-2">
                      Fast Delivery
                    </h3>
                    <p className="text-gray-700">
                      Get your products delivered quickly & safely.
                    </p>
                  </div>

                  {/* Card 2 */}
                  <div className=" p-6 rounded-xl shadow-2xl   hover:shadow-xl hover:scale-[1.03] transition transform">
                    <h3 className="text-gray-800 text-xl font-semibold mb-2">
                      Best Price
                    </h3>
                    <p className="text-gray-700">
                      Affordable pricing without compromising quality.
                    </p>
                  </div>

                  {/* Card 3 */}
                  <div className=" p-6 rounded-xl shadow-2xl   hover:shadow-xl hover:scale-[1.03] transition transform">
                    <h3 className="text-gray-800 text-xl font-semibold mb-2">
                      Premium Quality
                    </h3>
                    <p className="text-gray-700">
                      We provide you with only the best quality items.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* items */}
        <section>
          <div>
            <h1 className="text-center text-gray-800 font-bold text-[25px]">
              Our Products
            </h1>
            <p className="text-center text-gray-700">
              Browse our latest collection of premium products.
            </p>
          </div>
          {/* products */}
          <div className="flex justify-center gap-3 flex-wrap ">
            {/* Card 1 */}
            <div className="w-full sm:w-72 p-5  rounded-2xl shadow-2xl hover:scale-105 transition transform text-center ">
              <img
                className="w-40 h-40 mx-auto rounded-2xl xl:w-full"
                src="https://i.ibb.co/7xL9cscf/pexels-pixabay-219794.jpg"
                alt="Organic Food"
              />
              <h1 className="font-bold text-xl text-gray-700 mt-4 mb-2">
                Organic Food
              </h1>
              <p className="text-gray-500 mb-4 text-sm">
                Fresh and healthy organic food items directly from farms.
              </p>
              <button className="bg-green-600 hover:bg-green-700 text-white btn">
                View Details
              </button>
            </div>

            {/* Card 2 */}
            <div className="w-full sm:w-72 p-5  rounded-2xl shadow-2xl hover:scale-105 transition transform text-center  ">
              <img
                className="w-40 h-40 mx-auto rounded-2xl xl:w-full"
                src="https://i.ibb.co/dsNHy86L/pexels-roman-odintsov-6422023.jpg"
                alt="Organic Honey"
              />
              <h1 className="font-bold text-xl text-gray-700 mt-4 mb-2">
                Organic Honey
              </h1>
              <p className="text-gray-500 mb-4 text-sm">
                Pure and natural honey, perfect for your daily health.
              </p>
              <button className="bg-green-600 hover:bg-green-700 btn text-white">
                View Details
              </button>
            </div>

            {/* Card 3 */}
            <div className="w-full sm:w-72 p-5  rounded-2xl shadow-2xl hover:scale-105 transition transform text-center ">
              <img
                className="w-40 h-40 mx-auto rounded-2xl xl:w-full"
                src="https://i.ibb.co/QjbB4wr7/pexels-feelartfeelant-1028714.jpg"
                alt="Desserts"
              />
              <h1 className="font-bold text-xl text-gray-700 mt-4 mb-2">
                Desserts
              </h1>
              <p className="text-gray-500 mb-4 text-sm">
                Delicious homemade desserts to satisfy your sweet cravings.
              </p>
              <button className="bg-green-600 hover:bg-green-700 btn text-white">
                View Details
              </button>
            </div>
          </div>
        </section>
        {/* Testimonials */}
        <Testimonials></Testimonials>
        {/* contact me */}

        <section
          id="contact"
          className="py-24  px-6"
        >
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-800 tracking-tight">
                Get in Touch
              </h2>
              <p className="mt-4 text-gray-600 text-lg">
                We are here to answer your questions. Let’s talk!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Side: Form */}
              <div className=" rounded-2xl shadow-xl p-10 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Send us a Message
                </h3>

                <div className="space-y-5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    readOnly
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    readOnly
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300"
                  />
                  <textarea
                    rows="5"
                    placeholder="Your Message"
                    readOnly
                    className="w-full p-4 bg-gray-50 border border-gray-200 rounded-xl shadow-sm focus:ring-2 focus:ring-blue-300"
                  ></textarea>

                  <button className="w-full btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>

              {/* Right Side: Contact Info */}
              <div className="flex flex-col justify-center space-y-10">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    📍 Office Location
                  </h4>
                  <p className="text-gray-600">Gulshan, Dhaka, Bangladesh</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    📧 Email
                  </h4>
                  <p className="text-gray-600">support@yourbrand.com</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    📞 Phone
                  </h4>
                  <p className="text-gray-600">+880 1711 234 567</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* banner */}
        <Banner></Banner>
      </div>
    </>
  );
}
