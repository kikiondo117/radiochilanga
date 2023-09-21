import type { ReactNode } from "react";

export function Post({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) {
  return (
    <article className="w-64 md:w-80 rounded-sm">
      <h5 className="w-fit bg-blue-500 text-white p-4 capitalize">{title}</h5>
      <div className="bg-secondary text-white p-4">{children}</div>
    </article>
  );
}
