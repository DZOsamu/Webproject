import thenFs from 'then-fs'

console.log('A')

async function getAllFile() {

   console.log('B')

   const r1 = await thenFs.readFile('../Promise/files/1.txt', 'utf8')
   const r2 = await thenFs.readFile('../Promise/files/2.txt', 'utf8')
   const r3 = await thenFs.readFile('../Promise/files/3.txt', 'utf8')
   console.log(r1, r2, r3)

   console.log('D')

}

getAllFile()

console.log('C')