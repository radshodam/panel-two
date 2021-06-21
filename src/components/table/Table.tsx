import React from 'react'
import styled from 'styled-components'
import Icon from '../icon/Icon';

const StyleTable = styled.table`
background: white;
direction: rtl;
    padding: 11px;
    margin: 48px;
    text-align: right;
    height: fit-content;
    border-radius: 9px;

 box-shadow: #dce9f5 2px 0px 8px;
    width:90%;
    thead{
        height: 50px;
    }
    th{
        font-weight: 500;
        padding-right: 8px;
        border-bottom: 1px solid #d2d2d2;
    }
    td{
        font-weight: 400;

        padding-right: 8px;
        border-left: 1px solid #dce9f5;
    }
  tr{
      height: 65px;
      padding: 12px;
  }
    tr:nth-child(even) {
    background-color: #eee;
};`




const TableHead = ["نام محصول", "برند", "قیمت خرید (ریال)", "قیمت فروشی (ریال)", "عملیات"];


const TableList = [
    {
        name: " شکلات",
        brand: "شیرین عسل",
        _id: "56cf587fe46adb3b8960afe2",
        purchasePrice: 1800,
        salesprice: 2200,
        title: "2415",


    }, {
        name: "بیسکوییت",
        brand: " مینو",
        _id: "56db2bd434df9046e0643d22",
        purchasePrice: 2000,
        salesprice: 2500,
        title: "HENRIKSDAL",
    }, {
        name: "شیرینی",
        brand: "کاله",

        _id: "56cf587fe46adb3b8960afe2",
        purchasePrice: 3000,
        salesprice: 3500,
        title: "+65+",

    }, {
        name: "شکلات",
        brand: "شیرین عسل",
        _id: "56cf587fe46adb3b8960afe2",
        purchasePrice: 1800,
        salesprice: 2200,
        title: "2415",
    }, {
        name: "بیسکوییت",
        brand: " مینو",
        _id: "56db2bd434df9046e0643d22",
        purchasePrice: 2000,
        salesprice: 2500,
        title: "HENRIKSDAL",
    }, {
        name: "شیرینی",
        brand: "کاله",

        _id: "56cf587fe46adb3b8960afe2",
        purchasePrice: 3000,
        salesprice: 3500,
        title: "+65+",

    }
];

const Table: React.FC = () => {
    return (
        <div>

            <StyleTable>
                <thead>
                    <tr>
                        {
                            TableHead.map((item) => (
                                <th>{item}</th>

                            ))
                        }
                    </tr>
                </thead>

                <tbody>
                    {
                        TableList.map((item, index,) => (

                            <>
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.brand}</td>
                                    <td>{item.purchasePrice}</td>
                                    <td>{item.salesprice}</td>
                                    <td>
                                        <button>
                                            <Icon iconTitle={"edit-1"} color={"green"} size={45} />
                                        </button>
                                        <button>
                                            <Icon iconTitle={"trash"} color={"red"} size={45} />
                                        </button>
                                        <button>
                                            <Icon iconTitle={"list-alt"} color={"black"} size={45} />
                                        </button></td>


                                </tr>
                            </>
                        ))
                    }
                </tbody>



            </StyleTable>
            <h1>pagenation</h1>
        </div>
    )
}

export default Table
