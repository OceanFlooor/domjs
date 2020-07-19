let div = dom.create('<div id="wrapper"><span>hello world</span></div>'),
  testdiv1 = dom.create('<div id="testdiv1">testdiv1</div>')

let body = dom.find("body"),
  div1 = dom.find("#div1"),
  aaa = dom.find("#aaa"),
  ul = dom.children(aaa)[0],
  eight = dom.find("#eight")

// body.appendChild(div)

// dom.before(div1, div)

// dom.after(div1, testdiv1)

// dom.wrap(aaa, div)

// console.log(dom.children(aaa, true))

// console.log(dom.parent(aaa))

// console.log(dom.siblings(aaa, true))

// console.log(dom.next(div1))

// console.log(dom.prev(aaa))

// dom.each(
//   ul,
//   (node) => {
//     console.log(node)
//   },
//   true
// )

// console.log(dom.index(eight, true))

// console.log(dom.remove(ul))

// dom.empty(ul)

// let attrObj = { "data-x": "55" }

// dom.attr(aaa, "data-x", "65")
// console.log(dom.attr(aaa, "data-x"))

// let styl = {
//   color: "red",
//   borderRadius: "50%",
// }

// dom.style(aaa, styl)

// console.log(dom.find(".scope", dom.find(".scope")[0]))
