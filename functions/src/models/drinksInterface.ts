import { ObjectId } from "mongodb";

export interface drinks {
    "drinks": (DrinksEntity)[] ;
  }
  export interface DrinksEntity {

    "_id": ObjectId;
    "idDrink": string;
    "strDrink": string;
    "strDrinkAlternate": null;
    "strTags": string ;
    "strVideo": null;
    "strCategory": string;
    "strIBA": string ;
    "strAlcoholic": string;
    "strGlass": string;
    "strInstructions": string;
    "strInstructionsES": null;
    "strInstructionsDE": string ;
    "strInstructionsFR": null;
    "strInstructionsIT": string;
    "strInstructionsZH-HANS": null;
    "strInstructionsZH-HANT": null;
    "strDrinkThumb": string;
    "strIngredient1": string;
    "strIngredient2": string;
    "strIngredient3": string;
    "strIngredient4": string ;
    "strIngredient5": string ;
    "strIngredient6": string ;
    "strIngredient7": string ;
    "strIngredient8": null;
    "strIngredient9": null;
    "strIngredient10": null;
    "strIngredient11": null;
    "strIngredient12": null;
    "strIngredient13": null;
    "strIngredient14": null;
    "strIngredient15": null;
    "strMeasure1": string;
    "strMeasure2": string;
    "strMeasure3": string;
    "strMeasure4": string ;
    "strMeasure5": string ;
    "strMeasure6": string ;
    "strMeasure7": string ;
    "strMeasure8": null;
    "strMeasure9": null;
    "strMeasure10": null;
    "strMeasure11": null;
    "strMeasure12": null;
    "strMeasure13": null;
    "strMeasure14": null;
    "strMeasure15": null;
    "strImageSource": string ;
    "strImageAttribution": string ;
    "strCreativeCommonsConfirmed": string;
    "dateModified": string ;
  }