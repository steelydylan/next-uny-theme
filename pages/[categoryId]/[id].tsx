import * as React from "react";
import { renderToString } from "react-dom/server";
import { GetStaticProps, GetStaticPaths } from "next";
import { NextSeo } from "next-seo";
import { getPosts } from "@/utils/get-posts";
import { Entry, Category } from "@/types";
import categories from "@/contents/categories";
import { useHighlight } from "@/hooks/use-highlight";
import Content from "@/components/content";
import ContentHeader from "@/components/content-header";
import Layout from "@/components/layout";

type DetailProps = { entry: Entry; category: Category; errorCode?: number };

export default ({ entry, category, errorCode }: DetailProps) => {
  const highlightRef = useHighlight();

  // if (errorCode) {
  //   return <ErrorComponent statusCode={errorCode} />;
  // }

  return (
    <Layout>
      {entry && (
        <>
          {entry.data && (
            <div className="entry- uc-grid-cell _col-fit">
              <ContentHeader data={entry.data} />
              <Content
                ref={highlightRef}
                dangerouslySetInnerHTML={{ __html: entry.content }}
              />
            </div>
          )}
        </>
      )}
      <NextSeo
        canonical={process.env.APP_ROOT_URL}
        title={entry.data.title}
        description={entry.excerpt}
      />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getPosts();
  const paths = posts.map(post => {
    return {
      params: {
        id: post.slug,
        categoryId: post.data.category
      }
    };
  });
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id, categoryId } = params;
  try {
    const post = await import(`@/contents/${id}/index.mdx`);
    const category = categories.find(cat => cat.id === categoryId);
    const { default: Default, ...data } = post;
    return {
      props: {
        entry: {
          content: renderToString(<Default />),
          data
        },
        category
      }
    };
  } catch (e) {
    return {
      props: {
        content: "Not Found",
        data: {},
        errorCode: 404
      }
    };
  }
};
