import NextLink from "next/link";
import { primaryBtnStyles } from "styles";

export default function CtaButton() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-center xl:items-center">
      <NextLink href="/consult" className={primaryBtnStyles}>
        Get A Free Quote
      </NextLink>
    </div>
  );
}
