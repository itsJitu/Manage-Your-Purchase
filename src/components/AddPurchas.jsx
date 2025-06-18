
import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { CiCirclePlus } from "react-icons/ci";
import { IoMdCloseCircle } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

import "./AddPurchase.css";

function AddPurchase() {
  
  const [value, setValue] = useState('');
  const quillRef = useRef(null);
  
  // Toolbar options matching the screenshot
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      ['bold', 'italic', 'underline'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image', 'video'],
      ['code-block'],
      ['clean']
    ],
  };
 
  // Word count logic
  const handleChange = (content) => {
    const text = content.replace(/(<([^>]+)>)/gi, ''); // Strip HTML tags
    const wordCount = text.trim().split(/\s+/).filter(word => word.length > 0).length;
    if (wordCount <= 60) {
      setValue(content);
    }
  };
 
  // Workaround for findDOMNode issue
  useEffect(() => {
    if (quillRef.current) {
      const editor = quillRef.current.getEditor();
      editor.root.setAttribute('data-placeholder', 'Type the message');
    }
  }, []);



  return (
    <>
      <div>
        <div className="header">
          <h1>Add Purchase</h1>
          <Link to="/">
          <IoMdCloseCircle className="close" />
          </Link>
        </div>

        <div className="pro">
          {/* Supplier Date & Reference */}
          <div className="hero">
            {/*supplier */}
            <div className="box">
              <p>
                Supplier Name <span className="thunder">*</span>
              </p>
              <div className="circle-icon">
                <select className="input">
                  <option>select</option>
                </select>
                {/* for icon */}
                <button className="button">
                  <CiCirclePlus className="plus" />
                </button>
              </div>
            </div>

            {/* Date */}

            <div className="box">
              <p>
                Date <span className="thunder">*</span>
              </p>
              <input type="date" className="input"></input>
            </div>

            {/* Reference */}

            <div className="box">
              <p>
                Reference <span className="thunder">*</span>
              </p>
              <input type="text" className="input"></input>
            </div>
          </div>

          {/* Search Product */}
          <div className="product">
            <p className="para">
              Product <span className="thunder">*</span>
            </p>
            <input type="text" className="search-product" placeholder="Search Product"></input>
          </div>

          {/* Product Details */}
          <div className="inner">
            <div className="outer">
              <p>Product</p>
              <p>Qty</p>
              <p> Purchase price($)</p>
              <p>Discount($)</p>
              <p>Tax(%)</p>
              <p>Tax Amount($)</p>
              <p>Unit Cost($)</p>
              <p>total Cost(%)</p>
            </div>

            <div className="page">
              <div className="row">
                <p>Row Per Page </p>
                <select className="
                ten">
                  <option>10</option>
                </select>
                <p>Entries</p>
              </div>
              <div className="arrow">
                {/* icon*/}
                <IoIosArrowBack />
                {/* number */}
                <div className="one">
                  1
                </div>
                {/* icon */}
                <IoIosArrowForward />
              </div>
            </div>
          </div>

          {/* order Tax Discount Shipping & Status */}
          <div className="order">
            {/* Order Tax*/}
            <div className="tax">
              <p>Order tax <span className="thunder">*</span></p>
              <input type="text" className="input-box"></input>
            </div>

            {/* Discount */}
            <div className="tax">
              <p>Discount <span className="thunder">*</span></p>
              <input type="text" className="input-box"></input>
            </div>

            {/* Shipping */}
            <div className="tax">
              <p>Shipping <span className="thunder">*</span></p>
              <input type="text" className="input-box"></input>
            </div>

            {/* Status */}
            <div className="tax">
              <p>Status <span className="thunder">*</span></p>

              <select className="status">
                <option className=""> Select</option>
              </select>
            </div>
          </div>

         <div>
           <div>
            <p className='tax'>Description</p>
            <ReactQuill ref={quillRef} theme="snow" value={value} onChange={handleChange} modules={modules} placeholder="Type the message" className="box-5"/>
          </div>
          <p className='words'>
            Maximum 60 Words
          </p>
         </div>
        </div>
        <hr></hr>

        {/* Footer button */}

        <div className='footer'>

          <div className='footer-button'>
            <Link to="/" className='cancel'>
              Cancel
            </Link>
         
            <a href="Product-details" className='submit'>
              Submit
            </a>
          </div>

        </div>

      </div>
    </>
  );
}

export default AddPurchase;
