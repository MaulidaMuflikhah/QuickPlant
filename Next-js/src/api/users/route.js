export async function GET(request) {
   console.log(request)

   const dummyData = [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'John Smith'}
   ]

   return new Response(JSON.stringify(dummyData))
}