import { RegisterOptions } from "react-hook-form";

class ProductModel {
  public id: number;
  public name: string;
  public price: number;
  public stock: number;
  public imageUrl: string;
  public image: File;

  public static nameValidation: RegisterOptions<ProductModel> = {
    required: { value: true, message: "Missing Name" },
    minLength: { value: 2, message: "Name too short" },
  };

  public static priceValidation: RegisterOptions<ProductModel> = {
    required: { value: true, message: "Missing Price" },
    min: { value: 0, message: "No negative price" },
    max: { value: 1000, message: "Too expensive" },
  };
  public static stockValidation: RegisterOptions<ProductModel> = {
    required: { value: true, message: "Missing Stock" },
    min: { value: 0, message: "No negative stock" },
    max: { value: 1000, message: "Too much in stock" },
  };
  public static imageValidation: RegisterOptions<ProductModel> = {
    required: { value: true, message: "Missing Image" },
  };
}

export default ProductModel;
