import React from "react";
import styled from "styled-components";
import Icon from "../icon/Icon";
const StyleTable = styled.table`
  background: white;
  direction: rtl;
  padding: 11px;
  margin: 48px;
  text-align: right;
  height: fit-content;
  border-radius: 9px;

  box-shadow: #dce9f5 2px 0px 8px;
  width: 90%;
  thead {
    height: 50px;
  }
  th {
    font-weight: 500;
    padding-right: 8px;
    border-bottom: 1px solid #d2d2d2;
  }
  td {
    font-weight: 400;

    padding-right: 8px;
    border-left: 1px solid #dce9f5;
  }
  tr {
    height: 65px;
    padding: 12px;
  }
  tr:nth-child(even) {
    background-color: #eee;
  }
`;
interface TableProps {
  data: any[] | undefined;
  headers: string[];
}
const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <div>
      <StyleTable>
        <thead>
          <tr>
            {headers.map((item) => (
              <th>{item}</th>
            ))}
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data?.map((row) => {
            return (
              <tr key={row.id}>
                {headers.map((key, index) => {
                  return <td key={index}>{row[key]}</td>;
                })}
                <td>
                  <button>
                    <Icon iconTitle={"edit-1"} color={"green"} size={45} />
                  </button>
                  <button>
                    <Icon iconTitle={"trash"} color={"red"} size={45} />
                  </button>
                  <button>
                    <Icon iconTitle={"list-alt"} color={"black"} size={45} />
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </StyleTable>
      <h1>pagenation</h1>
    </div>
  );
};

export default Table;
