export function Layout(props:any) {

    return (
        <>
            <header>header</header>
            <main>
                {props.children}
            </main>
            <footer>
                footer
            </footer>
        </>
    )
}

