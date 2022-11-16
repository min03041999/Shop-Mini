import React, { Fragment } from "react";
import { Table } from "antd";

const Tables = (props) => {
  const { columns, data, loading, limit = 6 } = props;
  return (
    <Fragment>
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        pagination={{ pageSize: limit, showSizeChanger: false }}
        bordered
        rowSelection
      />
    </Fragment>
  );
};

export default Tables;
