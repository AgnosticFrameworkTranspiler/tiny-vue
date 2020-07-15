// Create virtual node
function h(tag, props, children) {
    // return the virtual node
    return{
        tag,
        props,
        children
    }
}

// mount a VNode to the DOM
// Mount a virtual node to the DOM
function mount(vnode, container) {
    // Create the element
    const el = (vnode.el = document.createElement(vnode.tag))

    // Set properties
    for (const key in vnode.props) {
        el.setAttribute(key, vnode.props[key])
    }

    // Handle children
    if (typeof vnode.children === 'string') {
        el.textContent = vnode.children
    } else {
        vnode.children.forEach(child => {
            mount(child, el)
        })
    }

    // Mount to the DOM
    container.appendChild(el)
}

//unmount a virtual node from the dom
function unmount(vnode) {
    //unmount the virtual node
}

// compare difference two vnodes
function patch(vnode1, vnode2) {
    // doing it for all the children recursively
    // where the nodes has different tags
    // where the nodes are same tags
    // where the new vnode has string children
    // where the new vnode has array of vnodes
}

module.exports = {
    h,
    mount,
    unmount,
    patch
}
