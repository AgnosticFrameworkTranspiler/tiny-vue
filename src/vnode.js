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
    vnode.el.parentNode.removeChild(vnode.el)
}

// compare difference two vnodes
function patch(vnode1, vnode2) {
    const el = (vnode2.el = vnode1.el)

    // if nodes are of diffrent tags we can assube that the content is entirely diffrent
    if (vnode1.tag !== vnode2.tag){
        mount(vnode2, el.parentNode)
        unmount(vnode1)
    }
    // if the node are the same tags it can mean two diffrent things
    // 1) the new node string children
    // 2) the new node has an array of children
    else {
        // 1) the new node string children
        if (typeof vnode2.children === 'string') {
            el.textContent = vnode2.children
        }
        // 2) the new node has an array of children
        else {
            // we have three scenario here :
            // the length of children is the same
            // the old node more children than the new node
            // the new node has more children than the old node


            // we need to recognize the length of children
            const c1 = vnode1.children
            const c2 = vnode2.children
            const commonLength = Math.min(c1.length, c2.length)

            // patch
            for (let i = 0; i < commonLength; i++) {
                patch(c1[i], c2[i])
            }

            // the old node more children than the new node
            if (c1.length > c2.length) {
                c1.slice(c2.length).forEach(child => {
                    unmount(child)
                })
            }
            // the new node has more children than the old node
            else if (c2.length > c1.length) {
                c2.slice(c1.length).forEach(child => {
                    mount(child, el)
                })
            }


        }
    }

}

module.exports = {
    h,
    mount,
    unmount,
    patch
}
