import React from "react";
import { Row, Col, Tooltip, Divider, Checkbox } from "antd";

import { Form, Input } from "antd";

import { InfoCircleOutlined } from "@ant-design/icons";
import { User } from "../../../assets/Icons/JSXs";

import "./checkbox-addrole.styles.scss";
import { useState } from "react";
const CheckboxGroup = Checkbox.Group;
const plainOptions = ["Live view", "Play back", "Devies", "User"];
const defaultCheckedList = ["", ""];
const CheckboxAddrole = ({
  span,
  offset,
  inputs,
  handleChange,
  type,
  placeholder,
  empty,
  value,
  disabled
}) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);
  const onChange = (list) => {
    console.log("list checkbox    "+list);
    setCheckedList(list);
    setIndeterminate(!!list.length && list.length < plainOptions.length);
    setCheckAll(list.length === plainOptions.length);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
    setIndeterminate(false);
    setCheckAll(e.target.checked);
  };
  return (
    <>
      <Checkbox
        indeterminate={indeterminate}
        onChange={onCheckAllChange}
        checked={checkAll}
        disabled={disabled}
      >
        Check all
      </Checkbox>
      <Divider />
      <CheckboxGroup
        options={plainOptions}
        value={checkedList}
        onChange={onChange}
        disabled={disabled}
      />
    </>
  );
};

export default CheckboxAddrole;
