import { createClient } from 'contentful';

const client = createClient({
  space: 'vkwyrakkzeu8',
  accessToken: 'zjbeDxMIR0mrH1NivBT5tvW9KwlpbL-GDru4KmfWvjA'
});

export async function fetchEntries(contentType: string) {
  const entries = await client.getEntries({
    content_type: contentType
  });
  if (entries.items) return entries.items;
  console.log(`Error getting Entries for ${contentType}.`);
}
