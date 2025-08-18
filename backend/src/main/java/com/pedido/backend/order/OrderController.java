package com.pedido.backend.order;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin
public class OrderController {
  private final OrderRepository repo;
  public OrderController(OrderRepository repo) { this.repo = repo; }

  @GetMapping
  public List<Order> list() { return repo.findAll(); }

  @PostMapping
  public ResponseEntity<Order> create(@RequestBody Order order) {
    return ResponseEntity.ok(repo.save(order));
  }

  @DeleteMapping("/{id}")
  public ResponseEntity<Void> delete(@PathVariable Long id) {
    if (!repo.existsById(id)) {
      return ResponseEntity.notFound().build();
    }
    repo.deleteById(id);
    return ResponseEntity.noContent().build();
  }
}
