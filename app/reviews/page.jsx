import Heading from "@/components/Heading";
import { getReviews } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Reviews",
};

async function ReviewsPage() {
  const reviews = await getReviews();
  return (
    <>
      <Heading>Reviews</Heading>
      <ul className="flex flex-row flex-wrap gap-3">
        {reviews.map((review) => (
          <li
            key={review.slug}
            className="border w-80 bg-white rounded hover:shadow-xl"
          >
            <Link href={`/reviews/${review.slug}`}>
              <Image
                src={review.image}
                alt=""
                height={180}
                width={320}
                className="rounded-t "
              />
              <h2 className="text-center font-semibold font-roboto py-1">
                {review.title}
              </h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ReviewsPage;
