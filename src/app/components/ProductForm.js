'use client';

import { useState, useContext } from 'react';

export default function ProductForm({ product }) {
  // console.log(product);

  const allVariantOptions = product.variants.edges?.map((variant) => {
    const allOptions = {};

    variant.node.selectedOptions.map((item) => {
      allOptions[item.name] = item.value;
    });

    return {
      id: variant.node.id,
      title: product.title,
      handle: product.handle,
      image: variant.node.image?.url,
      options: allOptions,
      variantTitle: variant.node.title,
      variantPrice: variant.node.priceV2.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options?.map((item) => {
    defaultValues[item.name] = item.optionValues[0].value;
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  console.log('default values', defaultValues);
  console.log('variant options', allVariantOptions);

  return (
    <div>
      <h1>Product Form</h1>
    </div>
  );
}
