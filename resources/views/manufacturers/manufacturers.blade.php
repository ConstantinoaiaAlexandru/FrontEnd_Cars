@extends('layout')

@section('content')
<main role="main">

  <section class="jumbotron text-center">
    <div class="container">
      <h1 class="jumbotron-heading">Manufacturers</h1>
      <p>Manufacturers Details.</p>
      <a href="/manufacturers/post" class="btn btn-primary my-2">Add Manufacturer</a>
    </p>
  </div>
</section>

<div class="album py-5 bg-light">
  <div class="container">

    <div class="row" id="manufacturer-body">

    </div>
  </div>
</div>

</main>
@endsection

@section('js')
<script src="{{asset('js/manufacturersView.js')}}"></script>
<script src="{{asset('js/manufacturersDelete.js')}}"></script>
@endsection
