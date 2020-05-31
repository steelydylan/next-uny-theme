import * as React from "react";
import styled from "styled-components";
import dayjs from "dayjs";
import { getAuthorFromName } from "@/utils/authors";
import { EntryData } from "@/types";

const ContentHeader = styled.header`
  border-bottom: solid 1px var(--c-gray-border);
  padding-bottom: 1rem;
`;
const ContentTitle = styled.h1`
  font-size: 2.4rem;
  line-height: 1.5;
`;
const AuthorA = styled.a`
  margin-top: 1rem;
  display: inline-flex;
  align-items: center;
  font-size: 15px;
  line-height: 1.4;
`;
const AuthorImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
`;
const AuthorName = styled.span``;
const AuthorMeta = styled.span`
  margin-top: 2px;
  display: block;
  color: var(--c-gray);
  font-size: 13px;
`;

const AuthorLink = ({
  writtenBy,
  children
}: {
  writtenBy: string;
  children?: React.ReactNode;
}) => {
  const author = getAuthorFromName(writtenBy);
  if (!author) {
    return null;
  }
  return (
    <AuthorA
      href={`https://twitter.com/${author.twitterUsername}`}
      rel="nofollow noopener noreferrer"
      target="_blank"
    >
      <AuthorImg src={author.avatar} width={40} height={40} alt={writtenBy} />
      <AuthorName>
        {writtenBy}
        <AuthorMeta>{children}</AuthorMeta>
      </AuthorName>
    </AuthorA>
  );
};

export default ({ data }: { data: EntryData }) => {
  const dateFormatted = data.date
    ? dayjs(data.date).format("YYYY/MM/DD")
    : null;
  return (
    <ContentHeader>
      <ContentTitle>{data.title}</ContentTitle>
      <AuthorLink writtenBy={data.writtenBy}>
        {dateFormatted ? (
          <time>
            {dateFormatted}
            に更新
          </time>
        ) : (
          <></>
        )}
      </AuthorLink>
    </ContentHeader>
  );
};
