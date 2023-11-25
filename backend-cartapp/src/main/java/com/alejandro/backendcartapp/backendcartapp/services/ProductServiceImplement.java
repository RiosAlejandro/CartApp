package com.alejandro.backendcartapp.backendcartapp.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.alejandro.backendcartapp.backendcartapp.models.entities.Product;
import com.alejandro.backendcartapp.backendcartapp.repositories.ProductRepository;

@Service
public class ProductServiceImplement implements ProductService {

  @Autowired
  private ProductRepository repository;

  @Override
  @Transactional(readOnly = true)
  public List<Product> findAll() {
    return (List<Product>)repository.findAll();
  }
}
