import Heading from "@/components/Heading";
import ShareButtons from "@/components/ShareButtons";
import { getReview, getSlugs } from "@/lib/reviews";

import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params: { slug } }) {
  const review = await getReview(slug);
  return {
    title: review.title,
  };
}

async function ReviewPage({ params: { slug } }) {
  const review = await getReview(slug);
  console.log("[ReviewPage] rendering", slug);
  return (
    <>
      <Heading>{review.title}</Heading>
      <div className="flex gap-4 items-baseline">
        <p className="pb-2 italic">{review.date}</p>
        <ShareButtons />
      </div>
      <Image
        src={review.image}
        alt=""
        height={360}
        width={640}
        className="rounded mb-2"
      />
      <article
        dangerouslySetInnerHTML={{ __html: (await review).body }}
        className="prose prose-slate max-w-screen-sm"
      />
    </>
  );
}

export default ReviewPage;
