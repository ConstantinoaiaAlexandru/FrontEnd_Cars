@extends ('layout')

@section('content')
<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Cars Collection</h1>
      <p>Details about our cars.</p>
      <a href="/cars/post" class="btn btn-primary my-2">Add a car</a>
      <a href="/manufacturers" class="btn btn-secondary my-2">Manufacturers</a>
    </p>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row" id="car-body">

    </div>
  </div>
</div>

</main>

@endsection

@section('js')
<script src="{{asset('js/cars.js')}}"></script>
<script src="{{asset('js/delete.js')}}"></script>
@endsection
