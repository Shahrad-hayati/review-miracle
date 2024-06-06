import Heading from "@/components/Heading";
import { getFeaturedReview } from "@/lib/reviews";
import Image from "next/image";
import Link from "next/link";

async function HomePage() {
  //TODO load featured review
  const review = await getFeaturedReview();

  console.log("[HomePage] rendering");
  return (
    <>
      <Heading>Miracle-</Heading>
      <p className="pb-3">Only the best Steam games, reviewd for you</p>
      <div className="border bg-white w-80 rounded hover:shadow-xl sm:w-full">
        <Link
          href={`/reviews/${review.slug}`}
          className="flex flex-col sm:flex-row"
        >
          <Image
            src={review.image}
            alt=""
            height={180}
            width={320}
            className="rounded-t sm:rounded-l "
          />
          <h2 className="text-center sm:rounded-r-none sm:px-2 font-semibold font-roboto py-1">
            {review.title}
          </h2>
        </Link>
      </div>
    </>
  );
}

export default HomePage;
