'use server';
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

const validationHelper = (text) =>{
  return !text || text.trim() === '';
}

export const shareMeal = async ( prevState, formData ) =>{
    const meal = {
      title: formData.get('title'),
      summary: formData.get('summary'),
      instructions: formData.get('instructions'),
      image: formData.get('image'),
      creator: formData.get('name'),
      creator_email: formData.get('email'),
    }

    if(
      validationHelper(meal.title) ||
      validationHelper(meal.summary) || 
      validationHelper(meal.instructions) || 
      validationHelper(meal.creator_email) ||
      validationHelper(meal.creator) ||
      !meal.image ||
      meal.image.size === 0 
    )
    {
      return {message: "Invalid Input"};
    }

    await saveMeal(meal);
    revalidatePath('/meals');
    redirect('/meals');
  }