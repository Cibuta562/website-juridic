export default function TapButton({ children, onSelect, isSelected, eMobil }) {
  let buttonClasses = eMobil ? "eMobil" : isSelected ? "active" : "";

  return (
    <button className={buttonClasses.trim()} onClick={onSelect}>
      {children}
    </button>
  );
}
