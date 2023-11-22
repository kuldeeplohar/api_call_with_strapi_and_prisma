import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function GET(request){

  const subjects = await prisma.subject2.findMany();

 // let subjects = [{name:'chemistry'},]

  return Response.json({msg:subjects
  }); 
}

module.exports = {GET}