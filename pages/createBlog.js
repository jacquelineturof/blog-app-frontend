import React from 'react'

import CreateBlog from '../components/BlogForm'

const styles = {
    container: {
        height: '95vh',
        width: '100vw'
    }
}

const createBlog = () => (
    <section style = { styles.container }>
       <CreateBlog />
    </section>
)

export default createBlog