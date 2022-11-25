<!DOCTYPE html>
<html lang="en">
<head>
  @include('.header1')
</head>
<body class="hold-transition sidebar-mini">
<div class="wrapper">
  @include('.navbar')
  @include('.slidebar')
    <div class="content-wrapper">
    <section class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card card-primary mt-3">
              <div class="card-header ">
                <h3 class="card-title">{{$title}}</h3>
              </div>
              @yield('content')
            </div> 
            </div>
        </div>     
      </div>
    </section>
  </div>
</div>
@include('.footer')
</body>
</html>
