import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/product";
import { Row, Col } from "react-bootstrap";
import axios from "axios";
import { listProducts } from "../actions/productActions";
import Loader from "../components/loader";
import Message from "../components/message";
//import products from "../products";
//use selector is used to select parts of the state

const HomeScreen = () => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  //useselector matlab hamne productList Reducer jo ki store me define hai uski state ko access kiya
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);

  return (
    <>
      <h1>Latest products</h1>
      {loading ? (
        <Loader></Loader>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => {
            return (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            );
          })}
        </Row>
      )}
    </>
  );
};

export default HomeScreen;
