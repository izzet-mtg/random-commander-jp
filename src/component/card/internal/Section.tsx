import { PropsWithChildren } from "react";

const Section = ({ children, flexCol }: PropsWithChildren<{ flexCol?: boolean }>) => (
  <div className={`text-center md:text-left p-2 flex ${flexCol ? "flex-col" : ""}`}>
    {children}
  </div>
);

export default Section;