export default function DocView({ doc }) {
  return (
    <pre>
      <code>{JSON.stringify(doc, null, 2)}</code>
    </pre>
  );
}
