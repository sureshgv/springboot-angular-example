package com.example.beer;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

/**
 * @author sureshgv on 2019-07-02
 */

@RepositoryRestResource
interface BeerRepository extends JpaRepository<Beer, Long> { }