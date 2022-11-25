@extends('.main')
@section('content')
<body class="hold-transition login-page">
<section class="h-100 login" style="margin-top:10px;">
    <div class="h-100 d-flex justify-content-center align-content-center ">
    <div class="container ">
        <div class="row g-0 main w-80 mx-auto">
            <div class="col-lg-5 container-fluid ">
                <div class="h-100 d-flex justify-content-center align-content-center ">
                    <img src="/images/car-editinmr9.jpeg" alt="" class = "img-fluid">
                </div>
            </div>
            <div class="col-lg-7 text-center py-3">
                <h2>Sign Up</h2>
                <div class="container-fluid w-95">
                    <form action="/admin/menu/add/submit" method = "post" class="was-validated mx-5">
                        <!-- user name -->
                        <div class="form-row py-3 pt-2"> 
                                <input type="text" class="inp form-control is-valid " name="name" placeholder="Username" required >
                        </div>
                        <!-- Email -->
                        <div class="form-row py-3"> 
                            <input type="email" class="inp form-control is-valid"name = "email" placeholder="Email" required >
                        </div>
                        <!-- password -->
                        <div class="form-row py-3">
                                <input type="password" class="inp form-control is-valid" name="password" placeholder="Password"  required>
                        </div>
                        <!-- Repeat password -->
                        <div class="form-row py-3">
                            <input type="password" class="inp form-control is-valid" placeholder="Confirm Password" required>
                        </div>
                        <!--  -->
                        <div class="form-row py-3 form-check ">
                            <select class="form-check is-invalid inp" name = "role" id="validationServer04" aria-describedby="validationServer04Feedback" required>
                            <option class ="inp" selected disabled value="" >Permission</option>
                            <option value="Trung tâm bảo hành">Trung tâm bảo hành</option>
                            <option value="Cơ sở sản xuất">Cơ sở sản xuất</option>
                            <option value="Đại lí phân phối">Đại lí phân phối</option>
                            </select>
                        </div>
                        <!-- button -->
                        <div class="text-center mt-4 pt-8">
                            <button type="submit" class="btn btn-primary btn-md w-80">Sign Up</button>
                        </div>
                        @csrf
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
</section>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
</html>
@endsection