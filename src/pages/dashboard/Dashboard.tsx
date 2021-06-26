import Table from "../../components/table/Table";
import { StyleRow, StyledBTn, StyleSearch } from "./Styled";
import { TableHead, TableList } from "../../components/table/Item";

const Dashboard:React.FC = () => {
  return (
    <>
      <StyleRow>
        <StyleSearch
          type="search"
          id="site-search"
          name="q"
          placeholder="جستجو در محصولات"
        />
        <StyledBTn>افزودن محصول</StyledBTn>
      </StyleRow>
      <Table headers={TableHead} data={TableList}/>
    </>
  );
};

export default Dashboard;
