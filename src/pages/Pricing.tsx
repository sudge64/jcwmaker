import ProductList from "../components/ProductList/ProductList";

const Pricing = () => {
  return (
    <div className="text-background">
      <div style={{ padding: "20px" }}>
        <h1>Pricing</h1>
        <br/>
        <h2 style={{ color: "white" }}>*No Current Inventory</h2>
        <br/>
        <p>
          Please note, these prices are <b>starting at</b> and are <b>subject to change</b>. Sizing, material, details like rolled edges, painting, supply chain issues, inflation fluctuations, etc, all impact price.
        </p>
        <br/>
        <p>
          As my work is <b>made-to-order</b>, please submit an inquiry. Let's bring your vision to life!
        </p>
        <br/>
        <ProductList/>
      </div>
    </div>
  );
};

export default Pricing;
