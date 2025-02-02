import MealItem from "./MealItem"

const MealsGrid = ({ meals }) => {
  return (
    <ul>
        {
            meals.map(meal =>(
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))
        }
    </ul>
  )
}

export default MealsGrid
