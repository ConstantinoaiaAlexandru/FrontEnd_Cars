@extends('layout')

@section('content')
<form class="form-control manufacturerPost" action="#" method="post">
  <div class="form-group row">
    <label for="manufacturerName" class="col-2 col-form-label">Manufacturer Name</label>
    <div class="col-10">
      <input id="manufacturerName" class="form-control" type="text">
    </div>
  </div>
</form>
<div class="row">
  <button id="post-manufacturer" class="manufacturerPostButton btn btn-success" type="button" name="button">Submit</button>
</div>
@endsection

@section('js')
<script src="{{asset('js/manufacturersPost.js')}}"></script>
@endsection
