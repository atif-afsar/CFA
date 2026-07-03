import { useInView } from "../hooks/useInView";

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  animation = "fade-up",
  as: Tag = "div",
}) {
  const [ref, visible] = useInView();

  return (
    <Tag
      ref={ref}
      className={`animate-on-scroll animate-${animation} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
