import Table from '../../components/table/Table'
import { StyleRow, StyledBTn, StyleSearch } from './Styled'

const Dashboard = () => {
    return (
        <>
            <StyleRow>
                <StyleSearch type="search" id="site-search" name="q" placeholder="جستجو در محصولات" />
                <StyledBTn>افزودن محصول</StyledBTn>
            </StyleRow>
            <Table />
        </>
    )
}

export default Dashboard
