import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className="text-center mt-5">
            <p>Copyright  Ⓒ{year}</p>
      {/* <p style={{textAlign: "center"}}> 
      Copyright &copy; 2014-
      <script>{document.write(new Date().getFullYear())}</script>
       Rakib ul Islam All Rights Reserved</p> */}

            
        </footer>
    );
};

export default Footer;