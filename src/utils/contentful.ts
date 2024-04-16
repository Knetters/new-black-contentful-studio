import { createClient } from 'contentful';

const client = createClient({
  space: 'vkwyrakkzeu8',
  accessToken: 'zjbeDxMIR0mrH1NivBT5tvW9KwlpbL-GDru4KmfWvjA'
});

export async function fetchEntryBySlug(contentType: string, slug: string) {
  const entries = await client.getEntries({
    content_type: contentType,
    'fields.slug': slug
  });

  if (entries.items.length > 0) {
    return entries.items[0];
  } else {
    console.log(`No entry found for ${contentType} with slug ${slug}.`);
    return null;
  }
}
