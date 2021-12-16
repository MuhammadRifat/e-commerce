import React, { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import RightCart from "./components/common/RightCart";
import SideNav from "./components/common/SideNav";
import Product from "./pages/Product/Product";
import Skeleton from "./skeletons/Skeleton";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));


const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Container fluid>
                <Row>
                    <Col md={2} className="ps-1">
                        <SideNav />
                    </Col>
                    <Col md={10} className="p-0">
                        <Col lg={11}>
                            <Suspense fallback={<div>Loading..</div>}>
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/category/:categoryId" element={<Category />} />
                                    <Route path="/product/:id" element={<Product />} />
                                    <Route path="/blog" element={<Blog />} />
                                    <Route path="/skeleton" element={<Skeleton />} />
                                    <Route path="*" element={<NotFound />} />
                                </Routes>
                            </Suspense>
                        </Col>

                        <div className="sideCart">
                            <RightCart name="5 Items" />
                        </div>

                        <Footer />
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default AppRouter;