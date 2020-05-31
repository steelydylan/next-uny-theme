import styled from "styled-components";

export default styled.article`
  padding: 2rem 0;

  & > *:first-child {
    margin-top: 0;
  }
  line-height: 1.7;
  i,
  cite,
  em {
    font-style: italic;
  }
  strong {
    font-weight: 700;
  }
  a {
    color: var(--c-primary);
    text-decoration: underline;
    &:hover {
      color: var(--c-primary-hover);
    }
  }
  p + p {
    margin-top: 1.6rem;
  }
  ul,
  ol {
    margin: 1.4rem 0;
    line-height: 1.5;
    & > li {
      margin: 0.6rem 0;
    }
    ul,
    ol {
      margin: 0.2em 0;
    }
    p {
      margin: 0;
    }
  }

  ul {
    padding-left: 0;
    & > li {
      list-style: none;
      list-style-position: inside;
      position: relative;
      padding-left: 1.5em;

      &:before {
        content: "";
        display: block;
        position: absolute;
        top: 0.7em;
        left: 0.3em;
        width: 7px;
        height: 7px;
        border-radius: 50%;
        background: var(--c-primary);
      }
      li:before {
        background: var(--c-primary);
      }
    }
  }
  ol {
    margin-left: 0;
    padding-left: 1.4rem;
    list-style: decimal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    & + p {
      margin-top: 0.3em;
    }
  }

  h1,
  h2 {
    margin-top: 2.3em;
    margin-bottom: 0.5em;
  }
  h3,
  h4,
  h5,
  h6 {
    margin-top: 2.3em;
    margin-bottom: 0.5em;
  }
  h1 {
    padding-bottom: 0.3em;
    margin-bottom: 1.1rem;
    font-size: 2em;
    position: relative;
    border-bottom: solid 1px var(--c-gray-border);
  }
  h2 {
    position: relative;
    font-size: 1.7em;
  }
  h3 {
    font-size: 1.5em;
  }
  h4 {
    font-size: 1.1em;
  }
  h5 {
    font-size: 1em;
  }
  h5,
  h6 {
    color: var(--c-gray-darker);
  }
  h6 {
    font-size: 0.85em;
  }

  hr {
    border: none;
    border-top: 1px dashed var(--c-gray-border);
    margin: 2rem 0;
  }
  blockquote {
    margin: 1.4rem 0;
    border-left: solid 3px var(--c-gray-darker);
    padding: 0.1rem 0 0.1rem 1.2rem;
    color: var(--c-gray-darker);
    p {
      margin: 1rem 0;
    }
    & > :first-child {
      margin-top: 0;
    }

    & > :last-child {
      margin-bottom: 0;
    }
    &.twitter-tweet {
      display: none;
    }
  }
  table {
    margin: 1.2rem 0;
    width: auto;
    border-collapse: collapse;
    font-size: 0.95em;
    line-height: 1.7;
  }
  th,
  td {
    padding: 0.5rem 1vw;
    border: solid 1px var(--c-gray-border);
  }
  th {
    font-weight: 700;
    background: var(--c-gray-bg);
  }
  code {
    color: var(--c-gray-darker);
    padding: 0.2em 0.4em;
    margin: 0 0.2em;
    background: var(--c-gray-bg);
    vertical-align: middle;
    font-size: 0.95em;
    border-radius: 4px;
  }
  pre {
    margin: 1.5rem 0;
    background: #1c2131;
    overflow-x: auto;
    border-radius: 3px;
    word-break: normal;
    word-wrap: normal;
    code {
      margin: 0;
      padding: 0;
      background: transparent;
      font-size: 0.9em;
      color: #fff;
      font-family: Menlo, Monaco, Consolas, Meiryo, "Noto Sans JP", sans-serif,
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
        "Noto Color Emoji";
    }
    & > code {
      display: block;
      padding: 1rem;
    }
  }
  img {
    margin: 1.5rem auto;
    display: table;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
  }
  .box--default,
  .box--note,
  .box--error {
    margin: 1.2rem 0;
    padding: 0.8rem;
    background: var(--c-gray-bg);
    border-radius: 2px;
    a {
      color: rgba(0, 0, 0, 0.6);
    }
  }
  .box--note {
    border-left: solid 3px var(--c-primary);
    background: #f6f5ff;
  }
  .box--error {
    padding: 1rem 0.8rem;
    background: #fff2f2;
    padding-left: 45px;
    position: relative;
    &:before {
      content: "!";
      position: absolute;
      left: 12px;
      background: #ff7373;
      color: #fff;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      text-align: center;
      line-height: 25px;
      font-size: 15px;
      font-weight: bold;
    }
  }

  .box--small {
    margin: 0.5rem 0;
    color: var(--c-gray);
    font-size: 0.85em;
  }
`;
