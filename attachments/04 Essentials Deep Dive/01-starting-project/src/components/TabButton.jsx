export default function TabButton({ children, isSelected, onClick, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onClick} {...props}>
        {children}
      </button>
    </li>
  );
}
