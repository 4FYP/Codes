export function Button({ children, asChild }) {
  const Comp = asChild ? 'a' : 'button';
  return (
    <Comp className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {children}
    </Comp>
  );
}