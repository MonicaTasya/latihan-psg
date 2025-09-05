import { cn } from "@/utils/helpers/cn";

const DefaultLayout = ({
  className,
  decoration = <></>,
  children,
  ...props
}) => {
  return (
    <section
      className={cn(
        "relative w-full flex flex-col items-center px-[5vw] py-[3vw]",
        className
      )}
      {...props}
    >
      {decoration}
      <div className="relative w-full">{children}</div>
    </section>
  );
};

export default DefaultLayout;
