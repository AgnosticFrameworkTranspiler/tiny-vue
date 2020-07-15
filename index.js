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

mount(node1, document.getElementById('app'))
