import React from "react";
import { Table } from "antd";

const customSorter = (a, b) =>
  isNaN(a) && isNaN(b) ? (a || "").localeCompare(b || "") : a - b;

const CustomTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Nama",
      dataIndex: "hospitalName",
      key: "hospitalName",
      /*filters: [
        {
          text: "Banten",
          value: "Banten",
        },
        {
          text: "DKI Jakarta",
          value: "DKI Jakarta",
        },
      ],
      onFilter: (value, record) => record.hospitalName.indexOf(value) === 0,
      */
      sorter: (a, b) => customSorter(a.hospitalName, b.hospitalName),
    },
    {
      title: "Provinsi",
      dataIndex: "province",
      key: "province",
      sorter: (a, b) => customSorter(a.province, b.province),
    },
    {
      title: "Alamat",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => customSorter(a.address, b.address),
    },
    {
      title: "Telepon",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      sorter: (a, b) => customSorter(a.phoneNumber, b.phoneNumber),
    },
  ];

  function onChange(pagination, filters, sorter, extra) {
    console.log("params", pagination, filters, sorter, extra);
  }

  return (
    <Table
      pagination={true}
      columns={columns}
      dataSource={dataSource}
      onChange={onChange}
    />
  );
};

export default CustomTable;
