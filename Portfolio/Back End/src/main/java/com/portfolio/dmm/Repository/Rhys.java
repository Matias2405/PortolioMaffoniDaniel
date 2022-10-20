/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.dmm.Repository;


import com.portfolio.dmm.Entity.Hys;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Rhys extends JpaRepository<Hys, Integer>{
    Optional<Hys> findByNombre(String nombre);
    public boolean existsByNombre(String nombre);
}
