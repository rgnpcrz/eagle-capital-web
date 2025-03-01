import { useParams } from "react-router-dom";

const newsData = [
  {
    id: 1,
    date: "April 3, 2024",
    title:
      "Custom financial solutions to ensure your projects are funded and delivered on time.",
    category: "Finance",
    content:
      "Eagle Capital is a distinguished M&A and investment firm with a strategic focus on secure investments within South Eastern Europe and the United States. Our primary investment targets are licensed financial institutions, prime real estate in high-end coastal areas of the Mediterranean and innovative projects in the renewable energy sector. Our mission is to generate substantial returns for our business partners and investors through disciplined investments in stable and profitable sectors. We aim to capitalize on unique opportunities in the regions we serve by leveraging our extensive network and deep market understanding..",
    image: "/images/news1.jpg",
  },
  {
    id: 2,
    date: "January 22, 2024",
    title:
      "Sophisticated financial modeling to forecast, analyze, and optimize business performance.",
    category: "Finance",
    content: (
      <>
        <p>
          Standard Lorem Ipsum passage, used since the 1500s. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <br />

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Section 1.10.32 of de
          Finibus Bonorum et Malorum, written by Cicero in 45 BC.
        </p>
        <br />

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>
        <br />

        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth.
        </p>
        <p>
          Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in
          45 BC. On the other hand, we denounce with righteous indignation and
          dislike men who are so beguiled and demoralized by the charms of
          pleasure of the moment, so blinded by desire, that they cannot foresee
          the pain and trouble that are bound to ensue.
        </p>
        <p>
          Standard Lorem Ipsum passage, used since the 1500s. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua.
        </p>
        <br />
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <br />

        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum. Section 1.10.32 of de
          Finibus Bonorum et Malorum, written by Cicero in 45 BC.
        </p>
        <br />

        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </p>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
          fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem
          sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
          sit amet, consectetur, adipisci velit.
        </p>
        <p>
          Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis
          suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis
          autem vel eum iure reprehenderit qui in ea voluptate velit esse quam
          nihil molestiae consequatur.
        </p>
        <br />

        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth.
        </p>
        <p>
          Section 1.10.33 of de Finibus Bonorum et Malorum, written by Cicero in
          45 BC. On the other hand, we denounce with righteous indignation and
          dislike men who are so beguiled and demoralized by the charms of
          pleasure of the moment, so blinded by desire, that they cannot foresee
          the pain and trouble that are bound to ensue.
        </p>
      </>
    ),
    image: "/images/news2.jpg",
  },
  // More news items...
];

export default function NewsItem() {
  const { id } = useParams();

  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="text-center text-red-500 py-20">News not found!</div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-gray-100">
      <div className="page-container mx-auto px-4 py-20 max-w-4xl bg-white shadow-lg rounded-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold font-serif">{newsItem.title}</h1>
        </div>
        <div className="page-container py-20">
          {/* Image */}
          <div className="aspect-[10/4] bg-silver text-gold flex items-center justify-center">
            <img
              src={newsItem.image}
              alt={newsItem.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <p className="text-lg text-gray-600">{newsItem.date}</p>
        </div>
        <div className="prose lg:prose-xl mx-auto px-4">{newsItem.content}</div>
      </div>
    </div>
  );
}
