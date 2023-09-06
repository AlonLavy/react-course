import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import "./AddProduct.css";
import productsService from "../../../Services/ProductsServices";
import { useNavigate } from "react-router-dom";

function AddProduct(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<ProductModel>();
  const navigate = useNavigate();

  const send = async (product: ProductModel) => {
    product.image = (product.image as unknown as FileList)[0];
    try {
      console.log(product);
      await productsService.addProduct(product);
      console.log("Product has been created");
      navigate("/products");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="AddProduct">
      <form onSubmit={handleSubmit(send)}>
        <h2>Add Product</h2>

        <label>Name: </label>
        <input type="text" {...register("name", ProductModel.nameValidation)} />
        <label>Price: </label>
        <input
          type="number"
          step={0.01}
          {...register("price", ProductModel.priceValidation)}
        />
        <label>Stock: </label>
        <input
          type="number"
          step={1}
          {...register("stock", ProductModel.stockValidation)}
        />
        <label>Image: </label>
        <input
          type="file"
          accept="image/*"
          {...register("image", ProductModel.imageValidation)}
        />

        <button>Add</button>

        <span>{formState.errors?.name?.message}</span>
      </form>
    </div>
  );
}

export default AddProduct;
