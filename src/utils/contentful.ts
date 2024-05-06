import { createClient } from 'contentful';

const client = createClient({
  space: 'vkwyrakkzeu8',
  accessToken: 'zjbeDxMIR0mrH1NivBT5tvW9KwlpbL-GDru4KmfWvjA'
});

export async function fetchEntryBySlug(contentType: string, slug: string, locale: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    'fields.slug': slug,
    locale: locale // Pass locale to the query
  });

  if (entries.items.length > 0) {
    return entries.items[0];
  } else {
    console.log(`No entry found for ${contentType} with slug ${slug}.`);
    return null;
  }
}

export async function fetchProductIds(locale: string) {
  try {
    const entries = await client.getEntries({
      content_type: 'elementGridPin',
      locale: locale
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching product entries:', error);
    return [];
  }
}

export async function fetchAllProductEntries(locale: string) {
  try {
    const entries = await client.getEntries({
      content_type: 'products',
      locale: locale
    });

    return entries.items;
  } catch (error) {
    console.error('Error fetching product entries:', error);
    return [];
  }
}

export async function fetchProducts(fetchProductIds: string[], locale: string) {
  try {
    const products = await fetchAllProductEntries(locale);
    const filteredProducts = products.filter(product => fetchProductIds.includes(product.sys.id));
    console.log(filteredProducts)
    return filteredProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}
