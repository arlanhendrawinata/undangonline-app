<?php
namespace App\Repositories;

use App\Models\Wish;

class WishesRepository {
  public function __construct(protected Wish $model)
  {}

  public function where($column, $value){
    return $this->model->query()->where($column, $value)->orderByDesc('id');
  }

  public function store($data){
    return $this->model->create($data);
  }
}