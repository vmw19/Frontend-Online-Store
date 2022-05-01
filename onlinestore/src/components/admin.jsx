
import"./admin.css";
import{useState} from 'react';

const Admin = () => {
    const[product, setProduct] = useState({});
    const[coupon, setCoupon] = useState({});
    const[errorVisible, setErrorVisible] = useState({false});
    const[errorMessage, setErrorMessage] = useState({""});
    
    const handleTextChange = (e) => {
      let copy = {...product};
      copy[e.target.name]= e.target.value;

      setProduct(copy);
    };

    const handleCouponChange = (e) => {
        let copy  = {...coupon}
        copy[e.target.name]= e.target.value;

    };
    setProduct(copy);
    };
    const showError = (text => {
        setErrorMessage(text);
        setErrorMessage(true);
    }
    const handleSaveProduct = () =>{
        console.log(product);
        //validations
        if(product.title.length < 5){
            showError ("Error, Title should have 5 charac");
            return;
        }

        if(!product.image) {
            showError("Error, Image can not be empty");
            return;
        }
        if(!product.category) {
            showError("Error, Image can not be empty");
            return;
        }
        let savedProcuct = {...product};
        savedProduct.price = ParseFlot(product.price);

        if (!savedProduct.price || savedProduct.price<1){
            showError("Error, price should be greater than $1");
            return;
        }
        setErrorVisible(false);
        //send product to server
        console.log(SavedProduct);
    };

    const handleSaveCoupon = () =>{
        console.log(coupon);

        let savedCoupon = {...coupon};
        savedCoupon.discount = parseFloat(savedCoupon.discount);

        //validations:
        //1 discount can not be greater than 35%
        if(!savedCoupon.discount || savedCoupon.discount > 35){
            alert("Error, discount can not be lower than 1 or greater than 35%");
            return;
        }
         //2 code should have at least 5 chara
        if(savedCoupon.code.length < 5){
            alert("Error, savedCoupon code > = 5 characters");
            return;
            }
        
        setErrorVisible(false);
         //send coupon to server
         console.log("Saving coupon");
    };
   
    return (
        <div className="admin-page">
            {errorVisible?<div className="alert-alert-danger">{errorMessage}</div> : null}

        <div className="sections-container"> 
        <section className="sec-products">
            <h4> Manage Products</h4>

            <div className="form">

            <div className="my-control">
            <label>Title:</label>
                <input onChange={handleTextChange} name ="title" type ="text" />
                </div>
           
                <div className="my-control">
            <label>Image:</label>
                <input onChange={handleTextChange} name ="image" type ="text"/>
                </div>

                <div className="my-control">
            <label>Category:</label>
                <input onChange={handleTextChange} name ="category" type ="text"/>
                </div> 

                 <div className="my-control">
            <label>Price:</label>
                <input onChange={handleTextChange} name ="price" type ="number/>
                </div> 
           
                <div className="my-control">
                    <button onClick={handlesaveProduct} className="btn btn-dark">Register Product</button>

                </div> 
               </div> 

        </section>

        <section className ="sec-coupons">
            <h4> Manage Coupon Codes</h4>
            <div className="my-control">
            <label>Coupon Code:</label>
                <input onChange={handleCouponChange} name ="code" type ="text"/>
                </div> 
        </section>
       
                <div className="my-control">
            <label>Discount:</label>
                <input onChange={handleTextChange} name ="price"type ="number"/>
                </div> 
         
                <div className="my-control">
            <button onClick ={handleCouponChange} className="btn btn-dark">Register Coupon</button>
            </div> 
            </div> 
        </section>
        </div>
    </div>
    );
};

export default Admin;