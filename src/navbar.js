import React from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
    const navBarHeight = 50;

    return (
        <div>
            <nav style={{ display: 'flex', width: '100%', justifyContent: 'center', position: 'fixed', marginTop: '50px', backgroundColor: '#fff', zIndex: 1000 }}>
                <ScrollLink
                    to="page1"
                    smooth={true}
                    duration={200}
                    offset={-navBarHeight}
                    style={{ margin: '0 30px', cursor: 'pointer', color: 'green', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}
                >
                    Page1
                </ScrollLink>
                <ScrollLink
                    to="page2"
                    smooth={true}
                    duration={200}
                    offset={-navBarHeight}
                    style={{ margin: '0 30px', cursor: 'pointer', color: 'green', textAlign: 'center', padding: '14px 16px', textDecoration: 'none' }}
                >
                    Page2
                </ScrollLink>
            </nav>
        </div>
    );
};

export default Navbar;
