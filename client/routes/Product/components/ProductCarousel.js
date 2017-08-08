
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 3000, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <div key={product.productId} style={{
      display: 'inline-block'
      fewf ewf
    }}>
      <e {...settings}>
        {productsToDisplay.map(product => (
          <div key={product.productId} style={{
            display: 'inline-block'
          }}>
            <g product={product} />
          </div>
        ))}
      </b>
    </div>
  );
}
