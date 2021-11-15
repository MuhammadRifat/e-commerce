import React, { Suspense } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Header from "./components/common/Header";
import SideNav from "./components/common/SideNav";
import Product from "./pages/Product/Product";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));


const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const AppRouter = () => {
    return (
        <Router>
            <Header />
            <Container>
                <Row>
                    <Col md={3} className="p-0">
                        <SideNav />
                    </Col>
                    <Col md={9} className="p-0">
                        <Suspense fallback={<div>Loading..</div>}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/category/:categoryName" element={<Category />} />
                                <Route path="/product/:id" element={<Product />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Suspense>
                    </Col>
                </Row>
            </Container>
        </Router>
    );
};

export default AppRouter;