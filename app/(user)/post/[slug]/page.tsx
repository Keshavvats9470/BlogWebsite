import React from 'react';
import { groq } from 'next-sanity';
import { client } from '../../../../lib/sanity.client';
import { Post } from '@/typings';
import Image from 'next/image';
import urlFor from '@/lib/urlFor';
import { PortableText } from '@portabletext/react';
import { RichTextComponents } from '@/components/RichTextComponents';

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 30; // this will revalidate the page in every 60seconds.

export async function generateStaticParams() {
    const query = groq`
    *[_type == 'post']
    {
        slug
    }`;

    const slugs : Post[] = await client.fetch(query);
    const slugRoutes = slugs.map((slug) => slug.slug.current);

    return slugRoutes.map(slug => ({
        slug: slug,
    }));
}

// STYLING OF SECOND PAGE

async function PostSecond({ params: { slug } }: Props) {
  const query = groq`
  *[_type == 'post' && slug.current == $slug][0] {
    ...,
    author->,
    catgeories[]->
  }
  `;

  //   calling the value that is to be show
  const post: Post = await client.fetch(query, { slug });

  return (
    <article className='px-10 pb-28 max-w-6xl mx-auto'>

      <section className='space-y-2 border border-gray-500 text-white '>
        <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
          <div className='absolute top-0 w-full h-full opacity-10 blur-sm p-10'>
            <Image
              className='object-cover object-center mx-auto '
              src={urlFor(post.mainImage).url()}
              alt={post.author.name}
              fill
            />
          </div>

          <section className='p-5 bg-gray-800 w-full'>
            <div className='flex flex-col md:flex-row justify-between gap-y-5'>
              <div>
                <h1 className='text-4xl font-extrabold'>{post.title}{`-`}</h1>
                <p className='text-sm mt-1 underline text-gray-300'>
                  {new Date(post._createdAt).toLocaleDateString('en-US', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>

              <div className='flex items-center space-x-2'>
                <Image
                  className='rounded-full'
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  height={60}
                  width={60}
                />

                <div className='w-64'>
                  <h3 className='text-lg font-bold'>{post.author.name}</h3>
                  <div></div>
                </div>
              </div>
            </div>

            <div >
              <h2 className='mt-2'>{post.description}</h2>
              <div className='flex items-center justify-end mt-auto space-x-2'>
                {post.categories.map((category) => (
                  <p
                    key={category._id}
                    className='bg-gray-800 text-white px-3 py-1 rounded-full text-sm font-semibold mt-4'
                  >
                    {category.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>

      <PortableText value={post.body} components={RichTextComponents}/>
    </article>
  );
}

export default PostSecond;
