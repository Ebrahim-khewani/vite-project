
function AddProduct()
{ 
    return (
      <>
<div class="container">

 <div class="row mt-5 gap-3">
    <div class=" row-md-4 p-3 d-none alert alert-warning alert-dismissible fade show"  id="AddMessage" role="alert">
     product add
     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
   </div>
  <div class="row-md-4">
    <input type="text" class="form-control" id="productName"  placeholder="product name"/>
  </div>
  <div class="row-md-4 ">
    <input type="text" class="form-control" id="productDtl" placeholder="dtl"/>
  </div>
  <div class="row-md-4">
    <input type="text" class="form-control" id="productPrice" placeholder="price"/>
  </div>
  <div class="input-group row-md-4">
  <input type="file" class="form-control" id="inputfile" accept="image/png, image/jpeg"/>
  <img src="#" class="d-none img-thumbnail" id="imgPictur" alt=".."/>
</div>
</div>
<div class="row mt-3 mb-5 justify-content-center">
  <div class="row">
    <button class="btn btn-primary" id ="btn-add-prodcut">Add to Local Storage</button>
  </div>
</div>
</div>
</>
    );
}

export default AddProduct;