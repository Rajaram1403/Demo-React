import React from 'react';
import Footer from '../Footer/Footer';
import BlogNavbar from '../CustomNavbar/CustomNav';
import Breadcrumb from '../Brodcrump/Breadcrumb';
import Sidebar from '../Sidebar/Sidebar';

const BlogSettings = () => {
    return (
        <div>
            <BlogNavbar/>
            <Breadcrumb/>
            <Sidebar/>
            <Footer/>
        </div>
    );
};

export default BlogSettings;