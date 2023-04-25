import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Chole Bhature",
    description: "Finest fish and veggies",
    price: 79.99,
  },
  {
    id: "m2",
    name: "Vada Pav",
    description: "A german specialty!",
    price: 30.5,
  },
  {
    id: "m3",
    name: "Aloo ka Paratha",
    description: "American, raw, meaty",
    price: 49.99,
  },
  {
    id: "m4",
    name: "Sabzi Puri",
    description: "Healthy...and green...",
    price: 29.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
