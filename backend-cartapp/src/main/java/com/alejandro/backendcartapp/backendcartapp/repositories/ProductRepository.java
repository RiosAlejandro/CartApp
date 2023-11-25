package com.alejandro.backendcartapp.backendcartapp.repositories;

import org.springframework.data.repository.CrudRepository;

import com.alejandro.backendcartapp.backendcartapp.models.entities.Product;

public interface ProductRepository extends CrudRepository<Product, Long> {
  
}
