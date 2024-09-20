import { users } from '../../../../data/users';


export async function GET() {
  console.log('REACHED USER')

  const data = users[0]
 
  return Response.json(data)
}


export async function POST() {
  console.log('REGISTER USER??')

  const data = users[0]
 
  return Response.json(data)
}
