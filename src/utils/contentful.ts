import { createClient, Entry } from 'contentful';

const space: string = process.env.VITE_CONTENTFUL_SPACE || "";
const key: string = process.env.VITE_CONTENTFUL_KEY || "";

const client = createClient({
  space: 'vkwyrakkzeu8',
  accessToken: 'zjbeDxMIR0mrH1NivBT5tvW9KwlpbL-GDru4KmfWvjA'
});

export async function fetchEntryBySlug(contentType: string, slug: string, locale: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    'fields.slug': slug,
    locale: locale
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
    const products: Entry<any>[] = await fetchAllProductEntries(locale);

    const filteredProducts = products.filter(product => {
      if (product.fields.id !== null && product.fields.id !== undefined) {
        const productIdString = product.fields.id.toString();
        return fetchProductIds.includes(productIdString);
      }
      return false;
    }).map(product => ({
      id: product.sys.id,
      title: product.fields.title,
      slug: product.fields.slug,
      price: product.fields.price,
      imageURL: (product.fields.image as { fields: { file: { url: string } } })?.fields.file.url,
    }));

    return filteredProducts;
  } catch (error) {
    console.error('Error fetching products:', error);
    return [];
  }
}

export async function fetchComponentStoreInformationBySlug(slug: string, locale: string) {
  try {
    const entries = await client.getEntries({
      content_type: 'componentStoreIntormation',
      'fields.slug': slug,
      locale: locale
    });

    if (entries.items.length > 0) {
      const entry = entries.items[0];
      return {
        title: entry.fields.title as string,  // Ensure title is a string
        content: entry.fields.content,
        slug: entry.fields.slug as string // Ensure slug is a string
      };
    } else {
      console.log(`No entry found for componentStoreIntormation with slug ${slug}.`);
      return null;
    }
  } catch (error) {
    console.error(`Error fetching componentStoreIntormation with slug ${slug}:`, error);
    return null;
  }
}

