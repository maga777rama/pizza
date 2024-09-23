export default function Product({
    params: { id },
}: {
    params: { id: string };
}) {
    return <p>Product {id}</p>;
}
