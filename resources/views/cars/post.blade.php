@extends('layout')

@section('content')
<form class="form-control carPost" action="#" method="post">
  <div class="row form-group">
    <label for="manufacturer-name" class="col-2 col-form-label">Manufacturer</label>
    <div class="col-10">
      <select class="form-control" name="manufacturer-name" id="manufacturers">

      </select>
    </div>
  </div>
  <div class="form-group row">
    <label for="name" class="col-2 col-form-label">Name</label>
    <div class="col-10">
      <input id="name" class="form-control" type="text">
    </div>
  </div>
  <div class="form-group row">
    <label for="year-of-production" class="col-2 col-form-label">Model year</label>
    <div class="col-10">
      <input id="modelYear" class="form-control" type="number">
    </div>
  </div>
  <div class="form-group row">
    <label for="number-of-dors" class="col-2 col-form-label">Body Style</label>
    <div class="col-10">
      <input id="bodyStyle" class="form-control" type="number">
    </div>
  </div>
  <div class="form-group row">
    <label for="color" class="col-2 col-form-label">Color</label>
    <div class="col-10">
      <input id="color" class="form-control" type="color">
    </div>
  </div>
</form>
<div class="row">
  <button id="post-car" class="carPostButton btn btn-success" type="button" name="button">Submit</button>
</div>
@endsection

@section('js')
<script src="{{asset('js/manufacturers.js')}}"></script>
<script src="{{asset('js/postCars.js')}}"></script>
@endsection
