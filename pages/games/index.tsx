
import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import List from "../../components/List"
import { Game } from "../../interfaces"
import { sampleGameData } from "../../utils/sample-data"
import Link from "next/link"

type Props = {
    items: Game[]
}

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Games List">
        <h1>Games List</h1>
        <p>
            Example fetching data from Inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /games</p>
        <List items={items} />
        <p>
            <Link href="/">Go home</Link>
        </p>
    </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
    const items: Game[] = sampleGameData
    return { props: { items } }
}

export default WithStaticProps