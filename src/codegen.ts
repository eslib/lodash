// import { readFileSync } from 'fs'

// import * as ts from 'typescript'

// // Parse a file
// let fileName = './node_modules/@types/lodash/index.d.ts'
// let sourceFile = ts.createSourceFile(fileName, readFileSync(fileName).toString(), ts.ScriptTarget.ES2015, /*setParentNodes */ true)

// // process it
// process(sourceFile)

// export function process(sourceFile: ts.SourceFile) {
//   processNode(sourceFile)

//   function processNode(node: ts.Node) {
//     console.log('process', node)

//     ts.forEachChild(node, processNode)
//   }
// }

// let fileName = './node_modules/@types/lodash/index.d.ts'
// let file = readFileSync(fileName).toString()
// let interfaces = file.match(/interface LoDashStatic {[^}]+}/g)

// if (interfaces === null) {
//   throw 'Cannot find declarations!'
// }

// let justInterfaces = interfaces
//   .map(_ => _.split('\n').slice(1, -1).join('\n'))
//   .map(_ => )
// console.log(justInterfaces)
