export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <li>
      <button
        on
        className={isSelected ? "active" : undefined}
        onClick={onSelect}
      >
        {children}
      </button>
    </li>
  );
}
