/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dmm.Service;

import com.portfolio.dmm.Entity.Solapa;
import com.portfolio.dmm.Repository.RSolapa;
import java.util.List;
import java.util.Optional;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Transactional
@Service
public class SSolapa {
@Autowired 
    RSolapa rSolapa;
    
    public List<Solapa> list(){
        return rSolapa.findAll();
    }
    
    public Optional<Solapa> getOne(int id){
        return rSolapa.findById(id);
    }
    
    public Optional<Solapa> getByImg(String img){
        return rSolapa.findByImg(img);
    }
    
    public void save(Solapa expe){
        rSolapa.save(expe);
    }
    
    public void delete(int id){
        rSolapa.deleteById(id);
    }
    
    public boolean existsById(int id){
        return rSolapa.existsById(id);
    }
    
    public boolean existsByImg(String img){
        return rSolapa.existsByImg(img);
    }
}
