'use client';

import { useState } from 'react';
import ProductOptions from './ProductOptions';
import { Button } from '@/components/ui/button';

export default function ProductForm({ product }) {
  console.log(product);

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

  // Get the first variant's selected options
  const firstVariant = product.variants.edges[0];
  if (firstVariant?.node?.selectedOptions) {
    firstVariant.node.selectedOptions.forEach((item) => {
      defaultValues[item.name] = item.value;
    });
  }

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  // This is what AI ADDED
  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      const newOptions = { ...prevState, [name]: value };

      // Find the variant that matches all selected options
      const selection = allVariantOptions.find((variant) => {
        return Object.keys(newOptions).every(
          (key) => variant.options[key] === newOptions[key]
        );
      });

      if (selection) {
        setSelectedVariant(selection);
      }

      return newOptions;
    });
  }
  // This is what AI ADDED

  console.log('Final defaultValues:', defaultValues);
  console.log('variant options', allVariantOptions);

  // Extract unique option values
  const options = {
    Color: [
      ...new Set(allVariantOptions.map((variant) => variant.options.Color)),
    ],
    Size: [
      ...new Set(allVariantOptions.map((variant) => variant.options.Size)),
    ],
  };

  return (
    <div className='rounded-2xl p-4 shadow-lg flex flex-col w-full h-full'>
      <h2>{product.title}</h2>
      <span className='pb-6'>{selectedVariant.variantPrice}</span>
      {Object.entries(options).map(([name, values]) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setSelectedOptions={setSelectedOptions}
          setOptions={setOptions}
        />
      ))}
      <Button>Add to Cart</Button>
    </div>
  );
}
