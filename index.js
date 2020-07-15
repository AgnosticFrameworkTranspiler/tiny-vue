import {patch,unmount,mount,h } from './src/vnode'


const node1 = h(
    'div',
    {
        class: 'container'
    },
    [
        h(
            'h1',
            null,
            'hello world'
        ),
        h(
            'p',
            null,
            'Ramin Rostami'
        )

    ]
)



const node2 = h(
    'div',
    {
        class: 'container'
    },
    [
        h(
            'h1',
            null,
            'bye world'
        ),
        h(
            'p',
            null,
            'Ramin Rostami'
        )

    ]
)

mount(node1, document.getElementById('app'))

// setTimeout(() => {
//     unmount(node1)
// }, 4000)



setTimeout(() => {
    patch(node1,node2)
}, 4000)
