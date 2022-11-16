import React, { useState } from "react";
import Button from "../../common/Button";

import Card, { CardBody, CartTitle } from "../../common/Card";
import PageTitle from "../../common/PageTitle";
import Tables from "../../common/Tables";

const Categories = () => {
  const [loading, setLoading] = useState();

  const dataSource = [
    {
      key: "1",
      name: "Apple",
    },
    {
      key: "2",
      name: "Oppo",
    },
  ];
  const columns = [
    {
      title: "ID",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Category Name",
      dataIndex: "name",
      key: "name",
    },
  ];
  return (
    <div>
      <PageTitle>Categories Management</PageTitle>
      <Card width="100">
        <CartTitle>Categories Management</CartTitle>
        <CardBody>
          <div className="btn-10">
            <Button btn="btn-success">Add</Button>
            <Button btn="btn-warning">Edit</Button>
            <Button btn="btn-danger">Delete</Button>
          </div>
          <Tables
            limit={5}
            loading={loading}
            columns={columns}
            data={dataSource}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default Categories;
