@extends('layout')

@section('content')

<div class="container">
  <div class="row" id="carEdit" data-id="{{ $id }}">

  </div>
</div>

@endsection

@section('js')
<script src="{{asset('js/edit.js')}}"></script>
<script src="{{asset('js/manufacturersForEdit.js')}}"></script>
<script src="{{asset('js/EditSubmit.js')}}"></script>
@endsection
