import "./Purchase.css";
import { Link } from "react-router-dom";
import { BiSolidFilePdf } from "react-icons/bi";
import { BsFiletypeXml } from "react-icons/bs";
import { GrRefresh } from "react-icons/gr";
import { FaAngleUp } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { AiOutlineDownload } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoEyeOutline } from "react-icons/io5";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBinFill } from "react-icons/ri";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const dummyData = [
  {
    id: 1,
    date: "24 Dec 2024",
    supplierName: "Electro Mart",
    referenceNumber: "PT001",
    status: "Received",
    amount: 1500.0,
    amountPaid: 500.0,
    dueAmount: 1000.0,
    paymentStatus: "Paid",
  },
  {
    id: 2,
    date: "10 Dec 2024",
    supplierName: "Quantum Gadgets",
    referenceNumber: "PT002",
    status: "Pending",
    amount: 1500.0,
    amountPaid: 0.0,
    dueAmount: 1500.0,
    paymentStatus: "Unpaid",
  },
  {
    id: 3,
    date: "27 Nov 2024",
    supplierName: "Prime Bazar",
    referenceNumber: "PT003",
    status: "Received",
    amount: 1500.0,
    amountPaid: 1800.0,
    dueAmount: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: 4,
    date: "180Nov 2024",
    supplierName: "Gadget World",
    referenceNumber: "PT004",
    status: "Ordered",
    amount: 2000.0,
    amountPaid: 1000.0,
    dueAmount: 1000.0,
    paymentStatus: "Overdue",
  },
  {
    id: 5,
    date: "06 Nov 2024",
    supplierName: "Volt Vault",
    referenceNumber: "PT005",
    status: "Received",
    amount: 800.0,
    amountPaid: 800.0,
    dueAmount: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: 6,
    date: "25 Oct 2024",
    supplierName: "Elite Retail",
    referenceNumber: "PT006",
    status: "Pending",
    amount: 750.0,
    amountPaid: 0.0,
    dueAmount: 750.0,
    paymentStatus: "Unpaid",
  },
  {
    id: 7,
    date: "14 Oct 2024",
    supplierName: "Prime Mart",
    referenceNumber: "PT007",
    status: "Received",
    amount: 1300.0,
    amountPaid: 1300.0,
    dueAmount: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: 8,
    date: "03 Oct 2024",
    supplierName: "NeoTech Store",
    referenceNumber: "REF-004",
    status: "Received",
    amount: 1100.0,
    amountPaid: 1100.0,
    dueAmount: 0.0,
    paymentStatus: "Paid",
  },
  {
    id: 9,
    supplierName: "Urban Mart",
    referenceNumber: "PT009",
    date: "2025-06-07",
    status: "Ordered",
    amount: 3200.0,
    amountPaid: 3200.0,
    dueAmount: 3200.0,
    paymentStatus: "Paid",
  },
  {
    id: 10,
    supplierName: "Delta Imports",
    referenceNumber: "REF-004",
    date: "2025-06-07",
    status: "Pending",
    amount: 3200.0,
    amountPaid: 1000.0,
    dueAmount: 2200.0,
    paymentStatus: "Paid",
  },
];

const SupplierRow = ({ supplier }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Received": return "approved";
      case "Pending": return "pending";
      case "Order": return "rejected";
      default: return "return";
    }
  };

  const getPaymentStatusColor = (paymentStatus) => {
    switch (paymentStatus) {
      case "Paid": return "fpaid";
      case "Unpaid": return "ppaid";
      case "Overdue": return "upaid";
      default: return "rpaid";
    }
  };

  return (
      <tr className="t-row">
        <td><input type="checkbox" /></td>
        <td>{supplier.supplierName}</td>
        <td>{supplier.referenceNumber}</td>
        <td>{supplier.date}</td>
        <td><span className={`${getStatusColor(supplier.status)}`}>{supplier.status}</span></td>
        <td>${supplier.amount.toFixed(2)}</td>
        <td>${supplier.amountPaid.toFixed(2)}</td>
        <td>${supplier.dueAmount.toFixed(2)}</td>
        <td><span className={`${getPaymentStatusColor(supplier.paymentStatus)}`}> • {supplier.paymentStatus}</span></td>
         <td><span className="three-icon" style={{textAlign:'center', display:'flex'}}>
              <IoEyeOutline className="eye" />
              <FaRegEdit className="eye" />
              <RiDeleteBinFill className="eye" /></span>
            </td>
      </tr>
   
  );
};

function Purchase() {
  const filteredData = dummyData;

  const paginatedData = filteredData;

    return (
      <>
        <div className="main">
          <div className="mul-icon">
            <div>
              <span>Purchase</span>
              <br></br>
              <span className="nav">Manage Your purchase</span>
            </div>
            <div className="icon-import">
              <div className="pdf">
                {/* pdf */}
                <BiSolidFilePdf className="pdfi" />
                {/* excel */}
                <BsFiletypeXml className="excel" />
                {/* refresh */}
                <GrRefresh className="refresh" />
                {/* uparrow */}
                <FaAngleUp className="uparrow" />
              </div>
              <Link to="/AddPurchase" className="icon2">
                {" "}
                {/* pluse icon */}
                <CiCirclePlus className="pluse-circle" /> Add Purchases{" "}
              </Link>
              <button className="down">
                <AiOutlineDownload /> import Purchase
              </button>
            </div>
          </div>

          {/* Search tab */}
          <div className="search">
            <div className="tab-search">
              <div className="search-box">
                <IoIosSearch />{" "}
                <input type="text" placeholder="search" className="search-bar" />
              </div>
              <select name="" id="" className="select">
                <option>Payment Status</option>
              </select>
            </div>

            {/* Dummy Data */}

            <div></div>
          </div>

               <div className='details-bar'>
                  <div className='pro-det'>
                      <table className="tab">
                          <thead>
                              <tr>
                                  <th style={{textAlign:"start"}}><input type='checkbox'></input></th>
                                  <th style={{textAlign:"start"}}>Supplier Name</th>
                                  <th style={{textAlign:"start"}}>Reference</th>
                                  <th style={{textAlign:"start"}}>Date</th>
                                  <th style={{textAlign:"start"}}>Status</th>
                                  <th style={{textAlign:"start"}}>Total</th>
                                  <th style={{textAlign:"start"}}>Paid</th>
                                  <th style={{textAlign:"start"}}>Due</th>
                                  <th style={{textAlign:"start"}}>Payment</th>
                                  <th></th>
                              </tr>
                          </thead>
                          <tbody>
                                   {paginatedData.map((supplier) => (<SupplierRow key={supplier.id} supplier={supplier} />))}
                          </tbody>
                      </table>

                  </div>

               </div>

               <div className="setting">
                      <span>
                      <IoSettingsOutline  className="i-setting"/>
                      </span>
                  </div>

          {/* Footer */}
          <div className="sec">
            <div className="raw">
              <p>Row Per Page </p>
              <select
                className="opt">
                <option>10</option>
              </select>
              <p>Entries</p>
            </div>
            <div className="arrow-back">
              {/* icon*/}
              <IoIosArrowBack />
              {/* number */}
              <div className="num">1</div>
              {/* icon */}
              <IoIosArrowForward />
            </div>
          </div>
        </div>
      </>
    );
}

export default Purchase;
