import { sql } from '@vercel/postgres';

export async function GET(request, response) {
   try {
      const { rows } = await sql`SELECT * FROM users_detail`;
      console.log('query success');
      return new Response(JSON.stringify({ result: rows }), { status: 200 });
   } catch (error) {
      console.log('query error');
      console.log(error)
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
   }
}

export async function POST(request, response) {
   try {
      await sql`INSERT INTO users_detail (Username, Password, Nama_lengkap,  No_whatsapp, Photo, No_absen) VALUES ('user', '12345', 'siapa', '1234567890', 'photo.png', '10')`;
      console.log('query success');
      return new Response(JSON.stringify({ message: 'Success adding data to database' }), { status: 200 });
   } catch (error) {
      console.log('query error');
      console.log(error)
      return new Response(JSON.stringify({ error: error.message }), { status: 500 });
   }
}