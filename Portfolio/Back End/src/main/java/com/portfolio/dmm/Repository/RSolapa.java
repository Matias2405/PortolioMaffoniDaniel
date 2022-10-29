/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.portfolio.dmm.Repository;

import com.portfolio.dmm.Entity.Solapa;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RSolapa extends JpaRepository<Solapa,Integer>{
    public Optional<Solapa> findByImg(String img);
    public boolean existsByImg(String img);
}
