import React from 'react';

const Breadcrumb = () => {
    return (
        <div>
            <div className="header_banner_wrapper">
				<div className="header_banner_innrwrapper">
					<div className="profile_inner_header clearfix">
							<h1 className="pull-left">Manage Profile</h1>
						<div className="pull-right view_article_content branding_viewonly mobile_view">
							<button className="font_14 light_yellow_color no_text_decoration getting_preview_manage_mobile view_article_btn border_radius_common"><span>View Example</span></button>
						</div>
					</div>
				</div>
				<div className="header_banner_overlay"></div>
			</div>
        </div>
    );
};

export default Breadcrumb;