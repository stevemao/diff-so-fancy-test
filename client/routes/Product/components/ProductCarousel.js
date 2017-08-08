
      { breakpoint: 425, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 769, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 3000, settings: { slidesToShow: 4, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="a">
      <e {...settings}>
        {productsToDisplay.map(product => (
          <div key={product.productId} className="similarProduct">
            <g product={product} />
          </div>
        ))}
      </b>
    </div>
  );
}
