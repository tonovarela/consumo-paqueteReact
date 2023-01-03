import { ProductCard,ProductImage,ProductTitle,ProductButtons } from  'varela-product-card'


import './App.css';

function App() {
  const product ={
    id:"1",
    title: 'Primer producto',
    img: 'https://picsum.photos/id/1025/200/200',    
  }
  return (
    <div className="App App-header">
      <ProductCard  product={product} initialValues={{ count: 4, maxCount: 15 }} >
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
              {count}
              
            </>
          )
        }
      </ProductCard>
      <ProductCard  product={product} initialValues={{ count: 4, maxCount: 15 }} >        
        {
          ({ reset, isMaxCountReached, count, increaseBy }) => (
            <>
              <ProductImage/>
              <ProductTitle/>
              <ProductButtons/>
              
            </>
          )
        }
      </ProductCard>
    </div>
  );
}

export default App;
