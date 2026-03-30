import { category } from "../schemas/schemaValidation";

export type Inputs = {
      title: string,
      description: string,
      category: typeof category[number]
}