import * as React from "react";
import Link from "next/link";
import { getPosts } from "@/utils/get-posts";
import Layout from "@/components/layout";
import { Entry } from "@/types";
import LazyBackground from "@/components/utils/lazy-background";

export default ({ posts }: { posts: Entry[] }) => {
  return (
    <Layout type="index">
      {posts.map(post => {
        return (
          <div className="uc-grid-cell">
            <article className="uc-card _banner">
              <Link
                href="/[categoryId]/[id]"
                as={`/${post.data.category}/${post.slug}`}
              >
                <a href={`/${post.data.category}/${post.slug}`}>
                  <LazyBackground
                    url="https://source.unsplash.com/random"
                    className="uc-card-image"
                  />
                  <div className="uc-card-wrap">
                    <div className="uc-card-title">{post.data.title}</div>
                    <p>{post.excerpt}</p>
                    <div className="uc-btn _primary">
                      <span>Read more</span>
                    </div>
                  </div>
                </a>
              </Link>
            </article>
          </div>
        );
      })}
    </Layout>
  );
};

export const getStaticProps = () => {
  const posts = getPosts();
  return {
    props: {
      posts: posts
        .sort((postA, postB) => {
          if (postA.data.date > postB.data.date) {
            return -1;
          }
          return 1;
        })
        .slice(0, 5)
        .map(post => {
          const { content, ...others } = post;
          return others;
        })
    }
  };
};
