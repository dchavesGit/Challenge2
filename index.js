import ProductManager from "./product_manager.js";

const startProcess = async () => {
  const pm = new ProductManager("./products.json");
  await pm.addProduct({
    title: "Perro",
    description: "coso",
    price: 200,
    thumbnail: "Ruta de vuelo",
    code: 200,
    stock: 3,
  });
  await pm.addProduct({
    title: "gato",
    description: "etc",
    price: 150,
    thumbnail: "JOOJOJ",
    code: 201,
    stock: 10,
  });
  console.log(await pm.getProducts());
  console.log(await pm.getProductById(2));
  console.log(
    await pm.updateProduct(2, {
      title: "Perro",
      description: "coso",
      price: 200,
      thumbnail: "Ruta de vuelo",
      code: 205,
      stock: 3,
    })
  );
  await pm.deleteProducts(2);
};

// Flujo principal
startProcess();
