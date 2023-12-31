import React from 'react';
import { previewData } from 'next/headers';
import { client } from '@/lib/sanity.client';
import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import PreviewBlogList from '@/components/PreviewBlogList';
import BlogList from '@/components/BlogList';

const query = groq`
  *[_type=='post'] {
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc) //piping
`;

export const revalidate = 30;

export default async function page() {
  if (previewData()) {
    return (
      <PreviewSuspense
        fallback={
          <div role='status'>
            <p className='text-center text-lg animate-pulse text-[#fda512]'>
            Preview Data..
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);
  return <BlogList posts={posts} />;
}
