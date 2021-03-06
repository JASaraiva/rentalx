import {CategoriesRepository} from "../repositories/CategoriesRepository";
import { ICategoriesRepository } from "../repositories/ICategoriesRepository";

interface IRequest{
  name:string;
  description: string;
}

class CreateCategoryService{

  constructor(private categoryRepository: ICategoriesRepository){}

  execute({name, description}:IRequest){
    const categoryAlreadyExists = this.categoryRepository.findByName(name);

    if(categoryAlreadyExists) 
      throw new Error("Category already exists!");
  
    this.categoryRepository.create({name, description});
  }
}

export {CreateCategoryService};