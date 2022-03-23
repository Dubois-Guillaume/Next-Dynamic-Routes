import { GetServerSideProps } from "next";

const ChuckNorrisCategoryJoke: React.FC<{ categoryJoke: string }> = ({
  categoryJoke,
}) => {
  return (
    <div>
      <p>{categoryJoke}</p>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await fetch(
    "https://api.chucknorris.io/jokes/random?category={category}"
  );
  const categoryJoke = await response.json();

  console.log("context", context.params);
  // console.log("categoryJoke", categoryJoke);

  return {
    props: {
      categoryJoke: categoryJoke,
    },
  };
};

export default ChuckNorrisCategoryJoke;
