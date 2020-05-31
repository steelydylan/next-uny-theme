import * as React from "react";
import Link from "next/link";
import { getPosts } from "@/utils/get-posts";
import Layout from "@/components/layout";
import { Entry } from "@/types";
import { GetStaticProps, GetStaticPaths } from "next";
import LazyBackground from "@/components/utils/lazy-background";

export default ({
  posts,
  current,
  max
}: {
  posts: Entry[];
  current: number;
  max: number;
}) => {
  return (
    <Layout type="index" current={current} max={max}>
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

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  const paths = [];
  posts.forEach((post, index) => {
    if ((index + 1) % 6 === 0) {
      paths.push({
        params: {
          id: `${(index + 1) / 6 + 1}`
        }
      });
    }
  });
  return { paths, fallback: false };
};

export const getStaticProps = ({ params }) => {
  const posts = getPosts();
  const { id } = params;
  const current = parseInt(id, 10) - 1;
  return {
    props: {
      current: current + 1,
      max: Math.ceil(posts.length / 6),
      posts: posts
        .sort((postA, postB) => {
          if (postA.data.date > postB.data.date) {
            return -1;
          }
          return 1;
        })
        .slice(current * 6, current * 6 + 6)
        .map(post => {
          const { content, ...others } = post;
          return others;
        })
    }
  };
};
