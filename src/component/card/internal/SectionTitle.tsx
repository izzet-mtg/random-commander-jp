import { PropsWithChildren } from "react";

const Title = ({ children }: PropsWithChildren) => (
  <span className="font-bold">{children}:</span>
);

export default Title;