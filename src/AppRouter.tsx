import React, { Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home/Home"));
const Category = React.lazy(() => import("./pages/Category/Category"));
const Blog = React.lazy(() => import("./pages/Blog/Blog"));


const NotFound = React.lazy(() => import("./components/NotFound/NotFound"));

const AppRouter: React.FC = ({ children }) => {
    return (
        <Router>
            {
                children
            }

            <Suspense fallback={<div>Loading..</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:categoryName" element={<Category />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </Router>
    );
};

export default AppRouter;