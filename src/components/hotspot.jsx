export default function Hotspot({
  standard,
  size,
  setCurrentStandard,
  setOpen,
}) {
  return (
    <div
      className='hotspot'
      style={
        size
          ? {
              minWidth: size,
              minHeight: size,
            }
          : null
      }
      onClick={() => {
        setCurrentStandard(standard);
        setOpen(true);
      }}>
    </div>
  );
}
