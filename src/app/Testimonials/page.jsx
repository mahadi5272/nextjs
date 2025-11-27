import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      name: "Rahim Uddin",
      role: "Business Owner",
      review:
        "Amazing service! Delivery was fast and support was outstanding. Highly recommended!",
      img: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Fatema Akter",
      role: "Student",
      review:
        "Very professional and reliable. I'm fully satisfied with their service.",
      img: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Shahriar Hasan",
      role: "Developer",
      review:
        "Excellent experience from start to finish. Will definitely use again!",
      img: "https://i.pravatar.cc/150?img=3",
    },
    {
      name: "Jannat Ara",
      role: "Freelancer",
      review: "Top-notch service and great communication. Really impressed!",
      img: "https://i.pravatar.cc/150?img=4",
    },
    {
      name: "Masud Karim",
      role: "Entrepreneur",
      review: "They truly care about customers. Fantastic experience overall!",
      img: "https://i.pravatar.cc/150?img=5",
    },
    {
      name: "Sadia Islam",
      role: "Designer",
      review: "Service quality is unmatched. I love their professionalism!",
      img: "https://i.pravatar.cc/150?img=6",
    },
  ];
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          What Our Clients Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className=" p-6 rounded-2xl shadow-2xl hover:scale-105 transition transform "
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-lg">{review.name}</h3>
                  <p className="text-gray-500 text-sm">{review.role}</p>
                </div>
              </div>

              <p className="text-gray-700">{review.review}</p>

              <div className="mt-3 text-yellow-500 text-xl">★★★★★</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Testimonials;
