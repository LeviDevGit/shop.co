export default function Filter({ params }: { params: { filter: string } }) {
  return (
    <div>
      <h1>CATEGORY PAGE</h1>
      <p>Post: {params.filter}</p>
    </div>
  )
}
