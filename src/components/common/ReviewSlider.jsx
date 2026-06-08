import React, { useEffect, useRef, useState } from "react"
import ReactStars from "react-rating-stars-component"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/pagination"
import "swiper/css/autoplay"
import "../../App.css"
// Icons
import { FaStar, FaQuoteLeft } from "react-icons/fa"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
// Import required modules
import { Autoplay, FreeMode, Pagination } from "swiper/modules"

// Get apiFunction and the endpoint
import { apiConnector } from "../../services/apiconnector"
import { ratingsEndpoints } from "../../services/apis"

// Fallback reviews so the section always renders nicely when the
// backend is unavailable or has no reviews yet (e.g. frontend showcase).
const FALLBACK_REVIEWS = [
  {
    user: { firstName: "Aarav", lastName: "Sharma", image: "" },
    course: { courseName: "Complete Web Development Bootcamp" },
    review:
      "This course completely changed how I approach building web apps. The projects were hands-on and the explanations were crystal clear.",
    rating: 5,
  },
  {
    user: { firstName: "Priya", lastName: "Menon", image: "" },
    course: { courseName: "Data Structures & Algorithms" },
    review:
      "Best DSA course I've taken. Concepts that always confused me finally clicked. Highly recommend it to anyone preparing for interviews.",
    rating: 4.5,
  },
  {
    user: { firstName: "Rahul", lastName: "Verma", image: "" },
    course: { courseName: "Python for Data Science" },
    review:
      "Loved the pace and the real-world datasets used throughout. I went from beginner to building my own models confidently.",
    rating: 5,
  },
  {
    user: { firstName: "Sara", lastName: "Khan", image: "" },
    course: { courseName: "UI/UX Design Fundamentals" },
    review:
      "The instructor breaks down design principles in such an intuitive way. My portfolio looks ten times better now.",
    rating: 4.5,
  },
  {
    user: { firstName: "Daniel", lastName: "Lee", image: "" },
    course: { courseName: "React & Redux Masterclass" },
    review:
      "Excellent structure and depth. The state management section alone was worth the entire course. Great learning experience.",
    rating: 5,
  },
  {
    user: { firstName: "Ananya", lastName: "Iyer", image: "" },
    course: { courseName: "Machine Learning A-Z" },
    review:
      "A perfect blend of theory and practice. The quizzes kept me on track and the community support was fantastic.",
    rating: 4.5,
  },
]

function ReviewSlider() {
  const [reviews, setReviews] = useState(FALLBACK_REVIEWS)
  const swiperRef = useRef(null)
  const truncateWords = 22

  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await apiConnector(
          "GET",
          ratingsEndpoints.REVIEWS_DETAILS_API
        )
        if (data?.success && Array.isArray(data?.data) && data.data.length > 0) {
          setReviews(data.data)
        }
      } catch (error) {
        // Keep the fallback reviews if the request fails.
      }
    })()
  }, [])

  return (
    <div className="w-full text-white">
      <div className="mx-auto w-full max-w-maxContentTab lg:max-w-maxContent">
        {/* Header row with navigation toggle buttons */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div className="flex flex-col gap-2 text-left">
            <h2 className="text-2xl font-bold text-richblack-5 md:text-3xl">
              Real stories. Real impact.
            </h2>
            <p className="max-w-[480px] text-sm text-richblack-300 md:text-base">
              See why learners around the world trust StudyNotion to level up
              their skills and grow their careers.
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-3">
            <button
              type="button"
              aria-label="Previous reviews"
              onClick={() => swiperRef.current?.slidePrev()}
              className="grid h-11 w-11 place-items-center rounded-full border border-richblack-600 bg-richblack-800 text-richblack-100 transition-all duration-200 hover:border-yellow-50 hover:bg-richblack-700 hover:text-yellow-50"
            >
              <FiChevronLeft size={20} />
            </button>
            <button
              type="button"
              aria-label="Next reviews"
              onClick={() => swiperRef.current?.slideNext()}
              className="grid h-11 w-11 place-items-center rounded-full border border-richblack-600 bg-richblack-800 text-richblack-100 transition-all duration-200 hover:border-yellow-50 hover:bg-richblack-700 hover:text-yellow-50"
            >
              <FiChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="pt-2 pb-4 [&_.swiper]:!overflow-visible">
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          slidesPerView={1}
          spaceBetween={24}
          loop={true}
          freeMode={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          modules={[FreeMode, Pagination, Autoplay]}
          className="w-full !overflow-visible"
        >
          {reviews.map((review, i) => {
            return (
              <SwiperSlide key={i} className="!h-auto py-2">
                <div className="group flex h-full min-h-[230px] flex-col justify-between gap-5 rounded-2xl border border-richblack-700 bg-richblack-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-richblack-600 hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.6)]">
                  <div className="flex flex-col gap-4">
                    <FaQuoteLeft className="text-xl text-yellow-50/80" />
                    <p className="text-[15px] leading-relaxed text-richblack-50">
                      {review?.review.split(" ").length > truncateWords
                        ? `${review?.review
                            .split(" ")
                            .slice(0, truncateWords)
                            .join(" ")}...`
                        : `${review?.review}`}
                    </p>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <ReactStars
                        count={5}
                        value={review.rating}
                        size={18}
                        isHalf={true}
                        edit={false}
                        activeColor="#ffd700"
                        emptyIcon={<FaStar />}
                        fullIcon={<FaStar />}
                      />
                      <span className="text-sm font-semibold text-yellow-100">
                        {Number(review.rating).toFixed(1)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 border-t border-richblack-700 pt-4">
                      <img
                        src={
                          review?.user?.image
                            ? review?.user?.image
                            : `https://api.dicebear.com/5.x/initials/svg?seed=${review?.user?.firstName} ${review?.user?.lastName}`
                        }
                        alt={`${review?.user?.firstName} ${review?.user?.lastName}`}
                        className="h-10 w-10 rounded-full object-cover"
                      />
                      <div className="flex flex-col">
                        <h3 className="text-sm font-semibold text-richblack-5">
                          {`${review?.user?.firstName} ${review?.user?.lastName}`}
                        </h3>
                        <p className="text-xs font-medium text-richblack-400">
                          {review?.course?.courseName}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
        </div>
      </div>
    </div>
  )
}

export default ReviewSlider
