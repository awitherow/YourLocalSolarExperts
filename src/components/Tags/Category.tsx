import NextLink from "next/link";
import { twMerge } from "tailwind-merge";
import { toKebabCase } from "utils";

interface TagProps {
  tag: string;
  className?: string;
  size?: string;
  href?: string;
}

const CategoryTag = ({ tag, className, size = "sm", href }: TagProps) => {
  switch (size) {
    case "lg": {
      return (
        <a href={href ?? `#${toKebabCase(tag)}`} key={tag}>
          <div className="rounded-lg py-2 px-4 md:py-4 md:px-8 bg-slate-600 text-white m-1 md:m-2 text-md">{tag}</div>
        </a>
      );
    }
    default: {
      return (
        <NextLink
          href={href ?? `/categories/${toKebabCase(tag)}`}
          className={twMerge("rounded-lg px-2 py-1 m-1 bg-slate-600 text-white", className)}
        >
          {tag}
        </NextLink>
      );
    }
  }
};

export default CategoryTag;
