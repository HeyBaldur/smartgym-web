import { defineCollection, z } from 'astro:content';

const legalCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lang: z.string(),
    lastUpdated: z.string(),
  }),
});

export const collections = {
  privacy: legalCollection,
  terms: legalCollection,
};
