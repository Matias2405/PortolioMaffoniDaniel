/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dmm.Controller;

import com.portfolio.dmm.Dto.dtoSolapa;
import com.portfolio.dmm.Entity.Solapa;
import com.portfolio.dmm.Security.Controller.Mensaje;
import com.portfolio.dmm.Service.SSolapa;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequestMapping("/solapa")
@RestController
@CrossOrigin(origins = {"https://frontendmm-c0661.web.app","http://localhost:4200"})
public class CSolapa {
    @Autowired
    SSolapa sSolapa;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Solapa>> list(){
        List<Solapa> list = sSolapa.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    @GetMapping("/detail/{id}")
    public ResponseEntity<Solapa> getById(@PathVariable("id")int id){
        if(!sSolapa.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id"), HttpStatus.BAD_REQUEST);
        }
        Solapa solapa = sSolapa.getOne(id).get();
        return new ResponseEntity(solapa, HttpStatus.OK);
    }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?>update(@PathVariable("id") int id, @RequestBody dtoSolapa dtosolapa){
        if(!sSolapa.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id"), HttpStatus.NOT_FOUND);
        }
        
        Solapa solapa = sSolapa.getOne(id).get();
        
        solapa.setImg(dtosolapa.getImg());
        
        sSolapa.save(solapa);
        
        return new ResponseEntity(new Mensaje("Solapa actualizada"),HttpStatus.OK);
    }
    
}
