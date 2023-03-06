import Head from 'next/head'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { formatDate } from '@/lib/formatDate'
import { getAllPosts } from '@/lib/getAllPosts'

function Post({ post }) {
  return (
    <post className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3">
        <Card.Title href={`/posts/${post.slug}`}>{post.title}</Card.Title>
        <Card.Eyebrow
          as="time"
          dateTime={post.date}
          className="md:hidden"
          decorate
        >
          {formatDate(post.date)}
        </Card.Eyebrow>
        <Card.Description>{post.description}</Card.Description>
        <Card.Cta>Read post</Card.Cta>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={post.date}
        className="mt-1 hidden md:block"
      >
        {formatDate(post.date)}
      </Card.Eyebrow>
    </post>
  )
}

export default function PostsIndex({ posts }) {
  return (
    <>
      <Head>
        <title>Posts - Nguyen Tran</title>
        <meta
          name="description"
          content="Join me on a journey of discovery as I share my insights and ideas on a variety of topics. From tips and tricks to make your life easier, to thought-provoking musings on the world around us, my blog offers a space to explore new ideas and expand your perspective. Whether you're looking for practical advice or just want to explore new ways of thinking, there's something here for everyone. So come along and join the conversation – I can't wait to hear your thoughts!"
        />
      </Head>
      <SimpleLayout
        title="Insights and Ideas: Tips, Tricks, and Thoughts from a Curious Mind"
        intro="Join me on a journey of discovery as I share my insights and ideas on a variety of topics. From tips and tricks to make your life easier, to thought-provoking musings on the world around us, my blog offers a space to explore new ideas and expand your perspective. Whether you're looking for practical advice or just want to explore new ways of thinking, there's something here for everyone. So come along and join the conversation – I can't wait to hear your thoughts!"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {posts.map((post) => (
              <Post key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      posts: (await getAllPosts()).map(({ component, ...meta }) => meta),
    },
  }
}
