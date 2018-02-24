@extends('layout')

@section('content')

<div class="container">
  <div class="row" id="manufacturerEdit" data-id="{{ $id }}">

  </div>
</div>

@endsection

@section('js')
<script src="{{asset('js/manufacturerEdit.js')}}"></script>
@endsection
