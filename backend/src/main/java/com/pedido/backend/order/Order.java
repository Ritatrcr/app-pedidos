

package com.pedido.backend.order;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "orders")
public class Order {
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  @NotBlank
  private String nombre;

  @NotBlank
  private String pedido;

  public Order() {}
  public Order(String nombre, String pedido) { this.nombre = nombre; this.pedido = pedido; }

  public Long getId() { return id; }
  public String getNombre() { return nombre; }
  public String getPedido() { return pedido; }

  public void setId(Long id) { this.id = id; }
  public void setNombre(String nombre) { this.nombre = nombre; }
  public void setPedido(String pedido) { this.pedido = pedido; }
}
