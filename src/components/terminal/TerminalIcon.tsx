type TerminalIconProps = {
  name: string;
  className?: string;
};

export default function TerminalIcon({ name, className = "" }: TerminalIconProps) {
  return (
    <span className={`material-symbols-outlined ${className}`.trim()} aria-hidden="true">
      {name}
    </span>
  );
}
