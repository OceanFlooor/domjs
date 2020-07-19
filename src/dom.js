window.dom = {
  // 增加节点
  create(html) {
    // <template>可存放任意子元素
    const container = document.createElement("template")
    container.innerHTML = html.trim()
    return container.content.firstChild
  },
  append(parentNode, childNode) {
    return parentNode.appendChild(childNode)
  },
  before(node, insertNode) {
    return node.parentNode.insertBefore(insertNode, node)
  },
  after(node, insertNode) {
    return node.parentNode.insertBefore(insertNode, node.nextSibling)
  },
  wrap(node, wrapNode) {
    dom.before(node, wrapNode)
    dom.append(wrapNode, node)
  },

  // 查询节点
  find(selector, scope) {
    let res = (scope || document).querySelectorAll(selector)
    return res.length === 1 ? res[0] : res
  },
  parent(node) {
    return node.parentNode
  },
  // withTextNode 为 ture 时带上文本节点返回
  children(node, withTextNode = false) {
    return withTextNode ? node.childNodes : node.children
  },
  // 查询兄弟节点, withTextNode 为 ture 时带上文本节点返回
  siblings(node, withTextNode = false) {
    return Array.from(dom.children(dom.parent(node), withTextNode)).filter(
      (n) => n !== node
    )
  },
  next(node, withTextNode = false) {
    if (withTextNode) {
      return node.nextSibling
    }

    let x = node.nextSibling
    while (x && x.nodeType === 3) {
      x = x.nextSibling
    }
    return x
  },
  prev(node, withTextNode = false) {
    if (withTextNode) {
      return node.previousSibling
    }

    let x = node.previousSibling
    while (x && x.nodeType === 3) {
      x = x.previousSibling
    }
    return x
  },
  each(node, cb, withTextNode = false) {
    Array.from(dom.children(node, withTextNode)).forEach((item) => {
      cb(item)
    })
  },
  // 查询node为它父节点的第几个子节点
  index(node, withTextNode = false) {
    let children = Array.from(dom.children(dom.parent(node), withTextNode))

    for (let i = 0; i < children.length; i++) {
      if (children[i] === node) {
        return i
      }
    }
  },

  // 删除节点
  remove(node) {
    return node.remove()
  },
  // 清除后代
  empty(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild)
    }
  },

  // 更改节点
  // 传入两参数读取属性，三参数更改属性
  attr(node, name, value = undefined) {
    if (!!value && typeof value === "string") {
      node.setAttribute(name, value)
    } else if (!value && type(name) === "object") {
      for (let key in name) {
        node.setAttribute(key, name[key])
      }
    } else if (!value && typeof name === "string") {
      return node.getAttribute(name)
    } else {
      throw new TypeError("参数错误！")
    }
  },
  style(node, name, value = undefined) {
    if (!!value && typeof value === "string") {
      node.style[name] = value
    } else if (!value && type(name) === "object") {
      for (let key in name) {
        node.style[key] = name[key]
      }
    } else {
      return node.style[name]
    }
  },
  on(node, eventType, cb) {
    node.addEventListener(eventType, cb)
  },
  off(node, eventType, cb) {
    node.removeEventListener(eventType, cb)
  },
}

function type(val) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}
