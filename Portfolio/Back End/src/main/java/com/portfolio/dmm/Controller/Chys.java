/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.portfolio.dmm.Controller;

import com.portfolio.dmm.Dto.dtoHys;
import com.portfolio.dmm.Entity.Hys;
import com.portfolio.dmm.Security.Controller.Mensaje;
import com.portfolio.dmm.Service.Shys;
import java.util.List;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/skill")
@CrossOrigin(origins = {"https://frontendmm-c0661.web.app","http://localhost:4200"})
public class Chys {
    @Autowired
    Shys shys;
    
    @GetMapping("/lista")
    public ResponseEntity<List<Hys>> list(){
        List<Hys> list = shys.list();
        return new ResponseEntity(list, HttpStatus.OK);
    }
    
    @GetMapping("/detail/{id}")
    public ResponseEntity<Hys> getById(@PathVariable("id")int id){
        if(!shys.existsById(id))
            return new ResponseEntity(new Mensaje("No existe el id"), HttpStatus.NOT_FOUND);
        Hys hys = shys.getOne(id).get();
        return new ResponseEntity(hys, HttpStatus.OK);
      }
    
      
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> delete(@PathVariable("id")int id){
        if(!shys.existsById(id)){
            return new ResponseEntity(new Mensaje ("No existe el id"), HttpStatus.NOT_FOUND);
            
        }
        shys.delete(id);
        return new ResponseEntity(new Mensaje("Skill eliminada"), HttpStatus.OK);
        }
    
    @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody dtoHys dtohys){
        if(StringUtils.isBlank(dtohys.getNombre())){
            return new ResponseEntity(new Mensaje("El nombre es obligatorio"), HttpStatus.BAD_REQUEST);
        }
        if(shys.existsByNombre(dtohys.getNombre())){
            return new ResponseEntity(new Mensaje("Ese skill ya existe"), HttpStatus.BAD_REQUEST);
        }
        
        Hys hys = new Hys(dtohys.getNombre(),dtohys.getPorcentaje());
        shys.save(hys);
        return new ResponseEntity (new Mensaje("Skill creado"), HttpStatus.OK);
        }
    
    @PutMapping("/update/{id}")
    public ResponseEntity<?>update(@PathVariable("id") int id, @RequestBody dtoHys dtohys){
        if(!shys.existsById(id)){
            return new ResponseEntity(new Mensaje("No existe el id"), HttpStatus.NOT_FOUND);
        }
        if(shys.existsByNombre(dtohys.getNombre()) && shys.getByNombre(dtohys.getNombre()).get().getId() != id){
            return new ResponseEntity(new Mensaje("Ese skill ya existe"), HttpStatus.BAD_REQUEST);
        }
        if(StringUtils.isBlank(dtohys.getNombre())){
            return new ResponseEntity(new Mensaje("El campo no puede estar vacio"), HttpStatus.BAD_REQUEST);
        }
        Hys hys = shys.getOne(id).get();
        
        hys.setNombre(dtohys.getNombre());
        hys.setPorcentaje(dtohys.getPorcentaje());
        
        shys.save(hys);
        
        return new ResponseEntity(new Mensaje("Skills actualizados"),HttpStatus.OK);
    }
}

    
  
