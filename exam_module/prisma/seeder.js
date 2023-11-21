const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main(){
    console.log('jy hind')
   const subjects = [
                        {
                            name:'hindi'
                        },
                        {
                            name:'science'
                        },
                        {
                            name:'english'
                        },
                        {
                            name:'phy'
                        },
                        {
                            name:'cmstry'
                        },
                        {
                            name:'ssss'
                        },
                    ]
    await prisma.$disconnect()

    for(subject of subjects){
        await prisma.subject2.create({
            data:subject
        })
    }
}
main().catch((e)=>{
    throw e;
})