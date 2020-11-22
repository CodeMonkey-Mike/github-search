import React from 'react';

export const Fork = ({ fill, ...props }: any) => {
  return (
    <svg viewBox="0 0 16 16" fill={fill} {...props}>
      <path
        fillRule="evenodd"
        d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"
      />
    </svg>
  );
};

export const Code = ({ fill, ...props }: any) => {
  return (
    <svg viewBox="0 0 16 16" {...props}>
      <path
        fillRule="evenodd"
        d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z"
      />
    </svg>
  );
};

export const ChevronRight = ({ fill, ...props }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
      <title>Chevron Forward Circle</title>
      <path
        d="M64 256c0 106 86 192 192 192s192-86 192-192S362 64 256 64 64 150 64 256z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M216 352l96-96-96-96"
      />
    </svg>
  );
};

export const Star = ({ fill, ...props }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...props} viewBox="0 0 512 512">
      <title>Star</title>
      <path
        d="M480 208H308L256 48l-52 160H32l140 96-54 160 138-100 138 100-54-160z"
        fill="none"
        stroke="currentColor"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export const RemoveIcon = ({ fill, ...props }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" {...props}>
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
        d="M368 368L144 144M368 144L144 368"
      />
    </svg>
  );
};

export const SearchIcon = ({ fill, ...props }: any) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <title>Search</title>
      <path
        d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
        fill="none"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="32"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="32"
        d="M338.29 338.29L448 448"
      />
    </svg>
  );
};
