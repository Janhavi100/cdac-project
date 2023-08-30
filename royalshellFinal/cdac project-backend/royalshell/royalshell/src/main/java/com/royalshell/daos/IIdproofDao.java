package com.royalshell.daos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.royalshell.entities.Idproof;

public interface IIdproofDao extends JpaRepository<Idproof, Integer>{

	Idproof findById(int id);
}
