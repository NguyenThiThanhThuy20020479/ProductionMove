<!DOCTYPE html>
<html lang="en">
<head>
@include('.header')
</head>
<body>
<section class="login h-100" style="margin-top: 15px;">
    <div class="h-100 d-flex justify-content-center align-content-center mt-30 ">
    <div class="container ">
        <div class="row g-0 main w-80 mx-auto ">
            <div class="col-lg-5 container-fluid ">
                <div class="h-100 d-flex justify-content-center align-content-center ">
                    <img src="/images/car-editinmr9.jpeg" alt="" class = "img-fluid">
                </div>
            </div>
            <div class="col-lg-7 text-center py-3">
                <h1 class= "">Welcome Back</h1>
                <div class="container-fluid w-95">
                    <form action="/admin/user/login/submit" method = "post" class="was-validated mx-5">
                        <!-- Email -->
                        <div class="form-row py-3 pt-5"> 
                                <input type="email" class="inp form-control is-valid" name ="email" placeholder="Email" required >
                        </div>
                        <!-- password -->
                        <div class="form-row py-3">
                                <input type="password" class="inp form-control is-valid" name = "password" placeholder="Password" required>
                        </div>
                        <!-- Remeber/forgot -->
                        <div class=" d-lg-flex justify-content-between align-content-center mt-2 ms-3 ">
                            <div class="form-check ">
                                <input type="checkbox" class="form-check-input" id = "checkRemember" > 
                                <label for="checkRemember" class ="custom ">Remember Me</label>
                            </div>
                            <a href="#">Forgot password?</a>
                        </div>
                        <!-- button -->
                        <div class="text-center mt-4 pt-8">
                            <button type="submit" class="btn btn-primary btn-md w-80">Login</button>
                            <p class = "small mt-2 pt-1 mb-0">Don't have an account? <a href="signUp.html">Register</a></p>
                        </div>
                        <!-- social -->
                        <p>Or Login With</p>
                        <button type="button" class=" btn-floating mx-1 ">
                            <i class="fa-brands fa-facebook facebook "></i>
                        </button>
                        <button type="submit" class=" btn-floating mx-1 ">
                            <i class="fa-brands fa-google google "></i>
                        </button>
                        @csrf
                    </form>
                </div>

            </div>
        </div>
    </div>
    </div>
</section>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
  @include('.footer')
</body>
</html>