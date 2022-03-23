import { GetServerSideProps } from "next";
const ChuckNorrisJokeCategories: React.FC<{ categories: string[] }> = ({
  categories,
}) => {
  // console.log("joke", joke);
  return (
    <div>
      <ul>
        {categories.map((category) => {
          return (
            <li key={category}>
              <a href="#">{category}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default ChuckNorrisJokeCategories;
// This gets called on every request
export const getServerSideProps: GetServerSideProps = async () => {
  // Fetch data from external API
  const response = await fetch("https://api.chucknorris.io/jokes/categories");
  const categories = await response.json();
  // Pass data to the page via props
  return {
    props: {
      categories: categories,
    },
  };
};
