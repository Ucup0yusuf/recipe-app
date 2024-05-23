import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
function Recipe() {
  let params = useParams();
  const [recipe , setRecipe] = useState({});  
  const [activeTab , setActiveTab] = useState("instructions");

  const getDetailRecipe = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${import.meta.env.VITE_API_KEY}`
    );
    const recipes = await data.json();
    setRecipe(recipes);
  };

  useEffect(() => {
    getDetailRecipe();
  },[params.name]);

  return (
    <DetailWrapper>
      <div>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} />
      </div>
      <Info>
        <div className="buttons">
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            instructions
          </Button>
          <Button
            className={activeTab === "Ingredients" ? "active" : ""}
            onClick={() => setActiveTab("Ingredients")}
          >
            Ingredients
          </Button>
        </div>
        {activeTab === "instructions" && (
          <div className="content">
            <h4 dangerouslySetInnerHTML={{ __html: recipe.summary }}></h4>
            <h4 dangerouslySetInnerHTML={{ __html: recipe.instructions }}></h4>
          </div>
        )}
        {activeTab === "Ingredients" && (
          <ul>
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 3rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  .buttons {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
  }
  .content {
    margin: 0rem 2rem;
    display: flex;
    flex-direction: column;

    h3 {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }
  h3 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
    margin-left: 2rem;
  }
  img {
    border-radius: 2rem;
    width: 25rem;
    height: 25rem;
    object-fit: cover;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;
  font-weight: 500;
`
const Info = styled.div`
  margin-left: 2rem;
  width: 100%;
`

export default Recipe