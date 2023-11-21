



export async function GET(res) {
  
    const res = await fetch('http://localhost:1337/admin/content-manager/collectionType/api::subject.subject?page=1&pageSize=10&sort=name:ASC', {
    headers: {
      'Content-Type': 'application/json',
      'API-Key': process.env.DATA_API_KEY,
    },
  })
  const data = await res.json()
    return Response.json({data })
}