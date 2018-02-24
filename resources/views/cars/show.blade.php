@extends('layout')

@section('content')

<div class="container">
  <div class="row" id="car" data-id="{{ $id }}">

  </div>
</div>

@endsection

@section('js')
<script src="{{asset('js/car.js')}}"></script>
@endsection
