<?php
namespace App\Services;

use App\Repositories\WishesRepository;

class WishesService {
  public function __construct(protected WishesRepository $repository)
  {}

  public function getWhere(){
    return $this->repository->where('client_id', 1)->get();
  }

  public function storeData($data){
    $storeData = [
      'client_id' => $data['client_id'],
      'name' => $data['name'],
      'message' => $data['message'],
      'status' => $data['status'],
    ];

    return $this->repository->store($storeData);
  }
}