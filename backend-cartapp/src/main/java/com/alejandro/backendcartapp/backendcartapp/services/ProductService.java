package com.alejandro.backendcartapp.backendcartapp.services;

import java.util.List;
import com.alejandro.backendcartapp.backendcartapp.models.entities.Product;

public interface ProductService {
  List<Product> findAll();
}
