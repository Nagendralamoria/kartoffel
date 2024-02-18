import BakingCard from "../../components/baking-card/BakingCard";

function Task2() {
  const cardData = [
    {
      id: 1,
      section: "Baking mixes",
      title: "Vegan Snickertaart baking package",
      price: "€7.45",
      butn: "ADD TO CART",
    },
    {
      id: 2,
      section: "Baking mixes",
      title: "Healthy baking mix Protein rich pancakes",
      price: "€3.95-€6.45",
      butn: "SECTION OPTIONS",
    },
    {
      id: 3,
      section: "Cake",
      title: "Healthy baking mix quark bread",
      price: "€7.45",
      butn: "ADD TO CART",
    },
    {
      id: 4,
      section: "Cake",
      title: "Healthy baking mix banana bread",
      price: "€5.95",
      butn: "ADD TO CART",
    },
  ];
  return (
    <div className="bg-[url('../../../task2-backgound.jpg')] h-full p-8 text-center flex flex-col">
      <h1 className="text-4xl text-white font-bold mb-8 ">
        These <span className="text-pink-600">Delicious</span> Baking Mixes
        <br /> Are Now <span className="text-pink-600">Popular</span>
      </h1>
      <div className="grid lg:grid-cols-4 gap-4 md:grid-cols-2  ">
        {cardData.map((items) => {
          return <BakingCard key={items.id} content={items} />;
        })}
      </div>
    </div>
  );
}

export default Task2;
